/** linkMovix page copy: English and Spanish (the audience for the gateway). */
import type { Locale } from './index';

const en = {
  title: 'linkMovix | On-demand delivery drivers for carriers in Lisbon',
  description: 'linkMovix connects carriers to idle ride-hail drivers already on the road. More delivery drivers on demand in Lisbon, paid per delivered parcel.',
  serviceType: 'On-demand last-mile delivery drivers',
  crumb: 'linkMovix',
  hero: {
    eyebrow: 'The Movix gateway',
    h1: { a: 'More drivers, ', b: 'the moment you need them.' },
    lead: "linkMovix connects your deliveries to the city's idle capacity: ride-hail drivers who are already on the road between rides. You get more drivers on demand, without hiring, leasing or adding a van.",
    cta: 'Book a pilot',
    how: 'See how it works',
    chipsAria: 'Who it is for',
    chips: ['Carriers and couriers', 'Last-mile operators', 'Retailers with their own dispatch'],
  },
  capacity: {
    kicker: 'Idle city capacity',
    h2: 'The city already has the drivers.',
    sub: 'Ride-hail drivers spend part of every shift waiting for the next trip. linkMovix turns that idle time into delivery capacity for you.',
    cards: [
      { h: 'Capacity on demand', p: 'Add drivers when volume spikes and release them when it drops. No minimum fleet to keep busy.' },
      { h: 'Already nearby', p: 'Drivers are spread across the city, so pickups start fast, wherever your parcels are.' },
      { h: 'No fixed cost', p: 'No vans, hires or contracts to carry through quiet weeks. You pay per delivered parcel.' },
    ],
  },
  how: {
    kicker: 'How it works',
    h2: 'From your hub to their door in four moves.',
    steps: [
      { t: 'Connect to the gateway', d: 'Plug linkMovix into your dispatch or TMS through our API, or start with a simple file upload.' },
      { t: 'Ask for drivers', d: 'Send parcels to linkMovix whenever your own capacity runs short: a peak day, an area, a time window.' },
      { t: 'An idle driver picks up', d: 'A ride-hail driver who is free nearby is matched and collects from your hub or store.' },
      { t: 'Delivered, with proof', d: 'Recipient PIN, photo and timestamp go back to your system. A missed parcel comes back to your hub with a reason code.' },
    ],
  },
  who: {
    kicker: "Who it's for",
    h2: 'Built for carriers that run out of drivers.',
    sub: 'Keep your own fleet sized for an average day. linkMovix covers the peaks, the hard-to-serve areas and the late orders.',
    compareAria: 'Own fleet compared with linkMovix',
    own: { h: 'Hiring for the peak', items: ['Drivers and vans paid every day', 'Recruiting weeks before the peak', 'Idle capacity after it'] },
    us: ['More drivers the same day', 'Pay per delivered parcel', 'Weekly invoice in euros'],
  },
  proof: {
    kicker: 'Proof on every handover',
    h2: 'Every hand-off, on record.',
    sub: "You hand your parcel to a driver you don't employ. So every step is recorded, and you always know where the parcel is and who has it.",
    items: [
      { b: 'Pickup scan', t: 'The driver scans each parcel when collecting it from you.' },
      { b: 'Recipient PIN', t: 'Your customer confirms the delivery with a code. Your own validation code can be used as the PIN.' },
      { b: 'Photo and timestamp', t: 'Stored with the parcel and sent back to your system.' },
      { b: 'Failed delivery, explained', t: 'Every miss has a reason code, and the parcel comes back to your hub.' },
    ],
  },
  integration: {
    kicker: 'Integration',
    h2: 'Plugs into the dispatch you already run.',
    cards: [
      { h: 'API and webhooks', p: 'Create deliveries, get labels and receive every status change in real time.' },
      { h: 'File upload', p: 'No developers to spare? Upload a manifest file and we take it from there.' },
      { h: 'Tracking links', p: "A tracking page for your customers, with the driver's live position." },
    ],
  },
  faq: [
    { q: 'Who are the drivers?', a: 'Professional ride-hail drivers who are already working in the city. linkMovix gives them deliveries in the time between rides, so they are on the road and nearby when you need them.' },
    { q: 'Do you use your own vans for linkMovix?', a: 'No. linkMovix is only the gateway to idle driver capacity. If you want us to take the goods into our cross-dock and deliver them with our own fleet, that is fleetMovix.' },
    { q: 'How do we pay?', a: 'Per delivered parcel, invoiced weekly in euros. There are no vans, hires or leases to pay for in quiet weeks.' },
    { q: 'How is a delivery proven?', a: 'The driver scans at pickup, the recipient confirms with a PIN, and a photo and timestamp are stored with the parcel. Every failed attempt carries a reason code.' },
    { q: 'Where does linkMovix work?', a: 'We are launching in Lisbon, with Porto next and Spain planned.' },
  ],
  contact: {
    title: 'Get more drivers for your next peak.',
    text: 'Pick a city area or a peak week. We run it for two weeks and you compare cost per parcel and first-attempt rate with what you have today.',
  },
};
export type LinkCopy = typeof en;

