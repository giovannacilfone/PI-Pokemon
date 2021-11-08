const { Router } = require("express");
const getAllPokemons = require("../controllers/getPokemon");
const router = Router();
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let name = req.query.name;
    let pokemonsTotal = await getAllPokemons();
    if (name) {
      let pokemonName = await pokemonsTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pokemonName.length
        ? res.status(200).send(pokemonName)
        : res.status(404).send("El pokemon ingresado no existe");
    } else {
      res.status(200).send(pokemonsTotal);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pokemonsTotal = await getAllPokemons();
    if (id) {
      let pokemonId = pokemonsTotal.filter((el) => el.id == id);
      pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("No se encontró el pokemon");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { name, image, life, attack, defense, speed, height, weight, types } =
      req.body;
    const newPokemon = await Pokemon.create({
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    console.log(types)
    if (!name) return res.json({ info: "El nombre es obligatorio" });
    let findType = [];
        const typeDb = await Type.findOne({
          attributes: ["id"],
          where: { name: types[0] },
        });
        findType.push(typeDb);
        ;
    return res.send("Pokemon created successfully");
  } catch (err) {
    res.status(400).send("Error en data");
  }
});

module.exports = router;