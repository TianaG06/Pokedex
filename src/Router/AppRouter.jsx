import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Pokedex from '../components/Pokedex/Pokedex';
import Favorite from '../components/Favorite/Favorite';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;