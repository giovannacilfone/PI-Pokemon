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
          <li className="type">{
          typeof types[0] === 'string' ? types[0] : types[0]?.name
      } </li>
          <li> {typeof types[1] === 'string' ? types[1] : types[1]?.name}</li>
        </ul>
      </div>
    </div>
  );
}
