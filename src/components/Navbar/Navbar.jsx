import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-color-1 text-white font-BarlowCondensed px-4 py-2 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-medium font-concertone">Pokédex</h1>
        <button
          className="sm:hidden text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Icono de hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} flex-col sm:flex-row gap-4`}>
          <a href="/" className="hover:bg-violet-500 px-3 py-2 rounded transition">Inicio</a>
          <a href="/favorites" className="hover:bg-violet-500  px-3 py-2 rounded transition">Favoritos</a>
          <a href="/search" className="hover:bg-violet-500 px-3 py-2 rounded transition">Buscar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
