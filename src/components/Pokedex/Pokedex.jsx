import React, { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const Pokedex = ({ searchQuery }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();

        const pokemonWithImages = data.results.map((pokemon, index) => {
          const id = index + 1; 
          return {
            ...pokemon,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
          };
        });

        setPokemonList(pokemonWithImages);
        setFilteredPokemon(pokemonWithImages);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const isNumber = !isNaN(searchQuery);
      let foundPokemon = null;

      if (isNumber) {
        const id = parseInt(searchQuery, 10);
        foundPokemon = pokemonList.find((p) => p.id === id);
      } else {
        foundPokemon = pokemonList.find((p) => p.name === searchQuery.toLowerCase());
      }

      if (foundPokemon) {
        setFilteredPokemon([foundPokemon]);
      } else {
        alert('No se encontró ningún Pokémon. Por favor, verifica tu búsqueda.');
        setFilteredPokemon(pokemonList);
      }
    } else {
      setFilteredPokemon(pokemonList);
    }
  }, [searchQuery, pokemonList]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;