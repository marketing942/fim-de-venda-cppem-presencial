import { isWithinHours, nextOpeningLabel, type Schedule } from "@/lib/hours";

// Mesmos dois canais da Central de Ajuda. Os links são redirecionadores do
// links.cppem.com.br: trocar o número do WhatsApp é feito lá, sem mexer aqui.

export type SupportChannel = {
  id: string;
  kind: "ai" | "team";
  title: string;
  description: string;
  hoursLabel: string;
  cta: string;
  href: string;
  /** Horário de atendimento (Brasília). null = 24 horas. */
  hours: Schedule | null;
};

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: "assistente",
    kind: "ai",
    title: "Assistente virtual",
    description: "Atendimento com IA para tirar dúvidas na hora, a qualquer momento.",
    hoursLabel: "24 horas, todos os dias",
    cta: "Falar com a assistente",
    href: "https://links.cppem.com.br/suporte-cppem-ass",
    hours: null,
  },
  {
    id: "equipe",
    kind: "team",
    title: "Suporte ao aluno",
    description: "Fale com a equipe CPPEM. Envie nome completo, turma ou produto e a sua dúvida.",
    hoursLabel: "Seg. a sex., das 12h às 22h",
    cta: "Falar com a equipe",
    href: "https://links.cppem.com.br/cppem-suporte-aluno",
    // Sem atendimento humano aos sábados, domingos e feriados (ver lib/hours.ts).
    hours: { open: 12, close: 22, weekdays: [1, 2, 3, 4, 5], closedOnHolidays: true },
  },
];

/** true/false para canais com horário; null para 24h. */
export function isChannelOpen(channel: SupportChannel, now = new Date()): boolean | null {
  if (!channel.hours) return null;
  return isWithinHours(channel.hours, now);
}

/** Texto de retorno para canal fechado, ex.: "Volta segunda às 12h". */
export function channelReturnLabel(channel: SupportChannel, now = new Date()): string {
  if (!channel.hours) return "";
  const when = nextOpeningLabel(channel.hours, now);
  return when === "em breve" ? "Volta em breve" : `Volta ${when} às ${channel.hours.open}h`;
}

export const MAIN_SITE_URL = "https://cppem.com.br";
export const HELP_CENTER_URL = "https://central-de-ajuda.cppem.com.br";
