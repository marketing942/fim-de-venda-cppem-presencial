import { Bot, Clock, Headset, MessageCircle } from "lucide-react";
import { channelReturnLabel, isChannelOpen, SUPPORT_CHANNELS, type SupportChannel } from "@/lib/contact";

function ChannelStatus({ channel }: { channel: SupportChannel }) {
  const open = isChannelOpen(channel);
  if (open === null) return <span className="channel-status online">Sempre disponível</span>;
  return open ? (
    <span className="channel-status online">Disponível agora</span>
  ) : (
    <span className="channel-status offline">{channelReturnLabel(channel)}</span>
  );
}

function ChannelCard({ channel }: { channel: SupportChannel }) {
  const Icon = channel.kind === "ai" ? Bot : Headset;
  return (
    <article className="channel-card">
      <header>
        <span className="channel-icon">
          <Icon size={24} aria-hidden />
        </span>
        <div>
          <h3>{channel.title}</h3>
          <p className="channel-hours">
            <Clock size={14} aria-hidden /> {channel.hoursLabel}
          </p>
          <ChannelStatus channel={channel} />
        </div>
      </header>
      <p className="channel-description">{channel.description}</p>
      <a className="whatsapp-button" href={channel.href} target="_blank" rel="noreferrer">
        <MessageCircle size={18} aria-hidden /> {channel.cta}
      </a>
    </article>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="atendimento" aria-labelledby="contato-titulo">
      <div className="container contact-inner">
        <span className="eyebrow">Atendimento</span>
        <h2 id="contato-titulo" className="section-title">Ainda precisa de ajuda?</h2>
        <p className="section-copy">Escolha como prefere falar com o CPPEM pelo WhatsApp.</p>
        <div className="channel-grid">
          {SUPPORT_CHANNELS.map((channel) => <ChannelCard key={channel.id} channel={channel} />)}
        </div>
      </div>
    </section>
  );
}
