import { useState, useEffect } from "react";
import GridList from "./components/GridList";
import PokemonCard from "./components/PokemonItem";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();

        setPokemons(data?.results);
        console.log(data?.results);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error occurred..</div>;
  }
  return (
    <div className="App">
      <main
        style={{
          display: "flex",
          margin: "0 auto",
          maxWidth: "60vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridList>
          {pokemons.map(({ name }, index) => (
            <PokemonCard key={index}>
              <div style={{ maxHeight: "100%", maxWidth: "100%" }}>
                <img
                  src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
                  alt={`${name}'s visual depiction`}
                />
              </div>
              <span>{name}</span>
            </PokemonCard>
          ))}
        </GridList>
      </main>
    </div>
  );
}

export default App;
