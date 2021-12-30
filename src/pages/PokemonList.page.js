import { Link } from "react-router-dom";
import GridList from "../components/ui/GridList";
import PokemonItem from "../components/ui/PokemonItem";
const PokemonList = ({ pokemons }) => {
  return (
    <GridList>
      {pokemons.map(({ name }, index) => (
        <Link
          to={name}
          style={{ width: "100%", height: "100%", textDecoration: "none" }}
          key={index}
        >
          <PokemonItem>
            <div style={{ maxHeight: "100%", maxWidth: "100%" }}>
              <img
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
                alt={`${name}'s visual depiction`}
              />
            </div>
            <span>{name}</span>
          </PokemonItem>
        </Link>
      ))}
    </GridList>
  );
};

export default PokemonList;
