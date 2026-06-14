import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('https://fakestoreapi.com/users/1')
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return (
    <div className="flex justify-center items-center h-64 mt-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
        <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black uppercase shadow-inner">
          {user.name.firstname[0]}{user.name.lastname[0]}
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900 capitalize">{user.name.firstname} {user.name.lastname}</h2>
          <p className="text-gray-500 font-medium">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Informações de Contato</h3>
          <p className="text-lg text-slate-800 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-lg text-slate-800"><strong>Telefone:</strong> {user.phone}</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Endereço de Entrega</h3>
          <p className="text-lg text-slate-800 capitalize">{user.address.street}, {user.address.number}</p>
          <p className="text-lg text-slate-800 capitalize">{user.address.city} - CEP: {user.address.zipcode}</p>
        </div>
      </div>

      <button 
        onClick={handleLogout} 
        className="mt-10 w-full bg-red-50 text-red-600 font-bold py-4 rounded-xl hover:bg-red-100 transition-colors">
        Sair da Conta
      </button>
    </div>
  );
} 
