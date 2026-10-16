"use client";

import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import StepCard from "./StepCard";

const STORAGE_KEY = "cppem_checklist_progress";

const STEPS = [
  {
    number: 1,
    title: "Preencha o formulário inicial",
    description:
      "Complete o formulário para que nossa equipe tenha seus dados organizados e consiga finalizar corretamente sua entrada na turma presencial.",
    howTo: [
      "Clique no botão abaixo: o formulário abre em uma nova aba.",
      "Preencha todos os campos com atenção.",
      "Envie o formulário e volte para esta página.",
    ],
    buttonLabel: "Preencher formulário",
    href: "https://cppem.notion.site/2e8bbae8074c8189a156db76b072abd5?pvs=105",
    badge: "Obrigatório",
  },
  {
    number: 2,
    title: "Compareça à recepção para assinar o contrato e cadastrar sua digital",
    description:
      "Vá até a recepção para assinar o contrato presencialmente e realizar o cadastro da sua digital na catraca de acesso.",
    howTo: [
      "Veja o endereço e abra o mapa na seção “Como chegar”, logo abaixo dos passos.",
      "Vá até a recepção da unidade.",
      "Assine o contrato e cadastre sua digital na catraca.",
      "Depois, volte aqui e clique em “Já fui à recepção”.",
    ],
    buttonLabel: "Já fui à recepção",
    href: undefined,
  },
  {
    number: 3,
    title: "Entre na comunidade VIP da sua turma",
    description:
      "Acesse a comunidade VIP com monitores e xerifes. Esse será um dos canais importantes de acompanhamento, avisos e organização da rotina da turma.",
    howTo: [
      "Clique no botão abaixo para abrir a comunidade.",
      "Entre na comunidade da sua turma.",
      "Fique de olho nos avisos: é por lá que a rotina da turma é organizada.",
    ],
    buttonLabel: "Entrar na comunidade VIP",
    href: "https://links.cppem.com.br/comunidade-turma-presencial",
  },
];

export default function ChecklistSection() {
  const [completed, setCompleted] = useState<boolean[]>(Array(STEPS.length).fill(false));
  const [mounted, setMounted] = useState(false);

  // Lê o progresso do localStorage só no cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === STEPS.length) setCompleted(parsed);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Salva a cada alteração
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
  const allDone = completedCount === STEPS.length;
  const percentage = Math.round((completedCount / STEPS.length) * 100);
  const currentIndex = completed.findIndex((done) => !done);

  // Evita divergência de hidratação: só mostra o progresso depois de montar
  if (!mounted) {
    return (
      <section className="section" id="passos">
        <div className="container narrow">
          <div className="steps-skeleton" aria-hidden />
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="passos" aria-labelledby="passos-titulo">
      <div className="container narrow">
        <span className="eyebrow">Passo a passo</span>
        <h2 id="passos-titulo" className="section-title">Próximos passos</h2>
        <p className="section-copy">Conclua uma etapa de cada vez, na ordem. Seu progresso fica salvo neste aparelho.</p>

        <div className="progress" role="status" aria-live="polite">
          {allDone ? (
            <p className="progress-done">
              <Trophy size={20} aria-hidden /> Tudo certo! Agora você está pronto para iniciar sua jornada presencial no CPPEM.
            </p>
          ) : (
            <div className="progress-head">
              <span>
                Você concluiu <strong>{completedCount}</strong> de <strong>{STEPS.length}</strong> passos
              </span>
              <span className="progress-percent">{percentage}%</span>
            </div>
          )}
          <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              howTo={step.howTo}
              buttonLabel={step.buttonLabel}
              href={step.href}
              badge={step.badge}
              state={completed[i] ? "done" : i === currentIndex ? "current" : "upcoming"}
              total={STEPS.length}
              isLast={i === STEPS.length - 1}
              onComplete={() => markComplete(i)}
            />
          ))}
        </ol>

        <div className="reset-row">
          <button type="button" className="reset-button" onClick={resetAll}>
            Reiniciar tarefas
          </button>
        </div>
      </div>
    </section>
  );
}
