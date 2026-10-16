import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden />
      <div className="container hero-inner">
        <span className="eyebrow hero-eyebrow">Matrícula confirmada</span>
        <h1 className="hero-title">
          Parabéns pela sua <span>matrícula!</span>
        </h1>
        <p className="hero-copy">
          Agora você faz parte do CPPEM. Falta pouco para concluir sua entrada na turma presencial:
          são <strong>3 passos rápidos</strong>. Siga um de cada vez, na ordem abaixo.
        </p>
        <a className="gold-button" href="#passos">
          Começar pelo passo 1 <ArrowDown size={16} aria-hidden />
        </a>
      </div>
    </section>
  );
}
