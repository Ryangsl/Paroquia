# Paroquia Sagrado Coracao de Jesus

Site institucional da Paroquia Nossa Senhora Aparecida - Uberaba, Brasil.

## Stack

- **React 19** + **Vite 8**
- **React Router DOM 7** (SPA com rotas)
- **CSS Modules** (estilos escopados por componente)
- **JSON Data Files** (conteudo separado do codigo)

## Inicio Rapido

```bash
cd paroquia-react
npm install
npm run dev
```

O site estara disponivel em `http://localhost:5173`.

## Scripts

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de producao em `dist/` |
| `npm run preview` | Preview do build de producao |
| `npm run lint` | Verificacao de codigo com ESLint |

## Estrutura do Projeto

```
paroquia-react/
├── public/              # Arquivos estaticos
├── src/
│   ├── assets/styles/   # CSS global, variaveis e animacoes
│   ├── components/
│   │   ├── about/       # Componentes da pagina Sobre
│   │   ├── contact/     # Componentes da pagina Contato
│   │   ├── events/      # Componentes da pagina Eventos
│   │   ├── home/        # Componentes da pagina Inicial
│   │   ├── layout/      # Header, Footer, Layout, PageHeader
│   │   ├── schedule/    # Componentes da pagina Horarios
│   │   └── ui/          # Componentes reutilizaveis (Button, SectionHeader, CTASection)
│   ├── data/            # Arquivos JSON com todo o conteudo do site
│   ├── hooks/           # Hooks customizados (scroll, animacoes)
│   └── pages/           # Paginas (HomePage, AboutPage, etc.)
└── vite.config.js
```

## Paginas

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/` | Inicio | Hero, destaques, informacoes rapidas |
| `/sobre` | Sobre | Historia, missao, valores, ministerios |
| `/horarios` | Horarios | Missas, celebracoes, sacramentos |
| `/eventos` | Eventos | Agenda, atividades semanais, grupos |
| `/contato` | Contato | Informacoes, formulario, mapa, FAQ |
| `/comunidades` | Comunidades | Comunidades da paroquia |

## Manutencao de Conteudo

Todo o conteudo do site esta em arquivos JSON em `src/data/`:

| Arquivo | Conteudo |
|---------|----------|
| `siteConfig.json` | Nome da paroquia, tagline, redes sociais |
| `navigation.json` | Itens do menu de navegacao |
| `home.json` | Hero, destaques, informacoes rapidas |
| `about.json` | Historia, missao, valores, ministerios |
| `schedule.json` | Horarios de missas, celebracoes, sacramentos |
| `events.json` | Eventos, atividades semanais, grupos pastorais |
| `contact.json` | Informacoes de contato, FAQ |
| `communities.json` | Comunidades da paroquia |

Para atualizar o conteudo, edite o arquivo JSON correspondente. Nao e necessario alterar codigo React.

## Design System

As variaveis de design estao em `src/assets/styles/variables.css`:

- **Cores**: Dourado (`#c9a227`) como cor de destaque, tons escuros para textos
- **Fontes**: Playfair Display (titulos) + Inter (corpo)
- **Sombras**: Sistema de camadas (xs, sm, md, lg, gold)
- **Espacamento**: Escala consistente (xs a 3xl)
- **Transicoes**: Curvas spring e ease-out para animacoes suaves
