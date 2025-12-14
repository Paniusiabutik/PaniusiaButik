import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Nowa Kolekcja <span className="text-accent">Wiosna 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Odkryj najnowsze trendy mody męskiej i damskiej. Elegancja spotyka się z komfortem w naszej najnowszej linii ubrań.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/damskie" 
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
            >
              Dla Niej
            </Link>
            <Link 
              to="/meskie" 
              className="px-8 py-3 bg-accent text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
            >
              Dla Niego
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-blue-50 text-accent rounded-full mb-4">
              <Truck size={32} />
            </div>
            <h3 className="font-bold text-lg">Darmowa Dostawa</h3>
            <p className="text-gray-500 text-sm mt-2">Dla zamówień powyżej 200 PLN</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-blue-50 text-accent rounded-full mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-lg">Gwarancja Jakości</h3>
            <p className="text-gray-500 text-sm mt-2">30 dni na zwrot bez pytań</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="p-3 bg-blue-50 text-accent rounded-full mb-4">
              <Star size={32} />
            </div>
            <h3 className="font-bold text-lg">Bestsellery</h3>
            <p className="text-gray-500 text-sm mt-2">Tysiące zadowolonych klientów</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-3xl font-bold text-gray-900">Polecane Produkty</h2>
             <Link to="/damskie" className="text-accent hover:text-blue-700 flex items-center font-medium">
                Zobacz wszystkie <ArrowRight size={18} className="ml-1" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;