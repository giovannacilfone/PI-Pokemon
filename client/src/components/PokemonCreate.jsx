import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getType,postPokemon } from "../store/actions/index.js";
import "./PokemonCreate.css";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getType());
  }, []);

 

  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
  }

  function onInputChange(e) {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
dispatch(postPokemon(pokemon))

    // axios.post("http://localhost:3001/pokemons/", pokemon).then(() => {
    //   history.push("/home");
     alert("Personaje creado con exito");
     setPokemon ({
      name: "",
      types: [],
      image: "",
      life: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
     })
    history.push("/home");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <p>
        <label htmlFor=""> Nombre: </label>
        <input
          onChange={onInputChange}
          name="name"
          type="text"
          value={pokemon.name}
        />{" "}
      </p>
      <p>
        <label htmlFor="">Imagen: </label>
        <input
          onChange={onInputChange}
          name="image"
          type="text"
          value={pokemon.image}
        />{" "}
      </p>
      <p>
        {" "}
        <label htmlFor="">Vida: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
        />{" "}
      </p>
      <p>
        <label htmlFor="">Fuerza: </label>
        <input
          onChange={onInputChange}
          name="attack"
          type="number"
          value={pokemon.attack}
        />{" "}
      </p>
      <p>
        <label htmlFor="">Defensa: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
        />{" "}
      </p>
      <p>
        <label htmlFor="">Velocidad: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
        />{" "}
      </p>
      <p>
        {" "}
        <label htmlFor="">Altura: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
        />{" "}
      </p>
      <p>
        <label htmlFor="">Peso: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
        />{" "}
      </p>
      <p>
        {" "}
        <select onChange={handleSelect}>
          {types.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}{" "}
        </select>
        <ul>
          <li>{pokemon.types.map((e) => e + " , ")}</li>
        </ul>
      </p>
      <button type="submit">Crear</button>
    </form>
  );
}
