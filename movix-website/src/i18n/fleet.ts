/** fleetMovix page copy: English and European Portuguese (the audience: Portuguese-speaking logistics operators). */
import type { Locale } from './index';

const en = {
  title: 'fleetMovix | Urban last mile for logistics operators in Lisbon',
  description: 'fleetMovix is the urban last mile for logistics operators in Lisbon. Your trucks drop at our cross-dock; our own fleet delivers in under 24 hours, HORECA first.',
  serviceType: 'Urban last-mile delivery and cross-dock for logistics operators',
  crumb: 'fleetMovix',
  hero: {
    eyebrow: 'For logistics operators',
    h1: 'Bring it to our cross-dock. We deliver it into the city.',
    lead: 'fleetMovix is the urban last mile for logistics operators. Your line-haul ends at our Lisbon cross‑dock. Our own vans, drivers and software take it from there, in under 24 hours.',
    cta: 'Talk to us about a lane',
    how: 'How it works',
  },
  handoff: {
    aria: 'How the hand-off works: your line-haul brings full loads, part loads and parcels to the fleetMovix cross-dock in Lisbon, and our vans deliver them to venues, shops and homes in under 24 hours.',
    yours: 'Your network',
    inboundAria: 'What your line-haul brings to the cross-dock',
    inbound: ['Full loads', 'Part loads', 'Parcels'],
    foot: 'Your line-haul ends here',
    ours: 'Our last mile',
    dockSub: 'Lisbon',
    stepsAria: 'What happens at the cross-dock',
    steps: ['Sort', 'Consolidate', 'Route'],
    dests: [
      { label: 'HORECA venues', sub: 'Restaurants, hotels, cafés' },
      { label: 'Shops and offices', sub: 'B2B and eCom parcels' },
      { label: 'Homes', sub: 'Parcels to the door' },
    ],
    focus: 'Our focus',
    drop: 'Drop-off',
    pill: { b: '< 24h', t: 'same day or next day' },
    done: 'Delivered',
  },
  factsAria: 'fleetMovix in short',
  facts: [
    { b: '< 24h', t: 'Same day or next day from drop-off' },
    { b: 'Own fleet', t: 'Our vans and drivers. No subcontracting' },
    { b: 'HORECA', t: "Specialists in the city's hardest drops" },
    { b: 'Your systems', t: 'API, webhooks or daily files' },
  ],
  why: {
    kicker: 'Why operators partner with us',
    h2: 'Your network is built for the motorway. The city is a different job.',
    sub: 'Small drops, tight windows, restricted streets and venues that need empties collected. That is where long-haul trucks lose time and margin, and where we specialise.',
    cards: [
      { h: 'Keep your trucks on the road', p: 'Hand over full loads at one dock instead of sending trucks into city traffic for dozens of small drops.' },
      { h: 'Specialists in HORECA', p: 'Delivery windows around service, line-by-line sign-off and returnables collected on the same run.' },
      { h: 'One partner, fully reported', p: 'Tracking and proof of delivery go straight into your systems, so your customers see one service.' },
    ],
  },
  how: {
    kicker: 'How it works',
    h2: 'Three steps, one hand-off.',
    steps: [
      { t: 'Your trucks drop at our cross-dock', d: 'Full loads on scheduled dock slots. Your line-haul ends at our door.' },
      { t: 'We sort and route', d: 'Our software splits the load per address and builds routes around each delivery window.' },
      { t: 'Our fleet delivers and reports', d: 'Same day or next day, in under 24 hours. Proof of delivery flows back to your systems.' },
    ],
  },
  lanes: {
    kicker: 'Two lanes from one cross-dock',
    h2: 'HORECA first. Parcels too.',
    focus: 'Our focus',
    horeca: {
      h: 'HORECA',
      p: 'Food, drinks and supplies for restaurants, hotels and cafés, delivered in the windows venues need.',
      items: ['Delivery windows around service', 'Line-by-line sign-off at the door', 'Crates, kegs and pallets collected'],
    },
    parcels: {
      h: 'Parcels',
      p: 'B2B and eCom parcels to shops, offices and homes across the city.',
      items: ['Same day or next day', 'Tracked end to end', 'Proof of delivery on every parcel'],
    },
  },
  proof: {
    kicker: 'Our own fleet and tech',
    h2: 'Your customers see one service.',
    sub: 'The cross-dock, the vans, the drivers and the software are all ours. That is how we can commit to the window and prove every delivery to you.',
    items: [
      { b: 'Proof of delivery', t: 'Signature, photo and timestamp for every drop, line by line for HORECA.' },
      { b: 'Failed deliveries, explained', t: 'Every miss carries a reason code and a plan for the next attempt.' },
      { b: 'Returnables ledger', t: 'What went out and what came back, per venue, per day.' },
      { b: 'Live status in your systems', t: 'Webhooks for every step, or a daily file if you prefer.' },
    ],
  },
  faq: [
    { q: 'Who is fleetMovix for?', a: 'Logistics operators and carriers that move freight into Lisbon and want a specialist partner for the urban last mile, especially HORECA.' },
    { q: 'How fast do you deliver?', a: 'Same day or next day, always in under 24 hours from drop-off at our cross-dock.' },
    { q: 'Who does the deliveries?', a: 'Only our own vans and our own drivers, planned and tracked by our own software. We do not subcontract the last mile.' },
    { q: 'What do you deliver?', a: 'Two lanes run from the cross-dock: HORECA deliveries to restaurants, hotels and cafés, which is our focus, and regular parcels to shops, offices and homes.' },
    { q: 'How do we connect our systems?', a: 'Through our API and webhooks, or with daily files if that is simpler. Status updates and proof of delivery come back the same way.' },
  ],
  contact: {
    title: 'Hand us your Lisbon last mile.',
    text: "Tell us which lane you want to start with and the volumes you move into the city. We'll come back with a plan and a price per drop in euros.",
  },
};
export type FleetCopy = typeof en;

