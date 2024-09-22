import { ChangeEvent, useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  name: string;
  id: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchText)
      )
    );
  }, [monsters, searchText]);

  useEffect(() => {
    getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value.toLocaleLowerCase());

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchTextChange}
      />
      {monsters.length === 0 ? (
        <div>Loading.....</div>
      ) : (
        <CardList monsters={filteredMonsters} />
      )}
    </div>
  );
};

export default App;
