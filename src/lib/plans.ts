// Planos da turma presencial. O aluno escolhe o dele no primeiro acesso.
// O Caveira Black tem dois passos a mais (e-mail de acesso e link da plataforma).
export type PlanId = "black" | "dourada" | "prata";

export const PLANS: { id: PlanId; name: string; extraSteps: boolean }[] = [
  { id: "black", name: "Caveira Black", extraSteps: true },
  { id: "dourada", name: "Caveira Dourada", extraSteps: false },
  { id: "prata", name: "Caveira Prata", extraSteps: false },
];

export const PLAN_STORAGE_KEY = "cppem_presencial_plano";

export function getPlan(id: string | null | undefined) {
  return PLANS.find((plan) => plan.id === id) ?? null;
}
