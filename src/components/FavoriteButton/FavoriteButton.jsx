import React, { useState, useEffect } from 'react';

const FavoriteButton = ({ pokemonId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(pokemonId));
  }, [pokemonId]);


  const toggleFavorite = () => {
    if (!pokemonId) {
      console.error('Error: pokemonId es null o undefined');
      return;
    }

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      favorites = favorites.filter((id) => id !== pokemonId);
    } else {

      if (!favorites.includes(pokemonId)) {
        favorites.push(pokemonId);
      }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    const event = new CustomEvent('favoritesUpdated');
    window.dispatchEvent(event);
  };

  return (
    <button
      className="focus:outline-none"
      onClick={toggleFavorite}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
        fill={isFavorite ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;