const pt: FleetCopy = {
  title: 'fleetMovix | Última milha em Lisboa para operadores logísticos',
  description: 'Última milha urbana para operadores logísticos em Lisboa. Os seus camiões descarregam no nosso cross-dock e a nossa frota própria entrega em menos de 24 horas. HORECA primeiro.',
  serviceType: 'Última milha urbana e cross-dock para operadores logísticos',
  crumb: 'fleetMovix',
  hero: {
    eyebrow: 'Para operadores logísticos',
    h1: 'Deixe no nosso cross\u2011dock. Nós entregamos na cidade.',
    lead: 'A fleetMovix é a última milha urbana para operadores logísticos. O seu transporte de longa distância termina no nosso cross‑dock em Lisboa. As nossas carrinhas, motoristas e software próprios tratam do resto, em menos de 24 horas.',
    cta: 'Fale connosco sobre a sua operação',
    how: 'Como funciona',
  },
  handoff: {
    aria: 'Como funciona a passagem: o seu transporte de longa distância traz cargas completas, grupagem e encomendas ao cross-dock da fleetMovix em Lisboa, e as nossas carrinhas entregam-nas em restaurantes, lojas e casas em menos de 24 horas.',
    yours: 'A sua rede',
    inboundAria: 'O que o seu transporte traz ao cross-dock',
    inbound: ['Cargas completas', 'Grupagem', 'Encomendas'],
    foot: 'O seu transporte termina aqui',
    ours: 'A nossa última milha',
    dockSub: 'Lisboa',
    stepsAria: 'O que acontece no cross-dock',
    steps: ['Triagem', 'Consolidação', 'Rotas'],
    dests: [
      { label: 'Estabelecimentos HORECA', sub: 'Restaurantes, hotéis, cafés' },
      { label: 'Lojas e escritórios', sub: 'Encomendas B2B e e‑commerce' },
      { label: 'Casas', sub: 'Encomendas à porta' },
    ],
    focus: 'O nosso foco',
    drop: 'Receção',
    pill: { b: '< 24h', t: 'mesmo dia ou dia seguinte' },
    done: 'Entregue',
  },
  factsAria: 'A fleetMovix em resumo',
  facts: [
    { b: '< 24h', t: 'Mesmo dia ou dia seguinte, desde a receção' },
    { b: 'Frota própria', t: 'As nossas carrinhas e motoristas. Sem subcontratação' },
    { b: 'HORECA', t: 'Especialistas nas entregas mais difíceis da cidade' },
    { b: 'Os seus sistemas', t: 'API, webhooks ou ficheiros diários' },
  ],
  why: {
    kicker: 'Porque nos escolhem os operadores',
    h2: 'A sua rede foi feita para a autoestrada. A cidade é outro trabalho.',
    sub: 'Entregas pequenas, janelas apertadas, ruas com restrições e estabelecimentos que precisam de recolha de vasilhame. É onde os camiões de longa distância perdem tempo e margem, e onde somos especialistas.',
    cards: [
      { h: 'Mantenha os camiões na estrada', p: 'Entregue cargas completas numa só doca, em vez de enviar camiões para o trânsito da cidade para dezenas de pequenas entregas.' },
      { h: 'Especialistas em HORECA', p: 'Janelas de entrega em torno do serviço, conferência linha a linha e recolha de vasilhame na mesma rota.' },
      { h: 'Um só parceiro, tudo reportado', p: 'O seguimento e a prova de entrega vão diretamente para os seus sistemas, para que os seus clientes vejam um só serviço.' },
    ],
  },
  how: {
    kicker: 'Como funciona',
    h2: 'Três passos, uma passagem.',
    steps: [
      { t: 'Os seus camiões descarregam no nosso cross-dock', d: 'Cargas completas em janelas de descarga agendadas. O seu transporte termina à nossa porta.' },
      { t: 'Triamos e planeamos as rotas', d: 'O nosso software divide a carga por morada e constrói rotas em função de cada janela de entrega.' },
      { t: 'A nossa frota entrega e reporta', d: 'No próprio dia ou no dia seguinte, em menos de 24 horas. A prova de entrega segue para os seus sistemas.' },
    ],
  },
  lanes: {
    kicker: 'Dois fluxos a partir de um só cross-dock',
    h2: 'HORECA primeiro. Encomendas também.',
    focus: 'O nosso foco',
    horeca: {
      h: 'HORECA',
      p: 'Alimentação, bebidas e consumíveis para restaurantes, hotéis e cafés, entregues nas janelas de que os estabelecimentos precisam.',
      items: ['Janelas de entrega em torno do serviço', 'Conferência linha a linha à porta', 'Grades, barris e paletes recolhidos'],
    },
    parcels: {
      h: 'Encomendas',
      p: 'Encomendas B2B e e‑commerce para lojas, escritórios e casas em toda a cidade.',
      items: ['No próprio dia ou no dia seguinte', 'Seguidas de ponta a ponta', 'Prova de entrega em cada encomenda'],
    },
  },
  proof: {
    kicker: 'Frota e tecnologia próprias',
    h2: 'Os seus clientes veem um só serviço.',
    sub: 'O cross-dock, as carrinhas, os motoristas e o software são todos nossos. É assim que nos podemos comprometer com a janela e provar cada entrega.',
    items: [
      { b: 'Prova de entrega', t: 'Assinatura, foto e hora em cada entrega, linha a linha no HORECA.' },
      { b: 'Entregas falhadas, explicadas', t: 'Cada falha tem um código de motivo e um plano para a nova tentativa.' },
      { b: 'Registo de vasilhame', t: 'O que saiu e o que voltou, por estabelecimento e por dia.' },
      { b: 'Estado em direto nos seus sistemas', t: 'Webhooks para cada passo, ou um ficheiro diário, se preferir.' },
    ],
  },
  faq: [
    { q: 'Para quem é a fleetMovix?', a: 'Para operadores logísticos e transportadoras que levam carga para Lisboa e querem um parceiro especialista na última milha urbana, sobretudo em HORECA.' },
    { q: 'Em quanto tempo entregam?', a: 'No próprio dia ou no dia seguinte, sempre em menos de 24 horas a contar da receção no nosso cross-dock.' },
    { q: 'Quem faz as entregas?', a: 'Apenas as nossas carrinhas e os nossos motoristas, planeados e seguidos pelo nosso software. Não subcontratamos a última milha.' },
    { q: 'O que entregam?', a: 'Saem dois fluxos do cross-dock: entregas HORECA a restaurantes, hotéis e cafés, que é o nosso foco, e encomendas normais a lojas, escritórios e casas.' },
    { q: 'Como ligamos os nossos sistemas?', a: 'Através da nossa API e webhooks, ou com ficheiros diários, se for mais simples. Os estados e a prova de entrega regressam da mesma forma.' },
  ],
  contact: {
    title: 'Entregue-nos a sua última milha em Lisboa.',
    text: 'Diga-nos com que fluxo quer começar e os volumes que move para a cidade. Voltamos com um plano e um preço por entrega, em euros.',
  },
};

export const fleet: Partial<Record<Locale, FleetCopy>> & { en: FleetCopy } = { en, pt };
