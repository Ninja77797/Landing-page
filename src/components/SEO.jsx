import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Portafolio Contable - Versión Desarrollo",
  description = "Servicios contables profesionales. Contabilidad general, asesoría tributaria, gestión de nómina y consultoría financiera. Versión de desarrollo.",
  keywords = "contadora pública, servicios contables, asesoría tributaria, gestión de nómina, consultoría financiera, declaración de renta",
  url = "https://localhost:5173",
  image = "/og-image-dev.jpg"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Servicios Contables - Demo",
    "description": description,
    "url": url,
    "telephone": "+57-300-000-0000",
    "email": "contacto@ejemplo.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressRegion": "Colombia"
    },
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-13:00"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/ejemplo",
      "https://www.tiktok.com/@ejemplo",
      "https://www.facebook.com/ejemplo"
    ],
    "founder": {
      "@type": "Person",
      "name": "Nombre Profesional Ejemplo",
      "jobTitle": "Contadora Pública Certificada",
      "description": "Profesional contable con experiencia en servicios contables y asesoría financiera"
    }
  };

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Datos Estructurados */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Meta Tags Adicionales */}
      <meta name="author" content="Liceth Paola Luna Rodríguez" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="CO" />
      <meta name="geo.placename" content="Colombia" />
    </Helmet>
  );
};

export default SEO;
