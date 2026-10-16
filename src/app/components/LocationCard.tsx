import { ExternalLink, MapPin, Navigation } from "lucide-react";

export default function LocationCard() {
  return (
    <section className="section" id="localizacao" aria-labelledby="local-titulo">
      <div className="container narrow">
        <span className="eyebrow">Como chegar</span>
        <h2 id="local-titulo" className="section-title">Localização do CPPEM Presencial</h2>
        <p className="section-copy">
          Para o passo 2, é aqui que você vai. Ao chegar, siga para a recepção.
        </p>

        <div className="location-card">
          <span className="channel-icon">
            <MapPin size={24} aria-hidden />
          </span>
          <div className="location-body">
            <h3>Endereço da unidade</h3>
            <p>Praça Presidente Getúlio Vargas, Nossa Senhora das Dores</p>
            <p>Número 119 — Prédio ao lado da Coletivo</p>
            <p className="location-city">Caruaru – PE</p>
            <p className="location-hint">
              <Navigation size={14} aria-hidden /> Use o GPS para chegar com facilidade
            </p>
            <a
              href="https://links.cppem.com.br/localiza%C3%A7%C3%A3o-maps"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              <MapPin size={16} aria-hidden /> Abrir localização no Maps <ExternalLink size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
