import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/ui/Layout";
import PokemonList from "./pages/PokemonList.page";
import PokemonDetail from "./pages/PokemanDetail.page";
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
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" />} />
          <Route
            path="/pokemon"
            element={<PokemonList pokemons={pokemons} />}
          />
          <Route path="pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
