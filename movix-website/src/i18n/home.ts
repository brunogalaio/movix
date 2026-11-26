/** Home page copy. English is the master; Spanish and European Portuguese follow the same shape. */
import type { Locale } from './index';

const en = {
  title: 'Movix | Last-mile delivery capacity in Lisbon and beyond',
  description: "Movix gives carriers more drivers from the city's idle ride-hail capacity, and gives logistics operators a Lisbon cross-dock and fleet for the urban last mile.",
  eyebrow: 'City logistics, built in Lisbon',
  h1: { a: 'Last-mile capacity that ', b: 'moves with your volume.' },
  lead: "Plug into the city's idle drivers with linkMovix, or drop your goods at our cross-dock and let fleetMovix deliver them. One company, one tech platform, two ways to deliver.",
  cta: 'Book a pilot',
  ctaMore: 'Explore the two services',
  chipsAria: 'Who it is for',
  chips: ['Carriers and couriers', 'Logistics operators', 'Restaurants and hotels'],
  stripAria: 'Why Movix',
  strip: [
    { b: 'More drivers, on demand', t: 'Idle ride-hail capacity, plugged into your deliveries.' },
    { b: 'Drop it, we deliver it', t: 'One cross-dock, our own vans, HORECA first.' },
    { b: 'Every handover verified', t: 'PIN, photo and reason codes, end to end.' },
  ],
  products: {
    kicker: 'Two ways to deliver',
    h2: 'One platform. Two delivery models.',
    sub: 'Need more drivers? Use the gateway. Want a partner to take the city off your hands? Bring it to our cross-dock.',
    link: {
      h3: "More drivers, from the city's idle capacity.",
      p: 'A gateway that connects carriers to ride-hail drivers who are already on the road between rides. Add delivery capacity without hiring or a single extra van.',
      ticks: ['Drivers already nearby, on demand', 'One API that fits your dispatch', 'PIN and photo proof on every drop', 'Pay per delivered parcel'],
      cta: 'Explore linkMovix',
    },
    fleet: {
      h3: 'You put it in our cross-dock. We deliver it.',
      p: 'For logistics operators: your line-haul ends at our Lisbon cross-dock, and our own fleet and tech do the city. HORECA first, parcels too.',
      ticks: ['Same day or next day, under 24 hours', 'Own vans and drivers, no subcontracting', 'HORECA windows, line sign-off, returnables', 'Plugs into your systems'],
      cta: 'Explore fleetMovix',
    },
  },
  platform: {
    kicker: 'Platform',
    h2: 'One integration. Every handover on record.',
    sub: 'The same tracking model runs across both services, so your team and your customers see one timeline, whoever is driving.',
    ticks: [
      'REST API and webhooks for every status change',
      'Live tracking links for your customers',
      'Proof of delivery and proof of failed delivery, with reason codes',
      'Weekly invoicing in euros',
    ],
    cardAria: 'Example tracking timeline',
    parcel: 'Parcel',
    delivered: 'Delivered',
    steps: [
      { b: 'Request received', s: 'From your dispatch · 09:58' },
      { b: 'Idle driver matched', s: '600 m from pickup · 10:01' },
      { b: 'Picked up', s: 'Your hub, Alcântara · 10:09' },
      { b: 'Delivered, PIN verified', s: 'Photo + PIN synced · 10:31' },
    ],
  },
  expand: {
    kicker: 'Where we run',
    h2: "Portugal now. Spain next. Then Europe's busy cities.",
    sub: 'We start where parcel and restaurant density is highest and add cities as our clients grow. Tell us where you need capacity and we will tell you when.',
    cities: [
      { n: 'Lisbon', tag: 'Launching' },
      { n: 'Porto', tag: 'Next' },
      { n: 'Madrid', tag: 'Planned' },
      { n: 'Barcelona', tag: 'Planned' },
    ],
  },
};
export type HomeCopy = typeof en;

