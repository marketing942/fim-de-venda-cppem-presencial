# CPPEM Concursos — Próximos Passos (Turmas Presenciais)

Site institucional de orientação pós-matrícula para os alunos das turmas presenciais do CPPEM Concursos.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (ícones)
- **localStorage** (salva progresso da checklist)

---

## Instalação e execução local

### 1. Instale as dependências

```bash
npm install
```

### 2. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Build de produção

```bash
npm run build
npm run start
```

---

## Deploy na Vercel

### Opção 1 — Via CLI

```bash
npm install -g vercel
vercel
```

Siga as instruções no terminal. Na primeira vez o Vercel vai te pedir para fazer login e vincular o projeto.

### Opção 2 — Via GitHub (recomendado)

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Clique em **"Deploy"** — sem nenhuma configuração extra necessária

O Vercel detecta automaticamente o Next.js e faz o build correto.

---

## Estrutura do projeto

```
src/
└── app/
    ├── layout.tsx          # Layout raiz com metadados
    ├── page.tsx            # Página principal
    ├── globals.css         # Estilos globais
    └── components/
        ├── Header.tsx          # Cabeçalho com logo
        ├── Hero.tsx            # Seção de parabéns
        ├── ChecklistSection.tsx # Gerencia estado da checklist
        ├── ProgressBar.tsx     # Barra de progresso
        ├── StepCard.tsx        # Card individual de cada passo
        ├── LocationCard.tsx    # Card de localização
        ├── FloorsSection.tsx   # Andares e salas
        ├── SupportCard.tsx     # Card de suporte final
        └── Footer.tsx          # Rodapé institucional
```

---

## Funcionalidades

- **Checklist interativa** com 5 passos
- **Progresso salvo** no localStorage (persiste ao fechar o browser)
- **Links externos** abrem em nova aba ao clicar no botão
- **Barra de progresso** animada com contagem de passos
- **Mensagem de conclusão** quando todos os passos forem feitos
- **Botão "Refazer checklist"** para limpar o progresso
- **100% responsivo** — otimizado para celular
