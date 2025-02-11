import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-color-1 text-white font-outfit px-4 py-2 shadow">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/src/assets/Logo.png" 
            alt="Logo Pokédex" 
            className="w-72 h-auto mx-auto"
          />
        </div>
        <SearchBar onSearch={onSearch} />
        <button
          className="sm:hidden text-white hover:text-gray-300 focus:outline-none mt-4"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} flex-col sm:flex-row gap-4 mt-4`}>
          <a
            href="/"
            className="font-manrope bg-color-1 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Inicio
          </a>
          <a
            href="/favorites"
            className="font-manrope bg-color-1 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Favoritos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;