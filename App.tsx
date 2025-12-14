import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import About from './pages/About';
import StylistChat from './components/StylistChat';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider } from './context/AuthContext';
import { Category } from './types';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router>
          <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/meskie" 
                  element={<Products category={Category.MEN} title="Moda Męska" />} 
                />
                <Route 
                  path="/damskie" 
                  element={<Products category={Category.WOMEN} title="Moda Damska" />} 
                />
                <Route path="/koszyk" element={<Cart />} />
                <Route path="/logowanie" element={<Login />} />
                <Route path="/rejestracja" element={<Register />} />
                <Route path="/o-nas" element={<About />} />
              </Routes>
            </main>
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <span className="text-2xl font-bold">Paniusia<span className="text-accent">Butik</span></span>
                  <p className="text-gray-400 text-sm mt-2">© 2025 ModaStyle. Wszelkie prawa zastrzeżone.</p>
                </div>
                <div className="flex space-x-6">
                   <a href="#" className="text-gray-400 hover:text-white">Regulamin</a>
                   <a href="#" className="text-gray-400 hover:text-white">Polityka Prywatności</a>
                   <a href="#" className="text-gray-400 hover:text-white">Kontakt</a>
                </div>
              </div>
            </footer>
            <StylistChat />
          </div>
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
};

export default App;