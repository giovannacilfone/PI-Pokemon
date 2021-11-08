import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="container">
      <header id="navegador" className="header">
        <Link to="/home">
          <img   className="logo" src="images/pokemones.png" alt="404" />
        </Link>
        <ul>
          <li>
            <Link to="/create" className="created" >
              Crear Pokemon
            </Link>
          </li>{" "}
        </ul>
      </header>
    </div>
  );
}
