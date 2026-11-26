/** Company and investors page copy. Placeholders in [brackets] are for Bruno to fill: never invent people or figures. */
import type { Locale } from './index';

const en = {
  title: 'Movix | Company, team and investors',
  description: 'Movix is a Lisbon city logistics company combining a gateway to idle ride-hail drivers with its own cross-dock and fleet. Team, model and investor contact.',
  crumb: 'Company and investors',
  hero: {
    eyebrow: 'Company and investors',
    h1: { a: 'Building the delivery layer of ', b: "Europe's busiest cities." },
    lead: "Movix is a city logistics company from Lisbon. We give carriers more drivers from the city's idle capacity, and give logistics operators a cross-dock that takes the city off their hands. We start in Portugal and expand to Spain.",
    cta: 'Request the investor deck',
    team: 'Meet the team',
  },
  model: {
    kicker: 'The model',
    h2: 'Two businesses, one platform.',
    sub: "An asset-light gateway that scales with the city's spare capacity, and an asset-backed cross-dock that builds route density, HORECA first. Both run on the same tech.",
    cards: [
      { h: 'Asset-light gateway', p: 'Carriers get more drivers from idle ride-hail capacity. No fleet on our books; revenue per delivered parcel.' },
      { h: 'Cross-dock and fleet', p: 'Logistics operators hand over freight at our cross-dock and we deliver it with our own vans. Dense HORECA routes, plus a parcel lane.' },
      { h: 'One tech platform', p: 'Shared tracking, proof of delivery and billing across both services, built in-house.' },
    ],
  },
  why: {
    kicker: 'Why now',
    h2: 'The city has spare capacity. Deliveries need it.',
    items: [
      { b: 'Peaks keep growing.', t: "eCom volumes swing by season and by day, and fixed fleets can't follow." },
      { b: 'Drivers sit idle.', t: 'Ride-hail drivers spend part of every shift waiting between trips.' },
      { b: 'HORECA is fragmented.', t: 'Venues still receive a separate van from every supplier.' },
      { b: 'Cities want fewer vans.', t: 'Consolidation and shared capacity mean fewer trips in the centre.' },
    ],
  },
  where: {
    kicker: 'Where we are',
    h2: 'Lisbon first, then the Iberian corridor.',
    sub: 'Key figures are shared in the investor deck.',
    milestones: [
      { when: '2026', what: 'Movix founded in Lisbon. Brand and platform built.' },
      { when: 'Launch', what: 'linkMovix and fleetMovix go live in Lisbon.' },
      { when: 'Next', what: 'Porto, with the same two services.' },
      { when: 'Planned', what: 'Spain: Madrid and Barcelona.' },
    ],
  },
  team: {
    kicker: 'Team',
    h2: 'The people moving Movix.',
    people: [
      { name: 'Bruno Galaio', role: 'Chief Executive Officer', bio: 'Runs Movix day to day. [Add one line on background.]' },
      { name: '[Name]', role: 'Chief Technology Officer', bio: '[One line on background and what they own at Movix.]' },
      { name: '[Name]', role: 'Head of Operations', bio: '[One line: cross-dock and fleet operations.]' },
      { name: '[Name]', role: 'Head of Sales', bio: '[One line: carrier and HORECA accounts.]' },
    ],
  },
  backers: {
    kicker: 'Backed by',
    h2: 'Supported by long-term investors.',
    sub: 'Movix is backed by private equity, with a business plan built around profitable growth.',
    logo: '[Investor logo]',
  },
  contact: {
    h2: 'Talk to us about Movix.',
    text: 'Request the investor deck or a call with the team, and we will get back to you.',
    name: 'Name',
    email: 'Work email',
    org: 'Fund or company',
    topic: "I'd like",
    topics: ['The investor deck', 'A call with the team', 'Partnership talks'],
    submit: 'Send request',
    note: "Thanks! This is a preview, so the form isn't connected yet.",
  },
};
export type CompanyCopy = typeof en;

