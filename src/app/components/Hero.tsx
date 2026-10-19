"use client";

import { ArrowDown } from "lucide-react";
import { stepCountFor } from "./ChecklistSection";
import type { PLANS } from "@/lib/plans";

type Plan = (typeof PLANS)[number];

export default function Hero({ plan, onChangePlan }: { plan: Plan; onChangePlan: () => void }) {
  const total = stepCountFor(plan);

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
          são <strong>{total} passos rápidos</strong>. Siga um de cada vez, na ordem abaixo.
        </p>
        <a className="gold-button" href="#passos">
          Começar pelo passo 1 <ArrowDown size={16} aria-hidden />
        </a>
        <p className="hero-plan">
          Plano: <strong>{plan.name}</strong>
          <span aria-hidden> · </span>
          <button type="button" className="hero-plan-change" onClick={onChangePlan}>
            Não é esse? Trocar
          </button>
        </p>
      </div>
    </section>
  );
}
