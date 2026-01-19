import { useState, useEffect } from 'react';

// Constantes configurables
const TOOLTIP_INITIAL_DELAY = 3000;      // ms antes de mostrar el primer tooltip
const TOOLTIP_VISIBLE_DURATION = 5000;   // ms que permanece visible el tooltip
const TOOLTIP_INTERVAL = 15000;          // ms entre cada tooltip

const TIPS = [
  '💡 ¿Declaración de renta? Te ayudo a hacerla correctamente',
  '💰 Optimiza tus impuestos con asesoría profesional',
  '📊 ¿Necesitas orden en tu contabilidad? Contáctame',
  '✅ Evita sanciones de la DIAN, te asesoro ya',
  '🎯 ¿Dudas fiscales? Resuelvo tus inquietudes rápido',
  '📈 Estrategias para ahorrar en impuestos legalmente',
];

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const timeouts = [];

    const showTip = () => {
      setShowTooltip(true);

      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, TOOLTIP_VISIBLE_DURATION);

      timeouts.push(hideTimeout);
    };

    // Primer tooltip después de un tiempo
    const initialTimeout = setTimeout(() => {
      showTip();
    }, TOOLTIP_INITIAL_DELAY);
    timeouts.push(initialTimeout);

    // Cada cierto intervalo cambiamos de tip y lo mostramos
    const intervalId = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % TIPS.length);
      showTip();
    }, TOOLTIP_INTERVAL);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      <div className="relative">
        {/* Tooltip hacia la izquierda */}
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 transition-all duration-300 ease-out ${
            showTooltip
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl px-4 py-2.5 w-[260px] sm:w-[300px] border border-gray-100 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white font-medium text-sm leading-snug">
              {TIPS[currentTipIndex]}
            </p>
            {/* Flecha del tooltip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-r border-t border-gray-100 dark:border-gray-700 transform rotate-45" />
          </div>
        </div>

        {/* Botón principal - DESACTIVADO */}
        <div
          className="relative flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] bg-green-500/50 dark:bg-green-600/50 rounded-full shadow-2xl cursor-not-allowed"
          aria-label="WhatsApp desactivado"
        >
          {/* Efecto de pulso */}
          <span className="absolute inset-0 rounded-full bg-green-500 dark:bg-green-600 animate-ping opacity-20" />

          {/* Ícono de WhatsApp */}
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className="sm:w-9 sm:h-9 relative z-10"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
