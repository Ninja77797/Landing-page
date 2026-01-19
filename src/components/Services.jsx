import { 
  Calculator, 
  FileText, 
  Users, 
  Shield, 
  Briefcase, 
  Home
} from 'lucide-react';
import { services } from '../data/services';

const Services = () => {

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Soluciones contables integrales para empresas, emprendedores y propietarios
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
