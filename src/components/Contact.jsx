import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      type: "error",
      message: "Formulario desactivado - Versión de desarrollo",
    });
    return;

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Por favor completa los campos obligatorios",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // FormSubmit - Completamente gratis, sin branding, ilimitado
      // Solo necesitas tu email
      const response = await fetch(
        "https://formsubmit.co/ajax/Info@licethluna.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `🔔 Nuevo mensaje de ${formData.name}`,
            _template: "table",
            _captcha: "false",
            _replyto: formData.email,
            "👤 Nombre": formData.name,
            "📧 Email": formData.email,
            "📱 Teléfono": formData.phone || "No especificado",
            "💼 Servicio": formData.service || "No especificado",
            "💬 Mensaje": formData.message,
            "📅 Fecha": new Date().toLocaleString("es-CO", {
              timeZone: "America/Bogota",
              dateStyle: "full",
              timeStyle: "short",
            }),
          }),
        },
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Error al enviar. Intenta de nuevo o contáctame por WhatsApp.",
        });
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setStatus({
        type: "error",
        message:
          "Error de conexión. Intenta de nuevo o contáctame por WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Envíame un mensaje y te responderé a la brevedad
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Contabilidad General</option>
                  <option>Asesoría Tributaria</option>
                  <option>Gestión de Nómina</option>
                  <option>Consultoría Financiera</option>
                  <option>Declaración de Renta</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  placeholder="Cuéntame sobre tu negocio y cómo puedo ayudarte..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg cursor-not-allowed opacity-75">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sm text-primary-100">
                      contacto@ejemplo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-sm text-primary-100">Colombia</p>
                    <p className="text-xs text-primary-200 mt-1">
                      Atención virtual y presencial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                Horario de Atención
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
