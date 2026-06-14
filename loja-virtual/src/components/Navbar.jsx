import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter">
          Minha<span className="text-indigo-600">Loja</span>.
        </Link>
        <div className="space-x-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Início</Link>
          <Link to="/login" className="hover:text-indigo-600 transition-colors">Entrar</Link>
          <Link to="/perfil" className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors">
            Meu Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}