import { CheckCircle } from 'lucide-react';
import { reasons } from '../data/whyMe';

const WhyMe = () => {

  return (
    <section id="por-que-yo" className="py-12 sm:py-16 md:py-20 bg-primary-600 dark:bg-primary-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-base sm:text-lg text-primary-100 dark:text-primary-200 max-w-2xl mx-auto px-4">
            Compromiso profesional con resultados medibles
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-base group-hover:translate-x-1 transition-transform inline-block">{reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
