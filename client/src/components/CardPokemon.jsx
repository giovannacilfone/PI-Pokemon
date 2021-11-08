import React from "react";
import "./CardPokemon.css";


export default function CardPokemon({ name, types, image }) {
  return (
    <div className="stylesCard">
      <div>
        <h3 className="name"> {name}</h3>
      </div>
      <div>
        <img src={image} alt="imagen" className="img" />
      </div>
      <div>
        <ul className="typeStyle">
          <li className="type">{types[0]} </li>
          <li> {types[1]}</li>
        </ul>
      </div>
    </div>
  );
}
