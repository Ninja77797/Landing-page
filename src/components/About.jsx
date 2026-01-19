import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Filosofía Profesional
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Compromiso, excelencia y resultados tangibles para tu negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Target className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Misión</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Brindar servicios contables y fiscales confiables, oportunos y personalizados que faciliten 
              la toma de decisiones financieras de mis clientes, garantizando cumplimiento normativo y 
              optimización de recursos.
            </p>
          </div>
          
          <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Eye className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Visión</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ser reconocida como una contadora pública referente a nivel nacional por la excelencia 
              en el servicio, la ética profesional y la capacidad de aportar valor estratégico a 
              empresas y emprendedores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
