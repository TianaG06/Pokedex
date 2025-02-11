import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query) {
      alert('Por favor, introduce un nombre o ID.');
      return;
    }
    onSearch(query.trim().toLowerCase());
  };

  return (
    <div className="flex items-center gap-6 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Pokémon por nombre o ID"
        className="border border-gray-300 p-3 rounded-full w-[400px] shadow-md focus:outline-none focus:ring-2 focus:ring-color-1 transition cursor-text font-manrope text-lg text-color-3 sm:w-full" 
      />
      <button
        onClick={handleSearch}
        className="font-manrope bg-color-1 text-white px-6 py-3 rounded-full hover:bg-color-2 hover:text-black shadow-lg transition-transform hover:scale-105 text-lg" 
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;