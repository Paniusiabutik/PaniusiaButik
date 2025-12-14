import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

interface ProductsPageProps {
  category: Category;
  title: string;
}

const Products: React.FC<ProductsPageProps> = ({ category, title }) => {
  const filteredProducts = MOCK_PRODUCTS.filter(p => p.category === category);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Znajdź idealne ubrania dla siebie. Najlepsza jakość w najlepszych cenach.
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-xl text-gray-500">Brak produktów w tej kategorii.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;