const es: HomeCopy = {
  title: 'Movix | Capacidad de última milla en Lisboa y más allá',
  description: 'Movix da a los transportistas más conductores con la capacidad ociosa de la ciudad, y ofrece a los operadores logísticos un cross-dock y una flota en Lisboa para la última milla.',
  eyebrow: 'Logística urbana, creada en Lisboa',
  h1: { a: 'Capacidad de última milla que ', b: 'se mueve con tu volumen.' },
  lead: 'Conecta con los conductores disponibles de la ciudad con linkMovix, o entrega tu mercancía en nuestro cross-dock y fleetMovix se encarga del resto. Una empresa, una plataforma tecnológica, dos formas de entregar.',
  cta: 'Reserva un piloto',
  ctaMore: 'Descubre los dos servicios',
  chipsAria: 'Para quién es',
  chips: ['Transportistas y mensajería', 'Operadores logísticos', 'Restaurantes y hoteles'],
  stripAria: 'Por qué Movix',
  strip: [
    { b: 'Más conductores, bajo demanda', t: 'Capacidad ociosa de VTC, conectada a tus entregas.' },
    { b: 'Tú lo dejas, nosotros lo entregamos', t: 'Un cross-dock, furgonetas propias, primero HORECA.' },
    { b: 'Cada traspaso verificado', t: 'PIN, foto y códigos de motivo, de principio a fin.' },
  ],
  products: {
    kicker: 'Dos formas de entregar',
    h2: 'Una plataforma. Dos modelos de entrega.',
    sub: '¿Necesitas más conductores? Usa la pasarela. ¿Quieres un socio que se ocupe de la ciudad por ti? Llévalo a nuestro cross-dock.',
    link: {
      h3: 'Más conductores, con la capacidad ociosa de la ciudad.',
      p: 'Una pasarela que conecta a los transportistas con conductores de VTC que ya están en la calle entre viaje y viaje. Añade capacidad de reparto sin contratar y sin una sola furgoneta más.',
      ticks: ['Conductores ya cerca, bajo demanda', 'Una API que encaja con tu operación', 'Prueba de entrega con PIN y foto en cada envío', 'Paga por paquete entregado'],
      cta: 'Descubre linkMovix',
    },
    fleet: {
      h3: 'Lo dejas en nuestro cross-dock. Nosotros lo entregamos.',
      p: 'Para operadores logísticos: tu transporte de larga distancia termina en nuestro cross-dock de Lisboa, y nuestra flota y tecnología propias se ocupan de la ciudad. Primero HORECA, también paquetería.',
      ticks: ['El mismo día o al siguiente, en menos de 24 horas', 'Furgonetas y conductores propios, sin subcontratar', 'Ventanas HORECA, conformidad línea a línea, envases retornables', 'Se integra con tus sistemas'],
      cta: 'Descubre fleetMovix',
    },
  },
  platform: {
    kicker: 'Plataforma',
    h2: 'Una integración. Cada traspaso registrado.',
    sub: 'El mismo modelo de seguimiento funciona en los dos servicios, así que tu equipo y tus clientes ven una sola línea de tiempo, conduzca quien conduzca.',
    ticks: [
      'API REST y webhooks para cada cambio de estado',
      'Enlaces de seguimiento en vivo para tus clientes',
      'Prueba de entrega y de entrega fallida, con códigos de motivo',
      'Facturación semanal en euros',
    ],
    cardAria: 'Ejemplo de línea de tiempo de seguimiento',
    parcel: 'Paquete',
    delivered: 'Entregado',
    steps: [
      { b: 'Solicitud recibida', s: 'Desde tu sistema · 09:58' },
      { b: 'Conductor disponible asignado', s: 'A 600 m de la recogida · 10:01' },
      { b: 'Recogido', s: 'Tu hub, Alcântara · 10:09' },
      { b: 'Entregado, PIN verificado', s: 'Foto + PIN sincronizados · 10:31' },
    ],
  },
  expand: {
    kicker: 'Dónde operamos',
    h2: 'Portugal ahora. España después. Luego las ciudades más activas de Europa.',
    sub: 'Empezamos donde la densidad de paquetes y restaurantes es mayor y añadimos ciudades a medida que crecen nuestros clientes. Cuéntanos dónde necesitas capacidad y te diremos cuándo.',
    cities: [
      { n: 'Lisboa', tag: 'En lanzamiento' },
      { n: 'Oporto', tag: 'Siguiente' },
      { n: 'Madrid', tag: 'Prevista' },
      { n: 'Barcelona', tag: 'Prevista' },
    ],
  },
};

