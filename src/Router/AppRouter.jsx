import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Pokedex from '../components/Pokedex/Pokedex';
import Favorites from '../components/Favorite/Favorite';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';
import Footer from './../components/Footer/Footer';

const AppRouter = () => {

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>

      <Navbar onSearch={handleSearch} />
      <main className="p-4">
        <Routes>

          <Route path="/" element={<Pokedex searchQuery={searchQuery} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;