import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Info Principal */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Nombre Profesional</h3>
            <p className="text-gray-400 text-sm">Contadora Pública Certificada</p>
          </div>
          
          {/* Contacto - DESACTIVADO */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-50 cursor-not-allowed">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={16} />
              <span className="text-sm">contacto@ejemplo.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={16} />
              <span className="text-sm">+57 300 000 0000</span>
            </div>
          </div>
          
          {/* Redes Sociales - DESACTIVADO */}
          <div className="flex items-center gap-4 opacity-50 cursor-not-allowed">
            <div className="text-gray-400" aria-label="LinkedIn">
              <Linkedin size={20} />
            </div>
            <div className="text-gray-400" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <div className="text-gray-400" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center space-y-2">
          <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2 mb-2">
            <p className="text-yellow-400 font-semibold text-sm sm:text-base">
              🚧 ENTORNO DE DESARROLLO 🚧
            </p>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Portafolio Contable - Solo diseño visual, sin funcionalidad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
