import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
            {/* Container da imagem com hover effect */}
            <div className="w-full h-48 mb-6 flex justify-center items-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            {/* Tipografia com hierarquia clara */}
            <h2 className="text-gray-700 font-medium text-sm line-clamp-2 mb-2 min-h-[40px]">
              {product.title}
            </h2>
            <p className="text-2xl font-bold text-slate-900 mb-6 mt-auto">
              R$ {product.price.toFixed(2)}
            </p>
            
            {/* Call to Action bem definido */}
            <Link 
              to={`/produto/${product.id}`} 
              className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-200">
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}