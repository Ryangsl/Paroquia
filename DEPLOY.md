# Guia de Deploy — Paróquia Nossa Senhora Aparecida

Este guia cobre a compra de domínio, escolha de hospedagem em nuvem e publicação do site.

---

## Como funciona: site estático na nuvem

Este site é um projeto React que gera arquivos estáticos (`HTML + CSS + JS`) com o comando `npm run build`. Isso significa:

- **Não precisa de servidor próprio** — os arquivos ficam nos servidores da plataforma de hospedagem
- **Não fica na sua máquina** — o site é acessível de qualquer lugar, 24h por dia
- **Você só faz `git push`** — a plataforma pega o código do GitHub, executa o build e publica automaticamente
- **Custo mínimo** — as 3 plataformas abaixo têm plano gratuito suficiente para um site institucional

```
Seu computador (desenvolvimento)
        ↓  git push
    GitHub (repositório)
        ↓  build automático
  Vercel / Netlify / GitHub Pages (nuvem)
        ↓  domínio configurado
  Visitantes de todo o mundo
```

---

## 1. Compra de Domínio

Um domínio é o endereço do site (ex: `aparecidauberaba.com.br`). Recomendamos o sufixo `.com.br` por ser mais reconhecido no Brasil.

### Registradoras recomendadas

| # | Serviço | Site | Preço médio `.com.br`/ano | Destaque |
|---|---------|------|---------------------------|----------|
| 1 | **Registro.br** | registro.br | ~R$ 40 | Oficial do Brasil (NIC.br). O mais confiável para `.com.br`. |
| 2 | **GoDaddy** | godaddy.com/pt-br | ~R$ 50–80 | Interface simples, boa integração com hospedagem. |
| 3 | **Hostinger** | hostinger.com.br | ~R$ 30–50 | Melhor custo-benefício, painel fácil para iniciantes. |

### Como comprar no Registro.br (passo a passo)

1. Acesse **registro.br** e pesquise o nome desejado (ex: `aparecidauberaba`)
2. Crie uma conta com CPF/CNPJ da paróquia
3. Escolha o domínio disponível e finalize o pagamento
4. Após confirmado, você recebe acesso ao painel DNS (onde vai apontar para a hospedagem na nuvem)

> **Sugestões de nome:**
> - `aparecidauberaba.com.br`
> - `paroquiaaparecidauberaba.com.br`
> - `nssaaparecidauberaba.com.br`

---

## 2. Hospedagem na Nuvem

As 3 opções abaixo são plataformas **100% em nuvem** — o site roda nos servidores delas, não na sua máquina. Basta conectar o repositório do GitHub uma única vez e todo `git push` publica o site automaticamente.

### Plataformas recomendadas

| # | Serviço | Site | Custo | Onde fica |
|---|---------|------|-------|-----------|
| 1 | **Vercel** | vercel.com | Gratuito (plano hobby) | Servidores globais da Vercel (EUA/Europa/Brasil) |
| 2 | **Netlify** | netlify.com | Gratuito (plano starter) | Servidores globais da Netlify |
| 3 | **GitHub Pages** | pages.github.com | Gratuito | Servidores do GitHub (Microsoft Azure) |

> **Recomendação:** Use a **Vercel**. É a plataforma oficial do ecossistema React/Vite, com deploy em menos de 1 minuto e painel simples.

---

## 3. Deploy na Vercel ⭐ (Recomendado)

A Vercel hospeda o site nos próprios servidores dela. Você não precisa manter nada em execução — ela cuida de tudo.

### Passo a passo

#### 3.1 Verificar o `vite.config.js`

```js
// paroquia-react/vite.config.js
export default defineConfig({
  base: '/',   // deve estar assim para domínio próprio
  plugins: [react()],
})
```

#### 3.2 Criar conta na Vercel

1. Acesse **vercel.com** e clique em **Sign Up**
2. Escolha **Continue with GitHub**
3. Autorize o acesso ao repositório `Ryangsl/Paroquia`

#### 3.3 Importar o projeto

1. No dashboard, clique em **Add New → Project**
2. Selecione o repositório `Ryangsl/Paroquia`
3. Configure as opções de build:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `paroquia-react` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

