import { useParams } from "react-router-dom";
import PokemonDetailItem from "../components/PokemonDetailItem";
import useFetch from "../hooks/useFetch";
const PokemonDetailPage = () => {
  const pokemonName = useParams().name;

  const {
    data: pokemon,
    loading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  if (loading && !pokemon) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred..</div>;
  }

  return <PokemonDetailItem pokemon={pokemon} name={pokemonName} />;
};

export default PokemonDetailPage;