const pt: HomeCopy = {
  title: 'Movix | Capacidade de última milha em Lisboa e além',
  description: 'A Movix dá mais motoristas às transportadoras, com a capacidade ociosa da cidade, e oferece aos operadores logísticos um cross-dock e uma frota em Lisboa para a última milha.',
  eyebrow: 'Logística urbana, feita em Lisboa',
  h1: { a: 'Capacidade de última milha que ', b: 'acompanha o seu volume.' },
  lead: 'Ligue-se aos motoristas disponíveis da cidade com a linkMovix, ou entregue a sua carga no nosso cross-dock e deixe a fleetMovix tratar do resto. Uma empresa, uma plataforma tecnológica, duas formas de entregar.',
  cta: 'Marcar um piloto',
  ctaMore: 'Conhecer os dois serviços',
  chipsAria: 'Para quem é',
  chips: ['Transportadoras e empresas de courier', 'Operadores logísticos', 'Restaurantes e hotéis'],
  stripAria: 'Porquê a Movix',
  strip: [
    { b: 'Mais motoristas, a pedido', t: 'Capacidade ociosa dos motoristas TVDE, ligada às suas entregas.' },
    { b: 'Deixe connosco, nós entregamos', t: 'Um cross-dock, carrinhas próprias, HORECA em primeiro lugar.' },
    { b: 'Cada passagem confirmada', t: 'PIN, foto e códigos de motivo, de ponta a ponta.' },
  ],
  products: {
    kicker: 'Duas formas de entregar',
    h2: 'Uma plataforma. Dois modelos de entrega.',
    sub: 'Precisa de mais motoristas? Use o gateway. Quer um parceiro que trate da cidade por si? Traga a carga ao nosso cross-dock.',
    link: {
      h3: 'Mais motoristas, com a capacidade ociosa da cidade.',
      p: 'Um gateway que liga as transportadoras a motoristas TVDE que já estão na estrada entre viagens. Aumente a capacidade de entrega sem contratar e sem uma única carrinha a mais.',
      ticks: ['Motoristas já por perto, a pedido', 'Uma API que se integra na sua operação', 'Prova de entrega com PIN e foto em cada entrega', 'Pague por encomenda entregue'],
      cta: 'Conhecer a linkMovix',
    },
    fleet: {
      h3: 'Deixe no nosso cross-dock. Nós entregamos.',
      p: 'Para operadores logísticos: o seu transporte de longa distância termina no nosso cross-dock em Lisboa, e a nossa frota e tecnologia próprias tratam da cidade. HORECA em primeiro lugar, encomendas também.',
      ticks: ['No próprio dia ou no dia seguinte, em menos de 24 horas', 'Carrinhas e motoristas próprios, sem subcontratação', 'Janelas HORECA, conferência linha a linha, vasilhame', 'Integra-se nos seus sistemas'],
      cta: 'Conhecer a fleetMovix',
    },
  },
  platform: {
    kicker: 'Plataforma',
    h2: 'Uma integração. Cada passagem registada.',
    sub: 'O mesmo modelo de seguimento serve os dois serviços, por isso a sua equipa e os seus clientes veem uma só cronologia, seja quem for que conduz.',
    ticks: [
      'API REST e webhooks para cada mudança de estado',
      'Links de seguimento em direto para os seus clientes',
      'Prova de entrega e de entrega falhada, com códigos de motivo',
      'Faturação semanal em euros',
    ],
    cardAria: 'Exemplo de cronologia de seguimento',
    parcel: 'Encomenda',
    delivered: 'Entregue',
    steps: [
      { b: 'Pedido recebido', s: 'Do seu sistema · 09:58' },
      { b: 'Motorista disponível atribuído', s: 'A 600 m da recolha · 10:01' },
      { b: 'Recolhida', s: 'O seu hub, Alcântara · 10:09' },
      { b: 'Entregue, PIN validado', s: 'Foto + PIN sincronizados · 10:31' },
    ],
  },
  expand: {
    kicker: 'Onde operamos',
    h2: 'Portugal agora. Espanha a seguir. Depois as cidades mais movimentadas da Europa.',
    sub: 'Começamos onde a densidade de encomendas e de restaurantes é maior e juntamos cidades à medida que os clientes crescem. Diga-nos onde precisa de capacidade e dizemos-lhe quando.',
    cities: [
      { n: 'Lisboa', tag: 'A arrancar' },
      { n: 'Porto', tag: 'A seguir' },
      { n: 'Madrid', tag: 'Prevista' },
      { n: 'Barcelona', tag: 'Prevista' },
    ],
  },
};

export const home: Record<Locale, HomeCopy> = { en, es, pt };
