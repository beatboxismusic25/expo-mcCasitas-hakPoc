/**
 * Datos del portal corporativo (mock).
 * Sustituye por respuesta de API: mismas formas para KPI y trazabilidad.
 */

export type PortalKpi = {
  id: string;
  title: string;
  value: string;
  sublabel: string;
  borderClassName: string;
  valueClassName: string;
};

export type PortalTraceRow = {
  id: string;
  label: string;
  /** 0–100 */
  percent: number;
  icon: 'bus-outline' | 'restaurant-outline' | 'home-outline';
  /** Hex: NativeWind a veces no aplica `bg-*` en el relleno con width %; el color inline es fiable. */
  fillColor: string;
};

export const PORTAL_KPIS: PortalKpi[] = [
  {
    id: 'donated',
    title: 'Total donado',
    value: '$50,000 MX',
    sublabel: '📈 +25% vs. año anterior',
    borderClassName: 'border-blue-500',
    valueClassName: 'text-ink-1',
  },
  {
    id: 'families',
    title: 'Familias impactadas',
    value: '120',
    sublabel: '👥 Directamente beneficiadas',
    borderClassName: 'border-mc-yellow',
    valueClassName: 'text-mc-yellow',
  },
  {
    id: 'rides',
    title: 'Traslados financiados',
    value: '45',
    sublabel: '🚌 Viajes al hospital',
    borderClassName: 'border-sky-400',
    valueClassName: 'text-sky-600',
  },
];

export const PORTAL_TRACEABILITY: PortalTraceRow[] = [
  {
    id: 'transport',
    label: 'Transporte al hospital',
    percent: 40,
    icon: 'bus-outline',
    fillColor: '#3b82f6',
  },
  {
    id: 'food',
    label: 'Alimentación en casa',
    percent: 40,
    icon: 'restaurant-outline',
    fillColor: '#10b981',
  },
  {
    id: 'facilities',
    label: 'Mantenimiento de instalaciones',
    percent: 40,
    icon: 'home-outline',
    fillColor: '#8b5cf6',
  },
];
