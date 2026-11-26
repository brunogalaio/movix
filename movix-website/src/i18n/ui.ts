/** Strings shared by every page: header, footer, contact form, FAQ labels, map cards, language banner. */
import { pick, type Locale } from './index';

const en = {
  skip: 'Skip to content',
  brandHome: 'Movix home',
  crumbHome: 'Home',
  nav: { main: 'Main', mobile: 'Main (mobile)', link: 'linkMovix', fleet: 'fleetMovix', company: 'Company', cta: 'Talk to us' },
  lang: { label: 'Language' },
  footer: {
    aria: 'Footer',
    tagline: 'City logistics, on demand',
    place: 'Lisbon, Portugal',
    company: 'Company and investors',
    cases: 'Success cases',
    legal: 'All rights reserved.',
    languages: 'Languages',
  },
  contact: {
    title: 'Start with a two-week pilot.',
    text: 'Send us one lane or one area. We run it, you compare the cost per drop and the first-attempt rate with what you have today.',
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    interest: "I'm interested in",
    options: { link: 'linkMovix (gateway)', fleet: 'fleetMovix (own fleet)', both: 'Both' },
    submit: 'Request a pilot',
    note: "Thanks! This is a preview, so the form isn't connected yet.",
    mail: {
      button: 'Email us',
      or: 'Or write to',
      hint: 'A line with your company, the lane or area and your daily volume is all we need.',
      subject: 'Pilot request',
      body: 'Company:\nLane or area:\nVolume per day (roughly):\n',
    },
  },
  faq: { kicker: 'FAQ', title: 'Questions we get' },
  map: {
    aria: 'Illustration: a Movix van feeds hand-off points across the city, local drivers deliver the last stretch, and the Movix fleet serves restaurants.',
    c1: { t: 'Idle driver matched', s: 'Parcel #4821 · pickup in 4 min' },
    c2: { t: 'Delivered · PIN verified', s: 'Proof synced to your system' },
    c3: { t: 'Restaurant drop', s: '14 lines · 3 crates returned' },
  },
};
export type Ui = typeof en;

const es: Ui = {
  skip: 'Saltar al contenido',
  brandHome: 'Inicio de Movix',
  crumbHome: 'Inicio',
  nav: { main: 'Principal', mobile: 'Principal (móvil)', link: 'linkMovix', fleet: 'fleetMovix', company: 'Empresa', cta: 'Hablemos' },
  lang: { label: 'Idioma' },
  footer: {
    aria: 'Pie de página',
    tagline: 'Logística urbana, bajo demanda',
    place: 'Lisboa, Portugal',
    company: 'Empresa e inversores',
    cases: 'Casos de éxito',
    legal: 'Todos los derechos reservados.',
    languages: 'Idiomas',
  },
  contact: {
    title: 'Empieza con un piloto de dos semanas.',
    text: 'Envíanos una ruta o una zona. La operamos nosotros y tú comparas el coste por entrega y la tasa de entrega al primer intento con lo que tienes hoy.',
    name: 'Nombre',
    email: 'Email de trabajo',
    company: 'Empresa',
    interest: 'Me interesa',
    options: { link: 'linkMovix (pasarela)', fleet: 'fleetMovix (flota)', both: 'Ambos' },
    submit: 'Solicitar un piloto',
    note: '¡Gracias! Esto es una vista previa, así que el formulario aún no está conectado.',
    mail: {
      button: 'Escríbenos',
      or: 'O escribe a',
      hint: 'Con una línea sobre tu empresa, la ruta o zona y tu volumen diario nos basta.',
      subject: 'Solicitud de piloto',
      body: 'Empresa:\nRuta o zona:\nVolumen diario (aprox.):\n',
    },
  },
  faq: { kicker: 'FAQ', title: 'Preguntas que nos hacen' },
  map: {
    aria: 'Ilustración: una furgoneta de Movix abastece puntos de traspaso por la ciudad, conductores locales hacen el último tramo y la flota de Movix atiende a restaurantes.',
    c1: { t: 'Conductor disponible asignado', s: 'Paquete #4821 · recogida en 4 min' },
    c2: { t: 'Entregado · PIN verificado', s: 'Prueba sincronizada con tu sistema' },
    c3: { t: 'Entrega a restaurante', s: '14 líneas · 3 cajas devueltas' },
  },
};

const pt: Ui = {
  skip: 'Saltar para o conteúdo',
  brandHome: 'Página inicial da Movix',
  crumbHome: 'Início',
  nav: { main: 'Principal', mobile: 'Principal (telemóvel)', link: 'linkMovix', fleet: 'fleetMovix', company: 'Empresa', cta: 'Fale connosco' },
  lang: { label: 'Idioma' },
  footer: {
    aria: 'Rodapé',
    tagline: 'Logística urbana, a pedido',
    place: 'Lisboa, Portugal',
    company: 'Empresa e investidores',
    cases: 'Casos de sucesso',
    legal: 'Todos os direitos reservados.',
    languages: 'Idiomas',
  },
  contact: {
    title: 'Comece com um piloto de duas semanas.',
    text: 'Envie-nos uma rota ou uma zona. Operamo-la por si e pode comparar o custo por entrega e a taxa de entrega à primeira tentativa com o que tem hoje.',
    name: 'Nome',
    email: 'Email profissional',
    company: 'Empresa',
    interest: 'Tenho interesse em',
    options: { link: 'linkMovix (gateway)', fleet: 'fleetMovix (frota)', both: 'Ambos' },
    submit: 'Pedir um piloto',
    note: 'Obrigado! Isto é uma pré-visualização, por isso o formulário ainda não está ligado.',
    mail: {
      button: 'Escreva-nos',
      or: 'Ou escreva para',
      hint: 'Basta-nos uma linha com a sua empresa, a rota ou zona e o volume diário.',
      subject: 'Pedido de piloto',
      body: 'Empresa:\nRota ou zona:\nVolume diário (aprox.):\n',
    },
  },
  faq: { kicker: 'FAQ', title: 'Perguntas que nos fazem' },
  map: {
    aria: 'Ilustração: uma carrinha da Movix abastece pontos de passagem pela cidade, motoristas locais fazem o último troço e a frota da Movix serve restaurantes.',
    c1: { t: 'Motorista disponível atribuído', s: 'Encomenda #4821 · recolha em 4 min' },
    c2: { t: 'Entregue · PIN validado', s: 'Prova sincronizada com o seu sistema' },
    c3: { t: 'Entrega a restaurante', s: '14 linhas · 3 grades devolvidas' },
  },
};

export const ui = { en, es, pt };
export const uiFor = (l: Locale): Ui => pick(ui, l);

/** The suggestion banner is written in the language it offers, not the page's language. */
export const banner = {
  en: { text: 'Prefer to read this page in English?', go: 'View in English', close: 'Dismiss' },
  es: { text: '¿Prefieres ver esta página en español?', go: 'Ver en español', close: 'Cerrar' },
  pt: { text: 'Prefere ver esta página em português?', go: 'Ver em português', close: 'Fechar' },
} satisfies Record<Locale, { text: string; go: string; close: string }>;
