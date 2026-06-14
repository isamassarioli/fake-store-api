import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('mor_2314'); // Credencial padrão da API
  const [password, setPassword] = useState('83r5^_');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });
      // Salva o token no LocalStorage
      localStorage.setItem('token', res.data.token);
      navigate('/perfil');
    } catch (error) {
      alert('Erro ao fazer login. Verifique as credenciais.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Entrar na Conta</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Usuário</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Senha</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}