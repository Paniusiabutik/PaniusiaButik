import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-accent hover:text-white transition-colors duration-200 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label="Dodaj do koszyka"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">{product.price.toFixed(2)} PLN</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;