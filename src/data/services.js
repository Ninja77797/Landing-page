import { 
  Calculator, 
  FileText, 
  Users, 
  Shield, 
  Briefcase, 
  Home
} from 'lucide-react';

export const services = [
  {
    icon: Calculator,
    title: 'Contabilidad General',
    items: [
      'Registros contables',
      'Estados financieros',
      'Análisis y conciliaciones',
      'Organización de la información'
    ]
  },
  {
    icon: FileText,
    title: 'Declaraciones Tributarias',
    items: [
      'Renta personas naturales y jurídicas',
      'IVA, ICA, Retenciones',
      'Acompañamiento en fiscalización'
    ]
  },
  {
    icon: Users,
    title: 'Nómina y Seguridad Social',
    items: [
      'Liquidación de nómina',
      'Prestaciones sociales',
      'Aportes a seguridad social',
      'Implementación de nómina electrónica'
    ]
  },
  {
    icon: Shield,
    title: 'Auditoría y Revisión Fiscal',
    items: [
      'Auditoría interna',
      'Revisión de procesos y controles',
      'Informes financieros'
    ]
  },
  {
    icon: Briefcase,
    title: 'Asesorías Empresariales',
    items: [
      'Diagnóstico contable y fiscal',
      'Planeación tributaria',
      'Acompañamiento a emprendedores',
      'Organización empresarial'
    ]
  },
  {
    icon: Home,
    title: 'Gestión para Propietarios',
    items: [
      'Manejo de ingresos y gastos',
      'Reportes financieros',
      'Control de costos',
      'Acompañamiento fiscal'
    ]
  }
];
