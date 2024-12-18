import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ cardCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dynamic menu items array
  const menuItems = [
    { name: 'Elektronika', link: '/category/electronics' },
    { name: 'Qurilish', link: '/category/construction' },
    { name: 'Oziq ovqat', link: '/category/food' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="mr-4 flex-shrink-0 font-bold text-purple-600 text-xl">
            <Link to="/">ShopHub</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-purple-600 focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } absolute md:static top-16 left-0 w-full bg-white md:block`}
          >
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 md:ml-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="hover:text-purple-600 text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center space-x-4">
              <Link to='/profile'><User className="h-6 w-6 cursor-pointer hover:text-purple-600" /></Link>
              {/*<Heart className="h-6 w-6 cursor-pointer hover:text-purple-600" />*/}
              <div className="relative">
                <Link to="/cart">
                  <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-purple-600" />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cardCount}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
