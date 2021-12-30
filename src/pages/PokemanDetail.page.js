import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const PokemonDetail = () => {
  const location = useLocation();
  const pokemanName = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemanName}`
        );
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    }
    fetchData();
  }, [pokemanName]);
  const { abilities, id, types, height } = pokemon;
  const pokemonTypes = types && types.map((type) => type.type.name).toString();
  console.log(pokemonTypes);
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemanName}.gif`}
          alt={`${pokemanName}'s visual depiction`}
        />
        <span>{pokemanName}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>ID:{id}</span>
        <span>Type:{pokemonTypes}</span>
        <span>Height:{height}</span>
        <ul>
          {abilities?.map(({ ability: { name } }, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PokemonDetail;
