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
- **CSS regular com prefixo por componente**: cada componente tem seu `.css` ao lado, com classes prefixadas em kebab-case para evitar colisoes (ex: `.hero-title`, `.btn-primary`, `.admin-tab`)
- **JSON como fonte de dados**: todo conteudo editavel esta em `src/data/*.json` — separado do codigo React
- **Design tokens**: variaveis CSS centralizadas em `src/assets/styles/variables.css`
- **Hooks customizados**: `useScrollShadow` (sombra no header ao rolar), `useScrollReveal` (animacao de entrada com IntersectionObserver)
- **Utilitarios de data**: `src/utils/dateUtils.js` — funcoes compartilhadas para formatar e filtrar datas
- **Eventos dinamicos**: avisos e eventos em destaque na home, filtro por mes na pagina de eventos (`events.json` usa campo `date` ISO `YYYY-MM-DD`)
- **Painel Admin**: rota `/admin` (oculta da navegacao) para gerenciar avisos e eventos via interface grafica (somente em dev)

## Estrutura de Pastas

```
paroquia-react/src/
├── assets/styles/       → variables.css, global.css, animations.css
├── components/
│   ├── layout/          → Header, Footer, Layout (Outlet), PageHeader, ScrollToTop
│   ├── ui/              → Button, SectionHeader, CTASection (reutilizaveis)
│   ├── home/            → Hero, NoticesSection, Highlights, FeaturedEvents, QuickInfo
│   ├── about/           → AboutContent, ValuesGrid, MinistriesGrid
│   ├── schedule/        → ScheduleGrid, CelebrationsGrid, SacramentsGrid, ImportantNotes
│   ├── events/          → EventsList (com filtro por mes e badge de destaque), ActivitiesGrid, GroupsGrid
│   ├── communities/     → CommunityCard
│   └── contact/         → ContactInfo, ContactForm, MapSection, FAQGrid
├── data/                → JSON com todo conteudo do site
├── hooks/               → useScrollShadow, useScrollReveal
├── utils/               → dateUtils.js (MONTHS, parseEventDate, getTodayISO, etc.)
└── pages/               → HomePage, AboutPage, SchedulePage, EventsPage, ContactPage,
                           CommunitiesPage, AdminPage
```

## Rotas

- `/` → HomePage
- `/sobre` → AboutPage
- `/horarios` → SchedulePage
- `/eventos` → EventsPage
- `/contato` → ContactPage
- `/comunidades` → CommunitiesPage (padroeiros, capelas e horarios das celebracoes)
- `/admin` → AdminPage (oculta da navegacao — somente acesso direto via URL em dev)

## Convencoes

- Componentes em PascalCase com `.jsx`
- Estilos em CSS regular (`.css`) ao lado do componente, com classes prefixadas em kebab-case
- Dados em JSON puro em `src/data/`
- Utilitarios puros (sem JSX) em `src/utils/`
- Cor de destaque: dourado `#c9a227` (variavel `--accent-color`)
- Fontes: Playfair Display (titulos) + Inter (corpo) via Google Fonts
- Idioma do site: portugues brasileiro (pt-BR)

## Manutencao de Conteudo

Para atualizar textos, horarios, eventos ou qualquer conteudo do site, edite apenas os arquivos JSON em `src/data/`. Os componentes React leem esses arquivos diretamente — nao e necessario mexer em codigo.

### Alternativa: Painel Admin (recomendado para dev)

Com o servidor de desenvolvimento rodando (`npm run dev`), acesse `http://localhost:5173/admin`.
Requer a variavel de ambiente `VITE_ADMIN_KEY` definida em `.env` (ver `.env.example`).
O painel permite criar, editar e excluir avisos e eventos sem editar JSON manualmente.

### Avisos Importantes

Edite o bloco `notices` em `home.json`. Cada aviso tem o campo `"active": true/false` para
ativar ou desativar sem remover o item. Avisos inativos nao aparecem na home.

### Eventos em Destaque

Marque `"featured": true` no evento em `events.json`. Eventos em destaque aparecem
na secao especial da home E com badge na pagina de eventos.

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
