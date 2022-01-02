import styled from "styled-components";
import { useFavorites } from "../context/FavoritesContext";
import PokemonImage from "./PokemonImage";
import Link from "./ui/Link";
import Label from "./ui/Label";
import Button from "./ui/Button";
const PokemonCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const PokemonListItem = ({ name }) => {
  const { addOrRemoveItem, favorites } = useFavorites();
  return (
    <PokemonCard>
      <Button onClick={() => addOrRemoveItem(name)}>
        {favorites.some((favorite) => favorite.name === name) ? "💔" : "❤️"}
      </Button>
      <Link to={`/pokemon/${name}`}>
        <PokemonImage name={name} />
        <Label data-testid="pokemon-name-list">{name}</Label>
      </Link>
    </PokemonCard>
  );
};
export default PokemonListItem;
