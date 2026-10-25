"use client";

import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import StepCard from "./StepCard";
import type { PLANS } from "@/lib/plans";

type Plan = (typeof PLANS)[number];

const BASE_STEPS = [
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

// Só o plano Caveira Black recebe estes dois passos (mesmos textos dos guias dos planos de combate).
const BLACK_EXTRA_STEPS = [
  {
    number: 4,
    title: "Confira o e-mail da sua compra",
    description:
      "Sua liberação é automática: o acesso chega no mesmo e-mail que você cadastrou na hora da compra. Confira se ele já chegou.",
    howTo: [
      "Abra o e-mail que você usou na hora da compra.",
      "Pesquise por “CPPEM” na caixa de entrada, no spam ou em promoções.",
      "Encontrou o acesso? Volte aqui e clique em “Já conferi meu e-mail”.",
      "Não chegou? Fale com a nossa equipe pelos canais de atendimento no fim desta página.",
    ],
    buttonLabel: "Já conferi meu e-mail",
    href: undefined,
    badge: undefined,
  },
  {
    number: 5,
    title: "Salve o link da plataforma",
    description:
      "Este é o link oficial de acesso à plataforma. Deixe salvo nos favoritos do seu navegador para acessar sempre que precisar.",
    howTo: [
      "Clique no botão abaixo para abrir a plataforma.",
      "Salve a página nos favoritos do seu navegador.",
      "Guarde esse link: você vai usá-lo para acessar seus conteúdos.",
    ],
    buttonLabel: "Acessar plataforma",
    href: "https://plataforma.cppem.com.br",
    badge: undefined,
  },
];

// Último passo, para todos os planos: os extras da Central de Ajuda e o Wi-Fi dos alunos.
const EXTRAS_STEP = {
  number: 0,
  title: "Confira os extras e conecte-se ao Wi-Fi dos alunos",
  description:
    "Na Central de Ajuda estão a rede Wi-Fi dos alunos, com QR Code, e os serviços e benefícios do CPPEM: alimentação na sede, academia, finanças e mais.",
  howTo: [
    "Clique no botão abaixo: a página de extras abre em uma nova aba.",
    "Toque em “Wi-Fi” e aponte a câmera do celular para o QR Code (ou copie a senha).",
    "Aproveite para conhecer os outros serviços e benefícios.",
  ],
  buttonLabel: "Ver extras e Wi-Fi",
  href: "https://central-de-ajuda.cppem.com.br/extras",
  badge: undefined,
};

// A numeração sai da posição: o Caveira Black tem mais passos que os outros planos.
function stepsFor(plan: Plan) {
  const lista = plan.extraSteps ? [...BASE_STEPS, ...BLACK_EXTRA_STEPS, EXTRAS_STEP] : [...BASE_STEPS, EXTRAS_STEP];
  return lista.map((step, i) => ({ ...step, number: i + 1 }));
}

export function stepCountFor(plan: Plan) {
  return stepsFor(plan).length;
}

// Dourada e Prata mantêm a chave antiga (o progresso de quem já usou continua valendo).
function storageKeyFor(plan: Plan) {
  return plan.extraSteps ? "cppem_checklist_progress_black" : "cppem_checklist_progress";
}


export default function ChecklistSection({ plan }: { plan: Plan }) {
  const STEPS = stepsFor(plan);
  const STORAGE_KEY = storageKeyFor(plan);
  const [completed, setCompleted] = useState<boolean[]>(Array(STEPS.length).fill(false));
  const [mounted, setMounted] = useState(false);

  // Lê o progresso do localStorage só no cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // progresso salvo antes de um passo novo entrar no fim da lista: mantém o que já foi feito
        if (Array.isArray(parsed) && parsed.length <= STEPS.length) {
          setCompleted([...parsed, ...Array(STEPS.length - parsed.length).fill(false)]);
        }
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
