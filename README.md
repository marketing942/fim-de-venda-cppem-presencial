# CPPEM Concursos — Próximos Passos (Turmas Presenciais)

Página de orientação pós-matrícula para os alunos das turmas presenciais do CPPEM Concursos, com a mesma identidade visual da Central de Ajuda (dourado sobre preto, Oxanium / Rajdhani / Inter, brasas animadas, emblema do leão).

## Tecnologias

- **Next.js 14** (App Router) + **TypeScript**
- CSS próprio em `src/app/globals.css` (tokens da identidade: `--gold`, `--bg`, `--surface`…)
- **lucide-react** (ícones)
- **localStorage** (salva o progresso da checklist)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Deploy: Vercel (importar o repositório, sem configuração extra).

## Estrutura da página

1. **Hero** — parabéns + convite para começar o passo 1
2. **Próximos passos** — 4 passos em linha do tempo, cada um com "como fazer" numerado
3. **Como chegar** — endereço e botão do Maps
4. **Atendimento** — os dois canais da Central de Ajuda (assistente virtual 24h e suporte ao aluno, com status "Disponível agora")
5. **Rodapé** — redes sociais, botão da Central de Ajuda e link para o cppem.com.br

```
src/
├── app/
│   ├── layout.tsx, page.tsx, globals.css
│   └── components/
│       ├── SiteHeader.tsx, SiteFooter.tsx
│       ├── Hero.tsx, ChecklistSection.tsx, StepCard.tsx
│       ├── LocationCard.tsx, ContactSection.tsx
│       ├── social-icons.tsx, ember-field.tsx   (copiados da Central de Ajuda)
└── lib/
    ├── contact.ts   # canais de suporte, links e URL da Central de Ajuda
    └── hours.ts     # horário de atendimento (Brasília) e feriados
public/brand/        # logo e emblema
```

## Onde editar

- **Passos e links:** `STEPS` em `ChecklistSection.tsx`
- **Canais de suporte:** `SUPPORT_CHANNELS` em `lib/contact.ts` (mesmos da Central de Ajuda)
- **Redes sociais:** `SOCIAL_LINKS` em `social-icons.tsx`
- **Link da Central de Ajuda:** `HELP_CENTER_URL` em `lib/contact.ts`
