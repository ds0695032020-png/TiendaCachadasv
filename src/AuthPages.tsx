import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, UserPlus } from 'lucide-react';
import { supabase } from './supabase';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    
    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto px-6 py-12 md:py-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Bienvenido de nuevo</h2>
        <p className="text-slate-500">Inicia sesión en tu cuenta de CachadaSV</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
            {errorMsg}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            placeholder="••••••••"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-indigo-600 text-white rounded-xl px-6 py-4 text-sm font-semibold shadow-md hover:bg-indigo-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-75"
        >
          {loading ? 'Iniciando...' : <><LogIn className="w-4 h-4" /> Iniciar Sesión</>}
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-slate-500">
        ¿No tienes una cuenta? <Link to="/registro" className="text-indigo-600 font-semibold hover:underline">Regístrate aquí</Link>
      </p>
    </motion.div>
  );
};

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    
    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto px-6 py-12 text-center text-green-700">
        <h2 className="text-2xl font-bold mb-4">¡Registro exitoso!</h2>
        <p className="mb-6">Por favor revisa tu correo electrónico para confirmar tu cuenta.</p>
        <Link to="/login" className="text-indigo-600 font-semibold hover:underline mt-4 inline-block">
          Ir a Iniciar Sesión
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto px-6 py-12 md:py-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Crear Cuenta</h2>
        <p className="text-slate-500">Únete a CachadaSV hoy mismo</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
            {errorMsg}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            minLength={6}
            className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            placeholder="Min. 6 caracteres"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-indigo-600 text-white rounded-xl px-6 py-4 text-sm font-semibold shadow-md hover:bg-indigo-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-75"
        >
          {loading ? 'Creando...' : <><UserPlus className="w-4 h-4" /> Crear Cuenta</>}
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-slate-500">
        ¿Ya tienes cuenta? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Inicia sesión aquí</Link>
      </p>
    </motion.div>
  );
};
