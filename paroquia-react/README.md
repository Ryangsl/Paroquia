# Paroquia Nossa Senhora Aparecida do Uberaba

Site institucional da Paroquia Nossa Senhora Aparecida — Uberaba, Curitiba, PR.

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
├── public/              # Arquivos estaticos e imagens
├── src/
│   ├── assets/styles/   # CSS global, variaveis e animacoes
│   ├── components/
│   │   ├── about/       # Componentes da pagina Sobre
│   │   ├── contact/     # Componentes da pagina Contato
│   │   ├── events/      # Componentes da pagina Eventos
│   │   ├── home/        # Componentes da pagina Inicial (com proximo evento dinamico)
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
| `/` | Inicio | Hero, destaques, proximo evento dinamico |
| `/sobre` | Sobre | Historia, missao, valores, ministerios |
| `/horarios` | Horarios | Missas, celebracoes, devocoes, sacramentos, info da paroquia |
| `/comunidades` | Comunidades | Padroeiros, capelas e horarios das celebracoes (10 comunidades) |
| `/contato` | Contato | Informacoes, formulario, mapa, FAQ |
| `/eventos` | Eventos | Agenda dinamica (oculta da navegacao, acessivel via URL) |

## Manutencao de Conteudo

Todo o conteudo do site esta em arquivos JSON em `src/data/`:

| Arquivo | Conteudo |
|---------|----------|
| `siteConfig.json` | Nome da paroquia, tagline, redes sociais |
| `navigation.json` | Itens do menu de navegacao |
| `home.json` | Hero, destaques, informacoes rapidas |
| `about.json` | Historia, missao, valores, ministerios |
| `schedule.json` | Horarios de missas, celebracoes, devocoes, sacramentos e info da paroquia |
| `events.json` | Eventos com datas ISO (`YYYY-MM-DD`), atividades semanais, grupos |
| `contact.json` | Telefones, endereco, FAQ |
| `communities.json` | 10 comunidades com padroeiros, horarios e espaco para imagens |

Para atualizar o conteudo, edite o arquivo JSON correspondente. Nao e necessario alterar codigo React.

### Imagens das Comunidades

Cada comunidade em `communities.json` tem um campo `"image"` vazio. Para adicionar:
1. Coloque a imagem em `public/imagens/`
2. Preencha o campo: `"image": "/imagens/nome-do-padroeiro.jpg"`

### Eventos Dinamicos

Eventos em `events.json` usam o campo `"date"` no formato `"YYYY-MM-DD"`. O card "Proximo Evento" na home e a lista de eventos filtram automaticamente eventos passados.

## Design System

As variaveis de design estao em `src/assets/styles/variables.css`:

- **Cores**: Dourado (`#c9a227`) como cor de destaque, tons escuros para textos
- **Fontes**: Playfair Display (titulos) + Inter (corpo)
- **Sombras**: Sistema de camadas (xs, sm, md, lg, gold)
- **Espacamento**: Escala consistente (xs a 2xl)
- **Transicoes**: Curvas spring e ease-out para animacoes suaves

## Informacoes da Paroquia

- **Endereco**: Rua Augusto Steembock, 100 — Uberaba, Curitiba, PR
- **Estacionamento**: Rua Capitao Leonidas Marques, 1845
- **Telefones**: (41) 98508-7251 (WhatsApp) | (41) 3369-2143
- **Redes Sociais**: [linktr.ee/aparecidacuritiba](https://linktr.ee/aparecidacuritiba)
- **Transporte**: Interbairros 3 ou Jardim Petropolis
