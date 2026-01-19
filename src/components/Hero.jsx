import { ArrowRight, CheckCircle, Sparkles, TrendingUp, Shield, Award, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Elementos decorativos animados - alejados de la foto */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary-400/60 dark:bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-blue-400/60 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-20 left-1/3 w-64 h-64 bg-purple-300/55 dark:bg-purple-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Badges flotantes animados - solo visibles en pantallas extra grandes */}
      <div className="hidden xl:block absolute top-40 right-1/4 animate-bounce z-10" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <TrendingUp className="text-green-500" size={28} />
        </div>
      </div>
      
      <div className="hidden xl:block absolute bottom-20 right-1/3 animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <Shield className="text-blue-500" size={28} />
        </div>
      </div>
      
      <div className="hidden xl:block absolute top-1/3 left-20 animate-bounce z-10" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <Award className="text-yellow-500" size={28} />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Foto primero en mobile */}
          <div className="relative flex flex-col items-center justify-center animate-fade-in-up lg:order-2" style={{ animationDelay: '0.2s' }}>
            {/* Imagen profesional flotante */}
            <div className="relative group">
              
              {/* Contenedor placeholder - más pequeña en mobile */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 group-hover:scale-105 transition-all duration-500 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-2xl">
                  <User className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-primary-600 dark:text-primary-400" strokeWidth={1.5} />
                </div>
              </div>

              {/* Badges decorativos - solo visible en desktop */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <p className="text-xs font-bold text-primary-600 dark:text-primary-400">✓ Certificada</p>
              </div>
              
              <div className="hidden lg:block absolute -top-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <p className="text-xs font-bold text-primary-600 dark:text-primary-400">10+ Años</p>
              </div>
            </div>
          </div>

          {/* Contenido de texto después en mobile */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up lg:order-1">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Sparkles className="text-primary-600 dark:text-primary-400" size={14} />
                <span className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide">
                  Contadora Pública Certificada
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Nombre Profesional
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Soluciones contables estratégicas para empresas y emprendedores
              </p>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              Con más de 10 años de experiencia, ofrecemos servicios contables profesionales que facilitan 
              la toma de decisiones financieras y aseguran el cumplimiento normativo de tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start">
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-md text-xs sm:text-sm lg:text-base hover:bg-primary-700 hover:scale-105 font-medium group transition-all duration-300 shadow-lg hover:shadow-xl cursor-not-allowed opacity-75">
                Agendar Consulta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-md text-xs sm:text-sm lg:text-base hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 font-medium transition-all duration-300 cursor-not-allowed opacity-75">
                Ver Servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="group cursor-default text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Años Experiencia</div>
              </div>
              <div className="group cursor-default text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">100+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Clientes</div>
              </div>
              <div className="group cursor-default text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
