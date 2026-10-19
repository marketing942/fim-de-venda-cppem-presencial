"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { getPlan, PLAN_STORAGE_KEY, type PlanId } from "@/lib/plans";
import PlanGate from "./PlanGate";
import Hero from "./Hero";
import ChecklistSection from "./ChecklistSection";

// undefined = ainda lendo o localStorage · null = sem plano escolhido (mostra só a pergunta)
type PlanState = PlanId | null | undefined;

export default function PlanFlow({ location, contact }: { location: ReactNode; contact: ReactNode }) {
  const [planId, setPlanId] = useState<PlanState>(undefined);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(PLAN_STORAGE_KEY);
    } catch {
      // ignore
    }
    setPlanId(getPlan(stored)?.id ?? null);
  }, []);

  // O rodapé nasce escondido (data-gate no <html>) e só aparece depois que o plano foi escolhido.
  useEffect(() => {
    const root = document.documentElement;
    if (planId) root.removeAttribute("data-gate");
    else root.setAttribute("data-gate", "1");
  }, [planId]);

  const choose = useCallback((id: PlanId) => {
    try {
      localStorage.setItem(PLAN_STORAGE_KEY, id);
    } catch {
      // ignore
    }
    setPlanId(id);
    window.scrollTo({ top: 0 });
  }, []);

  const change = useCallback(() => {
    try {
      localStorage.removeItem(PLAN_STORAGE_KEY);
    } catch {
      // ignore
    }
    setPlanId(null);
    window.scrollTo({ top: 0 });
  }, []);

  if (planId === undefined) return <div className="gate" aria-hidden />;
  if (planId === null) return <PlanGate onSelect={choose} />;

  const plan = getPlan(planId)!;

  return (
    <>
      <Hero plan={plan} onChangePlan={change} />
      <ChecklistSection plan={plan} />
      {location}
      {contact}
    </>
  );
}
