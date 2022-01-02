import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonDetailItem from "./PokemonDetailItem";
import mockPokemon from "../mocks/mock-sandslah-data.json";

test("render one pokemon with regarding image and name", () => {
  render(<PokemonDetailItem pokemon={mockPokemon} name="sandslash" />, {
    wrapper: MemoryRouter,
  });
  const image = screen.getByAltText("sandslash's visual depiction");
  const title = screen.getByTestId("pokemon-name-detail");
  expect(image).toBeInTheDocument();
  expect(title.textContent).toMatch("sandslash");
});