4. Clique em **Deploy**

Após 1–2 minutos, o site estará **ao vivo na nuvem** em um endereço como `paroquia-ryangsl.vercel.app`. A partir daqui, cada `git push` republica automaticamente.

#### 3.4 Conectar o domínio próprio

1. No painel do projeto: **Settings → Domains → Add Domain**
2. Digite o domínio comprado (ex: `aparecidauberaba.com.br`)
3. A Vercel exibe os registros DNS necessários:
   - **Tipo A** → `76.76.21.21`
   - **Tipo CNAME** (para `www`) → `cname.vercel-dns.com`

4. No painel do Registro.br:
   - Vá em **DNS** do seu domínio
   - Adicione o registro **A** com o IP acima
   - Adicione o registro **CNAME** com `www` apontando para `cname.vercel-dns.com`

5. Aguarde a propagação (10 minutos a 24 horas)
6. A Vercel gera o **certificado HTTPS automaticamente** — sem custo extra

---

## 4. Deploy na Netlify (Alternativa)

#### 4.1 Criar conta e conectar repositório

1. Acesse **netlify.com → Sign up with GitHub**
2. Clique em **Add new site → Import an existing project**
3. Selecione `Ryangsl/Paroquia`
4. Configure:

| Campo | Valor |
|-------|-------|
| **Base directory** | `paroquia-react` |
| **Build command** | `npm run build` |
| **Publish directory** | `paroquia-react/dist` |

5. Clique em **Deploy site**

O site vai ao ar em `nome-aleatorio.netlify.app`. Para domínio próprio: **Site settings → Domain management → Add custom domain** e siga as instruções de DNS.

---

## 5. Deploy no GitHub Pages (Alternativa Gratuita)

O GitHub também hospeda sites estáticos diretamente do repositório.

#### 5.1 Instalar o pacote gh-pages

```bash
cd paroquia-react
npm install --save-dev gh-pages
```

#### 5.2 Atualizar o `vite.config.js`

```js
export default defineConfig({
  base: '/Paroquia/',   // nome exato do repositório
  plugins: [react()],
})
```

#### 5.3 Adicionar script no `package.json`

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

#### 5.4 Fazer deploy

```bash
npm run deploy
```

Site disponível em: `https://ryangsl.github.io/Paroquia/`

Para domínio próprio: crie `public/CNAME` com o domínio, depois configure em **GitHub → Settings → Pages → Custom domain**.

---

## 6. Comparativo Final

| | Vercel | Netlify | GitHub Pages |
|---|--------|---------|--------------|
| **Onde hospeda** | Servidores Vercel (nuvem global) | Servidores Netlify (nuvem global) | Servidores GitHub/Azure |
| **Deploy automático** | Sim (a cada git push) | Sim (a cada git push) | Manual (npm run deploy) |
| **Domínio customizado** | Sim, gratuito | Sim, gratuito | Sim, gratuito |
| **HTTPS automático** | Sim | Sim | Sim |
| **Custo** | Gratuito | Gratuito | Gratuito |
| **Facilidade** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

---

## 7. Resumo de Custos

| Item | Custo anual |
|------|-------------|
| Domínio `.com.br` (Registro.br) | ~R$ 40/ano |
| Hospedagem na nuvem (Vercel/Netlify/GitHub Pages) | **Gratuita** |
| **Total** | **~R$ 40/ano** |

---

## 8. Checklist Final

- [ ] Domínio registrado (Registro.br / GoDaddy / Hostinger)
- [ ] Conta criada na Vercel (ou Netlify) com GitHub conectado
- [ ] Repositório `Ryangsl/Paroquia` importado na plataforma
- [ ] Build configurado: Root `paroquia-react`, Output `dist`
- [ ] Primeiro deploy realizado com sucesso
- [ ] Domínio customizado adicionado na plataforma
- [ ] Registros DNS configurados no registrador
- [ ] HTTPS ativo (certificado SSL gerado automaticamente)
- [ ] Site acessível pelo domínio final de qualquer dispositivo
- [ ] Testar todas as rotas: `/`, `/sobre`, `/horarios`, `/comunidades`, `/contato`
