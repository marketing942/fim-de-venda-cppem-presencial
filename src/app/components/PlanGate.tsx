"use client";

import { Skull } from "lucide-react";
import { PLANS, type PlanId } from "@/lib/plans";

// Primeiro acesso: só a pergunta. Sem hero, passos, atendimento ou rodapé.
export default function PlanGate({ onSelect }: { onSelect: (id: PlanId) => void }) {
  return (
    <section className="gate" aria-labelledby="gate-titulo">
      <div className="container narrow gate-inner">
        <span className="eyebrow gate-eyebrow">Primeiro acesso</span>
        <h1 id="gate-titulo" className="gate-title">
          Qual plano você <span>adquiriu?</span>
        </h1>
        <p className="gate-copy">Escolha abaixo para ver o seu passo a passo.</p>

        <div className="gate-options">
          {PLANS.map((plan) => (
            <button key={plan.id} type="button" className={`plan-option plan-${plan.id}`} onClick={() => onSelect(plan.id)}>
              <span className="plan-option-icon" aria-hidden>
                <Skull size={26} />
              </span>
              <span className="plan-option-name">{plan.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
