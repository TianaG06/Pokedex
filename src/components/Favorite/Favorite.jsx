import React, { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import furretWalk from '../../assets/furret.gif';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const validFavorites = storedFavorites.filter((id) => id !== null);
    console.log('Favorites loaded from localStorage:', validFavorites);
    setFavorites(validFavorites);
  };

  useEffect(() => {
    loadFavorites();

    const handleFavoritesUpdated = () => {
      loadFavorites();
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdated);

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated);
    };
  }, []);

  const fetchFavoritePokemon = async (ids) => {
    try {
      const responses = await Promise.all(
        ids.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
        )
      );

      const formattedPokemon = responses.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
      }));

      console.log('Fetched favorite Pokémon:', formattedPokemon);
      return formattedPokemon;
    } catch (error) {
      console.error('Error fetching favorite Pokémon:', error);
      return [];
    }
  };

  useEffect(() => {
    if (favorites.length > 0) {
      fetchFavoritePokemon(favorites).then((data) => setFavoritePokemon(data));
    } else {
      setFavoritePokemon([]);
    }
  }, [favorites]);

  return (
    <div>
      <h1 className="text-2xl font-outfit font-bold text-center my-6">Pokémon Favoritos</h1>
      {favoritePokemon.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {favoritePokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            src={furretWalk}
            alt="No hay Pokémon favoritos"
            className="w-68 h-68 mb-4" 
          />
          <p className="text-xl font-outfit font-bold text-gray-700">
            ¡Oops! No encontramos Pokémon favoritos.
          </p>
          <p className="text-lg font-outfit text-gray-500">
            Vuelve al inicio para guardar alguno.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorite;