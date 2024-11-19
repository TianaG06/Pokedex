import React, { useState } from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => navigate(`/pokemon/${id}`)}
      className="cursor-pointer border p-4 rounded shadow hover:shadow-lg transition-all"
    >
      <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <FavoriteButton isFavorite={isFavorite} onClick={(e) => {
        e.stopPropagation(); 
        toggleFavorite();
      }} />
    </div>
  );
};

export default PokemonCard;
