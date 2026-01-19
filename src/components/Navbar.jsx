import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from '../assets/logo7-book.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'servicios', 'por-que-yo', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#inicio" className="flex-shrink-0 group">
            <img 
              src={Logo} 
              alt="Liceth Luna Logo" 
              className="w-11 h-11 group-hover:scale-110 transition-transform duration-300 drop-shadow-md group-hover:drop-shadow-lg"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className={`text-sm font-medium transition-colors ${
              activeSection === 'inicio' 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}>
              Inicio
            </a>
            <a href="#sobre-mi" className={`text-sm font-medium transition-colors ${
              activeSection === 'sobre-mi' 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}>
              Sobre Mí
            </a>
            <a href="#servicios" className={`text-sm font-medium transition-colors ${
              activeSection === 'servicios' 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}>
              Servicios
            </a>
            <a href="#testimonios" className={`text-sm font-medium transition-colors ${
              activeSection === 'testimonios' 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}>
              Testimonios
            </a>
            <a href="#contacto" className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeSection === 'contacto'
                ? 'bg-primary-700 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}>
              Contacto
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      
      {/* Overlay para cerrar menú al hacer clic fuera */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ top: '64px' }}
        />
      )}

      {isOpen && (
        <div 
          className="md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl z-40 overflow-hidden"
          style={{ 
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="px-4 py-4 space-y-1">
            <a 
              href="#inicio" 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group ${
                activeSection === 'inicio'
                  ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className={`w-1 h-8 bg-primary-600 rounded-full transition-opacity ${
                activeSection === 'inicio' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
              Inicio
            </a>
            <a 
              href="#sobre-mi" 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group ${
                activeSection === 'sobre-mi'
                  ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className={`w-1 h-8 bg-primary-600 rounded-full transition-opacity ${
                activeSection === 'sobre-mi' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
              Sobre Mí
            </a>
            <a 
              href="#servicios" 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group ${
                activeSection === 'servicios'
                  ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className={`w-1 h-8 bg-primary-600 rounded-full transition-opacity ${
                activeSection === 'servicios' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
              Servicios
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group ${
                activeSection === 'testimonios'
                  ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className={`w-1 h-8 bg-primary-600 rounded-full transition-opacity ${
                activeSection === 'testimonios' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
              Testimonios
            </a>
            <div className="pt-2">
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 bg-primary-600 text-white text-center hover:bg-primary-700 rounded-lg font-semibold transition-all shadow-md"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