const es: CompanyCopy = {
  title: 'Movix | Empresa, equipo e inversores',
  description: 'Movix es una empresa de logística urbana de Lisboa que combina una pasarela de conductores disponibles con su propio cross-dock y flota. Equipo, modelo y contacto para inversores.',
  crumb: 'Empresa e inversores',
  hero: {
    eyebrow: 'Empresa e inversores',
    h1: { a: 'Construyendo la capa de reparto de ', b: 'las ciudades más activas de Europa.' },
    lead: 'Movix es una empresa de logística urbana de Lisboa. Damos a los transportistas más conductores con la capacidad ociosa de la ciudad, y a los operadores logísticos un cross-dock que les quita la ciudad de las manos. Empezamos en Portugal y nos expandimos a España.',
    cta: 'Solicitar la presentación para inversores',
    team: 'Conoce al equipo',
  },
  model: {
    kicker: 'El modelo',
    h2: 'Dos negocios, una plataforma.',
    sub: 'Una pasarela ligera en activos que escala con la capacidad sobrante de la ciudad, y un cross-dock con activos propios que construye densidad de rutas, primero HORECA. Ambos funcionan con la misma tecnología.',
    cards: [
      { h: 'Pasarela ligera en activos', p: 'Los transportistas consiguen más conductores con la capacidad ociosa de VTC. Sin flota en nuestro balance; ingresos por paquete entregado.' },
      { h: 'Cross-dock y flota', p: 'Los operadores logísticos entregan la mercancía en nuestro cross-dock y nosotros la repartimos con furgonetas propias. Rutas HORECA densas, más una línea de paquetería.' },
      { h: 'Una plataforma tecnológica', p: 'Seguimiento, prueba de entrega y facturación compartidos en los dos servicios, desarrollados internamente.' },
    ],
  },
  why: {
    kicker: 'Por qué ahora',
    h2: 'La ciudad tiene capacidad de sobra. Los repartos la necesitan.',
    items: [
      { b: 'Los picos no dejan de crecer.', t: 'El volumen del eCommerce oscila por temporada y por día, y las flotas fijas no pueden seguirlo.' },
      { b: 'Hay conductores parados.', t: 'Los conductores de VTC pasan parte de cada jornada esperando entre viajes.' },
      { b: 'El HORECA está fragmentado.', t: 'Los locales siguen recibiendo una furgoneta distinta de cada proveedor.' },
      { b: 'Las ciudades quieren menos furgonetas.', t: 'Consolidación y capacidad compartida significan menos viajes por el centro.' },
    ],
  },
  where: {
    kicker: 'Dónde estamos',
    h2: 'Primero Lisboa, después el corredor ibérico.',
    sub: 'Las cifras clave se comparten en la presentación para inversores.',
    milestones: [
      { when: '2026', what: 'Movix nace en Lisboa. Marca y plataforma construidas.' },
      { when: 'Lanzamiento', what: 'linkMovix y fleetMovix arrancan en Lisboa.' },
      { when: 'Siguiente', what: 'Oporto, con los mismos dos servicios.' },
      { when: 'Prevista', what: 'España: Madrid y Barcelona.' },
    ],
  },
  team: {
    kicker: 'Equipo',
    h2: 'Las personas que mueven Movix.',
    people: [
      { name: 'Bruno Galaio', role: 'Director ejecutivo (CEO)', bio: 'Dirige Movix en el día a día. [Añadir una línea sobre su trayectoria.]' },
      { name: '[Nombre]', role: 'Director de tecnología (CTO)', bio: '[Una línea sobre su trayectoria y lo que lidera en Movix.]' },
      { name: '[Nombre]', role: 'Responsable de operaciones', bio: '[Una línea: operaciones de cross-dock y flota.]' },
      { name: '[Nombre]', role: 'Responsable comercial', bio: '[Una línea: cuentas de transportistas y HORECA.]' },
    ],
  },
  backers: {
    kicker: 'Con el respaldo de',
    h2: 'Respaldados por inversores a largo plazo.',
    sub: 'Movix cuenta con el respaldo de capital privado, con un plan de negocio basado en un crecimiento rentable.',
    logo: '[Logotipo del inversor]',
  },
  contact: {
    h2: 'Hablemos de Movix.',
    text: 'Solicita la presentación para inversores o una llamada con el equipo y te responderemos.',
    name: 'Nombre',
    email: 'Email de trabajo',
    org: 'Fondo o empresa',
    topic: 'Me gustaría',
    topics: ['Pedir la presentación', 'Hablar con el equipo', 'Hablar de alianzas'],
    submit: 'Enviar solicitud',
    note: '¡Gracias! Esto es una vista previa, así que el formulario aún no está conectado.',
  },
};

