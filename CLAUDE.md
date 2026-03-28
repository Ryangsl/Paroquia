# CLAUDE.md - Paroquia Sagrado Coracao de Jesus

## Projeto

Site institucional da Paroquia Sagrado Coracao de Jesus (Uberaba, Brasil), construido em React.

O codigo do site fica em `paroquia-react/`.

## Comandos

```bash
cd paroquia-react
npm install        # instalar dependencias
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de producao
npm run lint       # linting com ESLint
```

## Arquitetura

- **React 19 + Vite 8 + React Router DOM 7**
- **CSS Modules**: cada componente tem seu `.module.css` ao lado
- **JSON como fonte de dados**: todo conteudo editavel esta em `src/data/*.json` — separado do codigo React
- **Design tokens**: variaveis CSS centralizadas em `src/assets/styles/variables.css`
- **Hooks customizados**: `useScrollShadow` (sombra no header ao rolar), `useScrollReveal` (animacao de entrada com IntersectionObserver), `ScrollToTop` (volta ao topo na troca de rota)

## Estrutura de Pastas

```
paroquia-react/src/
├── assets/styles/   → variables.css, global.css, animations.css
├── components/
│   ├── layout/      → Header, Footer, Layout (Outlet), PageHeader
│   ├── ui/          → Button, SectionHeader, CTASection (reutilizaveis)
│   ├── home/        → Hero, Highlights, QuickInfo
│   ├── about/       → AboutContent, ValuesGrid, MinistriesGrid
│   ├── schedule/    → ScheduleGrid, CelebrationsGrid, SacramentsGrid, ImportantNotes
│   ├── events/      → EventsList, ActivitiesGrid, GroupsGrid
│   └── contact/     → ContactInfo, ContactForm, MapSection, FAQGrid
├── data/            → 8 arquivos JSON com todo conteudo do site
├── hooks/           → useScrollShadow, useScrollReveal, ScrollToTop
└── pages/           → HomePage, AboutPage, SchedulePage, EventsPage, ContactPage, CommunitiesPage
```

## Rotas

- `/` → HomePage
- `/sobre` → AboutPage
- `/horarios` → SchedulePage
- `/eventos` → EventsPage
- `/contato` → ContactPage
- `/comunidades` → CommunitiesPage

## Convencoes

- Componentes em PascalCase com `.jsx`
- Estilos em CSS Modules (`.module.css`) ao lado do componente
- Dados em JSON puro em `src/data/`
- Cor de destaque: dourado `#c9a27` (variavel `--accent-color`)
- Fontes: Playfair Display (titulos) + Inter (corpo) via Google Fonts
- Idioma do site: portugues brasileiro (pt-BR)

## Manutencao de Conteudo

Para atualizar textos, horarios, eventos ou qualquer conteudo do site, edite apenas os arquivos JSON em `src/data/`. Os componentes React leem esses arquivos diretamente — nao e necessario mexer em codigo.

## Proximas Melhorias Possiveis

- Substituir emojis por icones SVG ou biblioteca de icones (Lucide, Phosphor)
- Adicionar imagens reais (fotos da paroquia, eventos, comunidades)
- Implementar formulario de contato funcional (backend ou servico como Formspree)
- Adicionar pagina 404 customizada
- SEO: adicionar meta tags por pagina com react-helmet
- PWA: service worker para acesso offline
- Acessibilidade: revisar contraste, aria-labels, navegacao por teclado
- Testes: adicionar testes com Vitest + Testing Library
- Deploy: configurar CI/CD (GitHub Pages, Vercel ou Netlify)
