import React from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const PokemonCard = ({ pokemon }) => {
  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/96';
  };
  const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div
      className="bg-gradient-to-b from-purple-200 to-white rounded-lg shadow-md p-6 text-center relative max-w-md mx-auto hover:scale-105 transition-transform"
    >
      <div className="absolute top-3 right-3 bg-color-3 text-white px-3 py-1 rounded-full text-sm font-bold font-manrope">
        #{pokemon.id}
      </div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        onError={handleImageError}
        className="w-48 h-48 mx-auto mb-4" 
      />
      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-2 flex items-center justify-center gap-2">
        <h3 className="text-xl font-bold text-slate-800">{formattedName}</h3> 
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </div>
  );
};

export default PokemonCard;