const pt: CompanyCopy = {
  title: 'Movix | Empresa, equipa e investidores',
  description: 'A Movix é uma empresa de logística urbana de Lisboa que combina um gateway de motoristas disponíveis com cross-dock e frota próprios. Equipa, modelo e contacto para investidores.',
  crumb: 'Empresa e investidores',
  hero: {
    eyebrow: 'Empresa e investidores',
    h1: { a: 'A construir a camada de entregas das ', b: 'cidades mais movimentadas da Europa.' },
    lead: 'A Movix é uma empresa de logística urbana de Lisboa. Damos às transportadoras mais motoristas com a capacidade ociosa da cidade e damos aos operadores logísticos um cross-dock que lhes tira a cidade das mãos. Começamos em Portugal e expandimos para Espanha.',
    cta: 'Pedir a apresentação para investidores',
    team: 'Conhecer a equipa',
  },
  model: {
    kicker: 'O modelo',
    h2: 'Dois negócios, uma plataforma.',
    sub: 'Um gateway asset-light que escala com a capacidade excedente da cidade, e um cross-dock com ativos próprios que constrói densidade de rotas, HORECA em primeiro lugar. Ambos funcionam sobre a mesma tecnologia.',
    cards: [
      { h: 'Gateway asset-light', p: 'As transportadoras ganham mais motoristas com a capacidade ociosa dos TVDE. Sem frota no nosso balanço; receita por encomenda entregue.' },
      { h: 'Cross-dock e frota', p: 'Os operadores logísticos entregam a carga no nosso cross-dock e nós entregamo-la com carrinhas próprias. Rotas HORECA densas, mais um fluxo de encomendas.' },
      { h: 'Uma só plataforma tecnológica', p: 'Seguimento, prova de entrega e faturação partilhados pelos dois serviços, desenvolvidos internamente.' },
    ],
  },
  why: {
    kicker: 'Porquê agora',
    h2: 'A cidade tem capacidade de sobra. As entregas precisam dela.',
    items: [
      { b: 'Os picos não param de crescer.', t: 'O volume do e‑commerce oscila com a época e com o dia, e as frotas fixas não conseguem acompanhar.' },
      { b: 'Há motoristas parados.', t: 'Os motoristas de plataformas passam parte de cada turno à espera entre viagens.' },
      { b: 'O HORECA está fragmentado.', t: 'Os estabelecimentos ainda recebem uma carrinha diferente de cada fornecedor.' },
      { b: 'As cidades querem menos carrinhas.', t: 'Consolidação e capacidade partilhada significam menos viagens no centro.' },
    ],
  },
  where: {
    kicker: 'Onde estamos',
    h2: 'Primeiro Lisboa, depois o corredor ibérico.',
    sub: 'Os números principais são partilhados na apresentação para investidores.',
    milestones: [
      { when: '2026', what: 'Movix fundada em Lisboa. Marca e plataforma construídas.' },
      { when: 'Arranque', what: 'A linkMovix e a fleetMovix arrancam em Lisboa.' },
      { when: 'A seguir', what: 'Porto, com os mesmos dois serviços.' },
      { when: 'Prevista', what: 'Espanha: Madrid e Barcelona.' },
    ],
  },
  team: {
    kicker: 'Equipa',
    h2: 'As pessoas que movem a Movix.',
    people: [
      { name: 'Bruno Galaio', role: 'Diretor executivo (CEO)', bio: 'Dirige a Movix no dia a dia. [Acrescentar uma linha sobre o percurso.]' },
      { name: '[Nome]', role: 'Diretor de tecnologia (CTO)', bio: '[Uma linha sobre o percurso e o que lidera na Movix.]' },
      { name: '[Nome]', role: 'Responsável de operações', bio: '[Uma linha: operações de cross-dock e frota.]' },
      { name: '[Nome]', role: 'Responsável comercial', bio: '[Uma linha: contas de transportadoras e HORECA.]' },
    ],
  },
  backers: {
    kicker: 'Com o apoio de',
    h2: 'Apoiada por investidores de longo prazo.',
    sub: 'A Movix tem o apoio de private equity, com um plano de negócios assente num crescimento rentável.',
    logo: '[Logótipo do investidor]',
  },
  contact: {
    h2: 'Fale connosco sobre a Movix.',
    text: 'Peça a apresentação para investidores ou uma conversa com a equipa, e entraremos em contacto.',
    name: 'Nome',
    email: 'Email profissional',
    org: 'Fundo ou empresa',
    topic: 'Gostaria de',
    topics: ['Pedir a apresentação', 'Falar com a equipa', 'Falar de parcerias'],
    submit: 'Enviar pedido',
    note: 'Obrigado! Isto é uma pré-visualização, por isso o formulário ainda não está ligado.',
  },
};

export const company: Record<Locale, CompanyCopy> = { en, es, pt };
