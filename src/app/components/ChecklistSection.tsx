"use client";

import { useEffect, useState } from "react";
import StepCard from "./StepCard";
import ProgressBar from "./ProgressBar";

const STORAGE_KEY = "cppem_checklist_progress";

const STEPS = [
  {
    number: 1,
    title: "Preencha o formulário inicial",
    description:
      "Complete o formulário abaixo para que nossa equipe tenha seus dados organizados e consiga finalizar corretamente sua entrada na turma presencial.",
    buttonLabel: "Preencher formulário",
    href: "https://cppem.notion.site/2e8bbae8074c8189a156db76b072abd5?pvs=105",
    badge: "Obrigatório",
  },
  {
    number: 2,
    title: "Compareça à recepção para Assinar o Contrato e Cadastrar sua Digital",
    description:
      "Vá até a recepção para assinar o contrato presencialmente e realizar o cadastro da sua digital na catraca de acesso.",
    buttonLabel: "Já fui à recepção",
    href: undefined,
  },
  {
    number: 3,
    title: "Entre na comunidade VIP da sua turma",
    description:
      "Acesse a comunidade VIP com monitores e xerifes. Esse será um dos canais importantes de acompanhamento, avisos e organização da rotina da turma.",
    buttonLabel: "Entrar na comunidade VIP",
    href: "https://links.cppem.com.br/comunidade-turma-presencial",
  },
  {
    number: 4,
    title: "Entre na comunidade Quartel General",
    description:
      "A comunidade Quartel General é o ambiente do CPPEM para fortalecer sua preparação, receber direcionamentos e caminhar junto com outros alunos focados na aprovação.",
    buttonLabel: "Entrar no Quartel General",
    href: "https://cppem.com.br/qg",
  },
];

export default function ChecklistSection() {
  const [completed, setCompleted] = useState<boolean[]>(
    Array(STEPS.length).fill(false)
  );
  const [mounted, setMounted] = useState(false);

  // Load from localStorage only on client
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === STEPS.length) {
          setCompleted(parsed);
        }
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Save to localStorage on every change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // ignore
    }
  }, [completed, mounted]);

  function markComplete(index: number) {
    setCompleted((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  function resetAll() {
    setCompleted(Array(STEPS.length).fill(false));
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  const completedCount = completed.filter(Boolean).length;

  // Avoid hydration mismatch by not rendering progress state until mounted
  if (!mounted) {
    return (
      <section className="w-full px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-[#1adb6530] rounded-xl p-5 mb-6 animate-pulse h-20" />
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#111111] border border-[#1adb6530] rounded-xl h-40 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <ProgressBar
          completed={completedCount}
          total={STEPS.length}
          onReset={resetAll}
        />

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-1">
            Próximos Passos
          </h2>
          <p className="text-gray-500 text-sm">
            Conclua cada etapa para finalizar sua entrada na turma presencial.
          </p>
        </div>

        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              buttonLabel={step.buttonLabel}
              href={step.href}
              badge={step.badge}

              completed={completed[i]}
              onComplete={() => markComplete(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
