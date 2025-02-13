import React, { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const Pokedex = ({ searchQuery }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 20;

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000');
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

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const totalPages = Math.ceil(filteredPokemon.length / pokemonPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentPokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className="px-4 py-2 bg-color-1 text-white font-manrope rounded-full shadow-md hover:bg-color-4 hover:shadow-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="w-10 h-10 flex items-center justify-center bg-color-2 text-color-3 font-manrope font-bold rounded-full shadow-md">
          {currentPage}
        </div>

        <button
          className="px-4 py-2 bg-color-1 text-white font-manrope rounded-full shadow-md hover:bg-color-4 hover:shadow-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPokemon >= filteredPokemon.length}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;