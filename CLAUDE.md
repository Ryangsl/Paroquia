# CLAUDE.md - Paroquia Nossa Senhora Aparecida do Uberaba

## Projeto

Site institucional da Paroquia Nossa Senhora Aparecida do Uberaba (Curitiba, Parana, Brasil), construido em React.

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
- **Eventos dinamicos**: o card "Proximo Evento" na home e a lista de eventos filtram automaticamente por data (`events.json` usa campo `date` no formato ISO `YYYY-MM-DD`)

## Estrutura de Pastas

```
paroquia-react/src/
├── assets/styles/   → variables.css, global.css, animations.css
├── components/
│   ├── layout/      → Header, Footer, Layout (Outlet), PageHeader
│   ├── ui/          → Button, SectionHeader, CTASection (reutilizaveis)
│   ├── home/        → Hero, Highlights, QuickInfo (com proximo evento dinamico)
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
- `/eventos` → EventsPage (oculta da navegacao, mas acessivel via URL)
- `/contato` → ContactPage
- `/comunidades` → CommunitiesPage (padroeiros, capelas e horarios das celebracoes)

## Convencoes

- Componentes em PascalCase com `.jsx`
- Estilos em CSS Modules (`.module.css`) ao lado do componente
- Dados em JSON puro em `src/data/`
- Cor de destaque: dourado `#c9a227` (variavel `--accent-color`)
- Fontes: Playfair Display (titulos) + Inter (corpo) via Google Fonts
- Idioma do site: portugues brasileiro (pt-BR)

## Manutencao de Conteudo

Para atualizar textos, horarios, eventos ou qualquer conteudo do site, edite apenas os arquivos JSON em `src/data/`. Os componentes React leem esses arquivos diretamente — nao e necessario mexer em codigo.

### Comunidades

Para adicionar imagens dos padroeiros nas comunidades, edite `communities.json` e preencha o campo `"image"` com o caminho da imagem (ex: `"/imagens/sao-jose.jpg"`). Coloque as imagens na pasta `public/imagens/`.

### Eventos

Para adicionar eventos, edite `events.json`. Cada evento deve ter o campo `"date"` no formato ISO `"YYYY-MM-DD"`. Eventos passados sao filtrados automaticamente.

## Informacoes da Paroquia

- **Endereco**: Rua Augusto Steembock, 100 — Uberaba, Curitiba, PR
- **Estacionamento**: Rua Capitao Leonidas Marques, 1845
- **Telefones**: (41) 98508-7251 (WhatsApp) | (41) 3369-2143
- **Redes Sociais**: https://linktr.ee/aparecidacuritiba
- **Transporte publico**: Interbairros 3 ou Jardim Petropolis — descer proximo ao Posto de Saude Uberaba de Cima

## Proximas Melhorias Possiveis

- Substituir emojis por icones SVG ou biblioteca de icones (Lucide, Phosphor)
- Adicionar imagens reais dos padroeiros nas comunidades (campo `image` ja existe no JSON)
- Implementar formulario de contato funcional (backend ou servico como Formspree)
- Adicionar pagina 404 customizada
- SEO: adicionar meta tags por pagina com react-helmet
- PWA: service worker para acesso offline
- Acessibilidade: revisar contraste, aria-labels, navegacao por teclado
- Testes: adicionar testes com Vitest + Testing Library
- Deploy: configurar CI/CD (GitHub Pages, Vercel ou Netlify)
