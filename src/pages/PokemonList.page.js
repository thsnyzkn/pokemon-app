import { useState } from "react";
import useFetch from "../hooks/useFetch";
import PokemonList from "../components/PokemonList";
import FilterWrapper from "../components/ui/FilterWrapper";
import { RectangleButton } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/pokemon-logo.png";
const PokemonListPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const {
    data: pokemons,
    loading,
    error,
  } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (loading && !pokemons) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred..</div>;
  }
  const { results } = pokemons ?? [];
  const filteredList =
    filter && results.filter(({ name }) => name.includes(filter));
  return (
    <>
      <img src={Logo} alt="Pokemon logo" height="120px" />
      <FilterWrapper>
        <label htmlFor="filter">Search:</label>
        <input
          id="filter"
          value={filter}
          name="filter"
          onChange={(e) => setFilter(e.target.value)}
        />
        <RectangleButton onClick={() => navigate("/favorites")}>
          ➡Favorites
        </RectangleButton>
      </FilterWrapper>
      <PokemonList pokemons={filter ? filteredList : results} />
    </>
  );
};

export default PokemonListPage;
