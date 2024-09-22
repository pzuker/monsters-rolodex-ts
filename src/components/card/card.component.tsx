import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster: { email, id, name } }: CardProps) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
