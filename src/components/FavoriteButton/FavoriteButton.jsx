import React from 'react';

const FavoriteButton = ({ isFavorite, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-300'} hover:bg-red-400`}
  >
    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
  </button>
);

export default FavoriteButton;
