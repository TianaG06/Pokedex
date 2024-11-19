import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Pokedex from '../components/Pokedex/Pokedex';
import Favorites from '../components/Favorite/Favorite';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';
import Footer from './../components/Footer/Footer';

const AppRouter = () => {
    return (
      <Router>
        <Navbar />
        <main className="p-4">
          <Routes>
            {/* Ruta principal que muestra la Pokédex */}
            <Route path="/" element={<Pokedex />} />
            {/* Ruta para mostrar los favoritos */}
            <Route path="/favorites" element={<Favorites />} />
            {/* Ruta para mostrar detalles de un Pokémon específico */}
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </main>
        <Footer />
  </Router>
    )
    ;
  };

export default AppRouter;