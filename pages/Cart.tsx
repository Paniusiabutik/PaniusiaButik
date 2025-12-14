import React from 'react';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Twój koszyk jest pusty</h2>
          <p className="text-gray-500 mb-8">Wygląda na to, że nie dodałeś jeszcze żadnych produktów.</p>
          <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-blue-600">
            Wróć do sklepu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Twój Koszyk</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div className="sm:pr-6">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/produkt/${item.id}`} className="hover:text-accent">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        <p className="mt-1 text-sm font-medium text-gray-900">{item.price.toFixed(2)} PLN</p>
                      </div>

                      <div className="mt-4 sm:mt-0 flex items-center justify-between sm:space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                           <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                           >-</button>
                           <span className="px-3 py-1 text-gray-900 font-medium">{item.quantity}</span>
                           <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                           >+</button>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-end">
               <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Wyczyść koszyk</button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Podsumowanie</h2>
              
              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Suma częściowa</dt>
                    <dd className="font-medium text-gray-900">{cartTotal.toFixed(2)} PLN</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Dostawa</dt>
                    <dd className="font-medium text-gray-900">
                      {cartTotal > 200 ? 'Gratis' : '15.00 PLN'}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-base font-bold text-gray-900">Do zapłaty</dt>
                    <dd className="text-base font-bold text-accent">
                      {(cartTotal + (cartTotal > 200 ? 0 : 15)).toFixed(2)} PLN
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => alert('Przejście do płatności... (funkcja demonstracyjna)')}
                  className="w-full bg-gray-900 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 transition-colors flex items-center justify-center"
                >
                  Przejdź do kasy <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;