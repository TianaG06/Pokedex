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
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Pokémon por nombre o ID"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
