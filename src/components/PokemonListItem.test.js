import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonListItem from "./PokemonListItem";
import { FavoritesProvider } from "../context/FavoritesContext";

test("render one pokemon with regarding image and name", () => {
  const combinedWrapper = ({ children }) => (
    <FavoritesProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </FavoritesProvider>
  );
  render(<PokemonListItem name="sandslash" />, {
    wrapper: combinedWrapper,
  });
  const image = screen.getByAltText("sandslash's visual depiction");
  const title = screen.getByTestId("pokemon-name-list");
  expect(image).toBeInTheDocument();
  expect(title.textContent).toMatch("sandslash");
});
