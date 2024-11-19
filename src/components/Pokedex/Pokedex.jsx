import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonCard from '../PokemonCard/PokemonCard';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        setPokemonList(data.results);
        setFilteredPokemon(data.results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSearch = async (query) => {
    const isNumber = !isNaN(query);
    let foundPokemon = null;

    if (isNumber) {
      const id = parseInt(query, 10);
      if (id > 0 && id <= pokemonList.length) {
        foundPokemon = pokemonList[id - 1];
      }
    } else {
      foundPokemon = pokemonList.find(p => p.name === query);
    }

    if (foundPokemon) {
      setFilteredPokemon([foundPokemon]);
    } else {
      alert('No se encontró ningún Pokémon. Por favor, verifica tu búsqueda.');
      setFilteredPokemon(pokemonList); 
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
