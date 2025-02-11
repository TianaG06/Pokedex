import React, { useState } from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/96'; 
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center relative">

      <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-bold font-manrope">
        #{pokemon.id}
      </div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        onError={handleImageError} 
        className="w-40 h-40 mx-auto mb-2"
      />
      <h3 className="text-lg font-bold">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