const es: LinkCopy = {
  title: 'linkMovix | Conductores bajo demanda para transportistas',
  description: 'linkMovix conecta a los transportistas con conductores de VTC que ya están en la calle. Más conductores de reparto bajo demanda en Lisboa, con pago por paquete entregado.',
  serviceType: 'Conductores de reparto de última milla bajo demanda',
  crumb: 'linkMovix',
  hero: {
    eyebrow: 'La pasarela de Movix',
    h1: { a: 'Más conductores, ', b: 'justo cuando los necesitas.' },
    lead: 'linkMovix conecta tus entregas con la capacidad ociosa de la ciudad: conductores de VTC que ya están en la calle entre viaje y viaje. Consigues más conductores bajo demanda, sin contratar, sin leasing y sin añadir una furgoneta.',
    cta: 'Reserva un piloto',
    how: 'Mira cómo funciona',
    chipsAria: 'Para quién es',
    chips: ['Transportistas y mensajería', 'Operadores de última milla', 'Comercios con reparto propio'],
  },
  capacity: {
    kicker: 'Capacidad ociosa de la ciudad',
    h2: 'La ciudad ya tiene los conductores.',
    sub: 'Los conductores de VTC pasan parte de cada jornada esperando el siguiente viaje. linkMovix convierte ese tiempo muerto en capacidad de reparto para ti.',
    cards: [
      { h: 'Capacidad bajo demanda', p: 'Añade conductores cuando el volumen sube y libéralos cuando baja. Sin flota mínima que mantener ocupada.' },
      { h: 'Ya cerca', p: 'Los conductores están repartidos por la ciudad, así que las recogidas empiezan rápido, estén donde estén tus paquetes.' },
      { h: 'Sin costes fijos', p: 'Sin furgonetas, contrataciones ni contratos que sostener en las semanas flojas. Pagas por paquete entregado.' },
    ],
  },
  how: {
    kicker: 'Cómo funciona',
    h2: 'De tu hub a su puerta en cuatro pasos.',
    steps: [
      { t: 'Conéctate a la pasarela', d: 'Integra linkMovix en tu TMS o sistema de reparto mediante nuestra API, o empieza con una simple carga de archivos.' },
      { t: 'Pide conductores', d: 'Envía paquetes a linkMovix cuando tu propia capacidad se quede corta: un día de pico, una zona, una franja horaria.' },
      { t: 'Un conductor libre lo recoge', d: 'Un conductor de VTC libre y cercano recibe el servicio y recoge en tu hub o tienda.' },
      { t: 'Entregado, con prueba', d: 'El PIN del destinatario, la foto y la hora vuelven a tu sistema. Un paquete no entregado regresa a tu hub con un código de motivo.' },
    ],
  },
  who: {
    kicker: 'Para quién es',
    h2: 'Pensado para transportistas que se quedan sin conductores.',
    sub: 'Dimensiona tu flota propia para un día normal. linkMovix cubre los picos, las zonas difíciles y los pedidos de última hora.',
    compareAria: 'Flota propia frente a linkMovix',
    own: { h: 'Contratar para el pico', items: ['Conductores y furgonetas pagados cada día', 'Semanas de selección antes del pico', 'Capacidad ociosa después'] },
    us: ['Más conductores el mismo día', 'Pago por paquete entregado', 'Factura semanal en euros'],
  },
  proof: {
    kicker: 'Prueba en cada traspaso',
    h2: 'Cada traspaso, registrado.',
    sub: 'Entregas tu paquete a un conductor que no es tu empleado. Por eso se registra cada paso y siempre sabes dónde está el paquete y quién lo lleva.',
    items: [
      { b: 'Escaneo en la recogida', t: 'El conductor escanea cada paquete al recogerlo contigo.' },
      { b: 'PIN del destinatario', t: 'Tu cliente confirma la entrega con un código. Puedes usar tu propio código de validación como PIN.' },
      { b: 'Foto y hora', t: 'Se guardan con el paquete y se envían a tu sistema.' },
      { b: 'Entrega fallida, explicada', t: 'Cada fallo lleva un código de motivo y el paquete vuelve a tu hub.' },
    ],
  },
  integration: {
    kicker: 'Integración',
    h2: 'Se conecta con el sistema que ya usas.',
    cards: [
      { h: 'API y webhooks', p: 'Crea entregas, obtén etiquetas y recibe cada cambio de estado en tiempo real.' },
      { h: 'Carga de archivos', p: '¿Sin desarrolladores disponibles? Sube un archivo de manifiesto y nosotros nos encargamos.' },
      { h: 'Enlaces de seguimiento', p: 'Una página de seguimiento para tus clientes, con la posición del conductor en directo.' },
    ],
  },
  faq: [
    { q: '¿Quiénes son los conductores?', a: 'Conductores profesionales de VTC que ya trabajan en la ciudad. linkMovix les da entregas en el tiempo entre viajes, así que están en la calle y cerca cuando los necesitas.' },
    { q: '¿Usáis furgonetas propias en linkMovix?', a: 'No. linkMovix es solo la pasarela a la capacidad ociosa de conductores. Si quieres que recojamos la mercancía en nuestro cross-dock y la entreguemos con nuestra flota propia, eso es fleetMovix.' },
    { q: '¿Cómo se paga?', a: 'Por paquete entregado, con factura semanal en euros. No hay furgonetas, contrataciones ni leasings que pagar en las semanas tranquilas.' },
    { q: '¿Cómo se demuestra una entrega?', a: 'El conductor escanea en la recogida, el destinatario confirma con un PIN y se guardan una foto y la hora con el paquete. Cada intento fallido lleva un código de motivo.' },
    { q: '¿Dónde funciona linkMovix?', a: 'Estamos lanzando en Lisboa, con Oporto a continuación y España en los planes.' },
  ],
  contact: {
    title: 'Consigue más conductores para tu próximo pico.',
    text: 'Elige una zona de la ciudad o una semana de pico. La ponemos en marcha durante dos semanas y comparas el coste por paquete y la tasa de entrega al primer intento con lo que tienes hoy.',
  },
};

export const link: Partial<Record<Locale, LinkCopy>> & { en: LinkCopy } = { en, es };
