import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gray-900 py-24">
         <div className="absolute inset-0 overflow-hidden">
             <img src="https://picsum.photos/1920/600?grayscale" alt="Office" className="w-full h-full object-cover opacity-20" />
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Nasza Historia
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                Od 2025 roku dostarczamy styl i jakość, które inspirują.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto text-gray-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Kim jesteśmy?</h3>
            <p className="mb-6">
                ModaStyle to więcej niż sklep odzieżowy. To miejsce, gdzie pasja do mody łączy się z nowoczesną technologią. 
                Wierzymy, że ubranie to sposób na wyrażenie siebie, dlatego dbamy o to, by nasze kolekcje były różnorodne, 
                trwałe i zgodne z najnowszymi trendami.
            </p>
            <p className="mb-6">
                Naszym celem jest zapewnienie klientom nie tylko świetnych produktów, ale także wyjątkowych doświadczeń zakupowych. 
                Dlatego wprowadziliśmy innowacyjnego Asystenta Stylu AI, który pomaga dobrać idealne zestawy na każdą okazję.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nasze wartości</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-gray-900">Jakość:</strong> Wybieramy tylko najlepsze materiały.</li>
                <li><strong className="text-gray-900">Zrównoważony rozwój:</strong> Dbamy o środowisko, minimalizując ślad węglowy.</li>
                <li><strong className="text-gray-900">Klient:</strong> Twoja satysfakcja jest naszym priorytetem.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;