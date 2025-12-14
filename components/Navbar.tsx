import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, Menu, X, LogOut } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { cartCount } = useShop();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-accent font-semibold" : "text-gray-600 hover:text-primary";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Paniusia<span className="text-accent">Butik</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Start</Link>
            <Link to="/meskie" className={isActive('/meskie')}>Mężczyźni</Link>
            <Link to="/damskie" className={isActive('/damskie')}>Kobiety</Link>
            <Link to="/o-nas" className={isActive('/o-nas')}>O nas</Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
               {user ? (
                 <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">Witaj, {user.name}</span>
                    <button onClick={logout} className="text-gray-500 hover:text-red-500">
                      <LogOut size={20} />
                    </button>
                 </div>
               ) : (
                 <Link to="/logowanie" className="text-gray-600 hover:text-primary">
                   <UserIcon size={24} />
                 </Link>
               )}
            </div>
            
            <Link to="/koszyk" className="relative text-gray-600 hover:text-primary">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/koszyk" className="mr-4 relative text-gray-600">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Start</Link>
            <Link to="/meskie" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Mężczyźni</Link>
            <Link to="/damskie" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Kobiety</Link>
            <Link to="/o-nas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>O nas</Link>
            
            <div className="border-t border-gray-100 my-2 pt-2">
              {user ? (
                 <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full text-left px-3 py-2 text-red-500 font-medium">Wyloguj</button>
              ) : (
                <>
                  <Link to="/logowanie" className="block px-3 py-2 font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Zaloguj się</Link>
                  <Link to="/rejestracja" className="block px-3 py-2 font-medium text-accent" onClick={() => setIsMenuOpen(false)}>Załóż konto</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;