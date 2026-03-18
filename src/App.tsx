import { useState, useEffect, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ChevronLeft, Check, Clock, LifeBuoy, Mail, Send, LogOut, User } from 'lucide-react';
import { Product } from './types';
import { supabase } from './supabase';
import { useAuth } from './AuthContext';
import { Login, Register } from './AuthPages';

// --- Components ---

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-4">
        <div className="w-full flex justify-between items-center sm:justify-center">
          <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 sm:text-sage-600">
            CachadaSV
          </Link>
          <button className="sm:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex w-full`}>
          <ul className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium text-slate-600">
            <li>
              <Link 
                to="/" 
                className={`hover:text-indigo-600 sm:hover:text-sage-500 transition-colors py-2 px-1 border-b-2 ${isActive('/') ? 'border-indigo-600 sm:border-sage-500 text-indigo-600 sm:text-sage-500' : 'border-transparent'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className={`hover:text-indigo-600 sm:hover:text-sage-500 transition-colors py-2 px-1 border-b-2 ${isActive('/productos') ? 'border-indigo-600 sm:border-sage-500 text-indigo-600 sm:text-sage-500' : 'border-transparent'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className={`hover:text-indigo-600 sm:hover:text-sage-500 transition-colors py-2 px-1 border-b-2 ${isActive('/contacto') ? 'border-indigo-600 sm:border-sage-500 text-indigo-600 sm:text-sage-500' : 'border-transparent'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li className="pl-4 sm:border-l border-gray-200 flex flex-col sm:flex-row items-center gap-4">
              {user ? (
                <>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {user.email?.split('@')[0]}
                  </span>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors py-2"
                  >
                    <LogOut className="w-4 h-4" /> Salir
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" /> Acceder
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-100 py-10 px-6 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
      <span className="text-indigo-600 sm:text-sage-600 font-semibold text-lg">CachadaSV</span>
      <p className="text-slate-400 text-xs text-center">
        © 2023 CachadaSV. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex flex-col"
  >
    <section className="relative overflow-hidden bg-warm-beige py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl mb-4">
          Bienvenidos a <span className="font-semibold text-sage-600">CachadaSV</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-sm mx-auto">
          Tu tienda de productos esenciales, seleccionados cuidadosamente para tu día a día.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/productos" 
            className="bg-sage-600 text-white px-10 py-4 rounded-full font-medium shadow-sm hover:bg-sage-700 active:scale-95 transition-all"
          >
            Ver Productos
          </Link>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sage-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-sage-200/30 rounded-full blur-3xl"></div>
    </section>

    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-500 mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Calidad</h3>
          <p className="text-xs text-slate-500 mt-2">Productos garantizados con los mejores estándares.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-500 mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Rapidez</h3>
          <p className="text-xs text-slate-500 mt-2">Entregas eficientes para que no tengas que esperar.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-500 mb-4">
            <LifeBuoy className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Soporte</h3>
          <p className="text-xs text-slate-500 mt-2">Atención personalizada para resolver tus dudas.</p>
        </div>
      </div>
    </section>
  </motion.div>
);

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (data) {
        setProducts(data as Product[]);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Productos</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explora nuestra colección curada de artículos esenciales con estilo y calidad garantizada.</p>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500 animate-pulse">Cargando productos de Supabase...</div>
      ) : (
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-lg font-bold text-indigo-600">${Number(product.price).toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-6">{product.description}</p>
                <Link 
                  to={`/productos/${product.id}`}
                  className="mt-auto w-full bg-indigo-600 text-white text-center px-4 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  Ver Detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchProduct() {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (data) {
        setProduct(data as Product);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-20 text-center animate-pulse text-gray-500">Cargando detalles...</div>;
  if (!product) return <div className="p-20 text-center">Producto no encontrado en la base de datos</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <div className="max-w-lg mx-auto">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img 
            src={product.detail_image || product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="px-6 py-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">{product.name}</h2>
            <p className="text-2xl font-medium text-indigo-600">${Number(product.price).toFixed(2)}</p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400">Descripción</h3>
            <p className="leading-relaxed text-gray-600">
              {product.full_description}
            </p>
            <ul className="space-y-3 text-gray-600 list-none text-sm">
              {product.features?.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 pb-8 shadow-lg z-40">
        <div className="max-w-lg mx-auto">
          <button 
            className="w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-black transition-all active:scale-[0.98] shadow-md"
            onClick={() => navigate('/contacto')}
          >
            Contactar para comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    
    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value
      });

    setLoading(false);
    if (!error) {
      setSubmitted(true);
    } else {
      alert("Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto px-6 py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Contáctanos</h2>
        <p className="text-lg text-slate-500">¿Tienes alguna pregunta? Escríbenos.</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center border border-green-100">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
          <p>Gracias por contactarnos. Hemos guardado tu mensaje en Supabase de forma segura.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-semibold underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              required 
              className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              required 
              className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Mensaje</label>
            <textarea 
              id="message" 
              required 
              rows={4} 
              className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-xl px-6 py-4 text-sm font-semibold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-75 disabled:active:scale-100"
          >
            {loading ? (
              <span>Enviando...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-16 text-center">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Otras formas de contacto</p>
        <div className="flex items-center justify-center space-x-2 text-slate-600">
          <Mail className="h-5 w-5 text-indigo-400" />
          <a href="mailto:hola@cachadasv.com" className="text-lg font-medium hover:text-indigo-600 transition-colors">
            hola@cachadasv.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
