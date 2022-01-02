import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/ui/Layout";
import PokemonList from "./pages/PokemonList.page";
import PokemonDetail from "./pages/PokemonDetail.page";
import FavoritesList from "./pages/FavoritesList.page";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <Layout>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="pokemon/:name" element={<PokemonDetail />} />
            <Route path="*" element={<Navigate to="/pokemon" />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </Layout>
  );
}

export default App;
