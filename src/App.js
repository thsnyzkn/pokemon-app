import { useState, useEffect } from "react";

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
      <main>
        <ul>
          {pokemons.map(({ name, image }, index) => (
            <li key={index}>
              <span>{name}</span>
              <div>
                <img
                  src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
                  alt={`${name}'s visual depiction`}
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
