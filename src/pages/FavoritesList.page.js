import PokemonList from "../components/PokemonList";
import { useFavorites } from "../context/FavoritesContext";
import Link from "../components/ui/Link";

const FavoritesListPage = () => {
  const { favorites } = useFavorites();
  return (
    <>
      <Link to={"/"}>Go back to list</Link>
      {favorites.length > 0 ? (
        <PokemonList pokemons={favorites} />
      ) : (
        <div>No pokemon has been favorited</div>
      )}
    </>
  );
};

export default FavoritesListPage;
