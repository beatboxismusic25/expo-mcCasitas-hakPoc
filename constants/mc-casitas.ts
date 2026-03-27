export const MC_IMAGES = {
  testimonial1:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=720&q=80&auto=format&fit=crop',
  testimonial2:
    'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=720&q=80&auto=format&fit=crop',
} as const;

export const MC_STATS = [
  { id: 'families', value: '500+', label: 'Familias apoyadas', accent: 'text-mc-red' as const },
  { id: 'nights', value: '2,500+', label: 'Noches de hospedaje', accent: 'text-mc-yellow' as const },
  { id: 'rides', value: '1,200+', label: 'Traslados al hospital', accent: 'text-state-info' as const },
  { id: 'trust', value: '100%', label: 'Transparencia', accent: 'text-state-success' as const },
] as const;

export const MC_MISSION_CARDS = [
  {
    id: 'lodging',
    title: 'Hospedaje gratuito',
    description:
      'Un lugar seguro y cercano al hospital para que la familia descanse mientras acompaña el tratamiento.',
    icon: 'home' as const,
    iconBg: 'bg-mc-red',
  },
  {
    id: 'support',
    title: 'Acompañamiento humano',
    description:
      'Equipo y voluntarios que escuchan, orientan y hacen sentir a cada familia acompañada.',
    icon: 'heart' as const,
    iconBg: 'bg-mc-yellow',
  },
  {
    id: 'transparency',
    title: 'Transparencia total',
    description:
      'Cada donación se traduce en noches de estancia, traslados y apoyo directo a quien lo necesita.',
    icon: 'shield-checkmark' as const,
    iconBg: 'bg-orange-500',
  },
] as const;

export const MC_TESTIMONIALS = [
  {
    id: 'gomez',
    familyName: 'Familia Gómez',
    quote:
      '“Gracias a McCasitas pudimos estar juntos en el momento más difícil. Fue nuestro hogar lejos de casa.”',
    imageUri: MC_IMAGES.testimonial1,
    imageHint: 'Retrato de familia sonriendo',
  },
  {
    id: 'martinez',
    familyName: 'Familia Martínez',
    quote:
      '“El apoyo no fue solo un techo: fue dignidad, descanso y esperanza para seguir adelante.”',
    imageUri: MC_IMAGES.testimonial2,
    imageHint: 'Familia en un momento cotidiano',
  },
] as const;

export const MC_CONTACT = {
  address: 'Ciudad de México, México',
  phone: '+52 55 0000 0000',
  email: 'contacto@mccasitasfelices.org',
} as const;
