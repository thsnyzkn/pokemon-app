import GridList from "./ui/GridList";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons }) => (
  <GridList>
    {pokemons?.map(({ name }, index) => (
      <PokemonListItem name={name} key={index} />
    ))}
  </GridList>
);

export default PokemonList;
