import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow">
      <div className="flex-1 flex justify-center">
        <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full mb-4 uppercase">
          {product.category}
        </span>
        <p className="text-gray-700 text-lg mb-6">{product.description}</p>
        <p className="text-4xl font-bold text-blue-600">R$ {product.price.toFixed(2)}</p>
        <div className="mt-4 flex items-center">
           <span className="text-yellow-500 text-xl mr-2">★ {product.rating.rate}</span>
           <span className="text-gray-500">({product.rating.count} avaliações)</span>
        </div>
      </div>
    </div>
  );
}