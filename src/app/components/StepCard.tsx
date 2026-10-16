"use client";

import { Check, ExternalLink } from "lucide-react";

export type StepState = "done" | "current" | "upcoming";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  howTo: string[];
  buttonLabel: string;
  href?: string;
  badge?: string;
  state: StepState;
  total: number;
  isLast: boolean;
  onComplete: () => void;
}

export default function StepCard({
  number,
  title,
  description,
  howTo,
  buttonLabel,
  href,
  badge,
  state,
  total,
  isLast,
  onComplete,
}: StepCardProps) {
  const done = state === "done";

  function handleClick() {
    onComplete();
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <li className={`step${isLast ? " last" : ""}`} data-state={state}>
      <div className="step-marker" aria-hidden>
        <span className="step-bullet">{done ? <Check size={18} strokeWidth={3} /> : number}</span>
        {!isLast && <span className="step-line" />}
      </div>

      <article className="step-card">
        <div className="step-tags">
          <span className="step-kicker">Passo {number} de {total}</span>
          {badge && !done && <span className="step-badge">{badge}</span>}
          {done && <span className="step-badge ok">Concluído</span>}
          {state === "current" && <span className="step-badge now">Você está aqui</span>}
        </div>

        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>

        <ol className="step-howto" aria-label={`Como fazer o passo ${number}`}>
          {howTo.map((item) => <li key={item}>{item}</li>)}
        </ol>

        <button
          type="button"
          onClick={handleClick}
          disabled={done}
          className={done ? "ghost-button step-button" : "gold-button step-button"}
        >
          {done ? (
            <>
              <Check size={16} aria-hidden /> Concluído
            </>
          ) : (
            <>
              {buttonLabel}
              {href && <ExternalLink size={14} aria-hidden />}
            </>
          )}
        </button>
      </article>
    </li>
  );
}
