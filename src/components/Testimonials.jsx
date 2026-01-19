import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Dividir testimonios en dos grupos y triplicar para loop perfecto
  const midPoint = Math.ceil(testimonials.length / 2);
  const row1Base = testimonials.slice(0, midPoint);
  const row2Base = testimonials.slice(midPoint);
  
  const row1Testimonials = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
  const row2Testimonials = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

  // Animación para la primera fila (izquierda a derecha)
  useEffect(() => {
    const scrollContainer = scrollRef1.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const scrollSpeed = 1.2;

    const scroll = () => {
      if (scrollContainer) {
        if (!isPausedRow1) {
          scrollContainer.scrollLeft += scrollSpeed;
        }
        
        // Reset cuando llega a 2/3 del contenido
        const maxScroll = scrollContainer.scrollWidth / 4;
        if (scrollContainer.scrollLeft >= maxScroll * 2) {
          scrollContainer.scrollLeft = maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPausedRow1]);

  // Animación para la segunda fila (derecha a izquierda)
  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    // Inicializar en la posición correcta
    const maxScroll = scrollContainer.scrollWidth / 4;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = maxScroll * 2;
    }

    let animationFrameId;
    const scrollSpeed = 1.2;

    const scroll = () => {
      if (scrollContainer) {
        if (!isPausedRow2) {
          scrollContainer.scrollLeft -= scrollSpeed;
          
          // Reset cuando llega al inicio
          if (scrollContainer.scrollLeft <= maxScroll) {
            scrollContainer.scrollLeft = maxScroll * 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPausedRow2]);

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10"></div>
      
      <div className="relative">
        {/* Título */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Testimonios reales de quienes confían en mi experiencia
          </p>
        </div>

        {/* Primera fila - izquierda a derecha */}
        <div className="mb-8">
          <div 
            ref={scrollRef1}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {row1Testimonials.map((testimonial, index) => (
              <div 
                key={`row1-${index}`}
                className="flex-shrink-0 w-[340px] sm:w-[400px] bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setIsPausedRow1(true)}
                onMouseLeave={() => setIsPausedRow1(false)}
              >
                <Quote className="text-primary-600 dark:text-primary-400 mb-4 opacity-40" size={24} />

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila - derecha a izquierda */}
        <div>
          <div 
            ref={scrollRef2}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {row2Testimonials.map((testimonial, index) => (
              <div 
                key={`row2-${index}`}
                className="flex-shrink-0 w-[340px] sm:w-[400px] bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setIsPausedRow2(true)}
                onMouseLeave={() => setIsPausedRow2(false)}
              >
                <Quote className="text-primary-600 dark:text-primary-400 mb-4 opacity-40" size={24} />

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
