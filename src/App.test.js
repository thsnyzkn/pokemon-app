import { rest } from "msw";
import { setupServer } from "msw/node";
import mockData from "./mocks/mock-all-pokemons-data.json";
import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("display 151 pokemons' images and names, click randomly one of them navigate to detail page and render the respective pokemon.", async () => {
  render(<App />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  const list = await screen.findByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(151);
  const randomElementIndex = Math.floor(Math.random() * items.length) + 1;
  const pokemonToBeSelected = items[randomElementIndex];
  const { getByRole, getByTestId } = within(pokemonToBeSelected);
  const linkToClick = getByRole("link");
  fireEvent.click(linkToClick);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  const pokemonsName = getByTestId("pokemon-name-list").textContent;
  const infoContainer = await screen.findByTestId(
    `detailed-info-${pokemonsName}`
  );
  expect(infoContainer).toBeInTheDocument();
  const pokemonImage = screen.getByTestId("pokemon-image");
  const pokemonName = screen.getByTestId("pokemon-name-detail");
  expect(pokemonName.textContent).toEqual(pokemonsName);
  expect(pokemonImage.attributes.alt.textContent).toEqual(
    `${pokemonsName}'s visual depiction`
  );
});
