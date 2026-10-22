# ElaClean — Landing page

Landing page da **ElaClean Higienização de Estofados** (Francisco Beltrão, PR e região), com visual escuro e cinematográfico em tom creme. Higienização de sofás, colchões, cadeiras, tapetes e outros estofados, com orçamento pelo WhatsApp.

**Desenvolvido por Marx Vinicius — MV NEXUS** ([LinkedIn](https://linkedin.com/in/marxbispo001)).

> ⚠️ **Projeto proprietário. Leia o [Aviso de Direitos Autorais, Plágio e Uso Restrito](#️-aviso-de-direitos-autorais-plágio-e-uso-restrito) antes de copiar, reutilizar ou publicar qualquer parte deste repositório.**

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura](#estrutura)
- [Rodar localmente](#rodar-localmente)
- [Publicar no GitHub](#publicar-no-github)
- [Publicar na Vercel](#publicar-na-vercel)
- [Avaliações do Google ao vivo (opcional)](#avaliações-do-google-ao-vivo-opcional)
- [Personalização](#personalização)
- [⚖️ Aviso de Direitos Autorais, Plágio e Uso Restrito](#️-aviso-de-direitos-autorais-plágio-e-uso-restrito)
- [Autoria](#autoria)
- [Contato](#contato)

## Visão geral

- **Hero:** título "ElaClean*" gigante, navegação em pílula, logo e botão para pedir orçamento no WhatsApp.
- **About:** texto com revelação letra a letra conforme a rolagem.
- **Como funciona:** cards com o passo a passo (WhatsApp, orçamento, higienização) e o antes/depois.
- **Avaliações e contato:** nota do Google, comentários, horários de atendimento, WhatsApp, Google Maps e Instagram.
- **Avaliações ao vivo (opcional):** função serverless que busca nota e comentários na Google Places API.

## Tecnologias

React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · framer-motion · lucide-react · Vercel (hospedagem e função serverless)

## Estrutura

```
.
├── api/
│   └── reviews.js          # função serverless (Google Places)
├── src/
│   ├── assets/             # fotos antes/depois e logo
│   ├── components/         # Hero, About, Features, Contact, WordsPullUp
│   ├── constants.ts        # link do WhatsApp e do Google Maps
│   ├── index.css           # fontes, texturas de ruído
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vercel.json
└── .env.example
```

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar no GitHub

1. Crie um repositório vazio em https://github.com/new (por exemplo `elaclean-landing`), sem README nem .gitignore.
2. No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Landing page ElaClean"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/elaclean-landing.git
git push -u origin main
```

## Publicar na Vercel

**Pelo painel (recomendado):**

1. Acesse https://vercel.com/new e entre com sua conta do GitHub.
2. Importe o repositório `elaclean-landing`.
3. A Vercel detecta o Vite automaticamente (`npm run build`, saída `dist`). Clique em **Deploy**.
4. Cada `git push` na branch `main` publica uma nova versão.

**Pela linha de comando:**

```bash
npm i -g vercel
vercel        # primeiro deploy de teste
vercel --prod # publicação em produção
```

### Domínio próprio

No painel da Vercel: **Project → Settings → Domains** e adicione o domínio. Siga as instruções de DNS mostradas.

> A publicação só deve ser feita pela **ElaClean** ou por **Marx Vinicius — MV NEXUS**, ou com autorização expressa de ambos (veja o aviso abaixo).

## Avaliações do Google ao vivo (opcional)

Sem configuração, a página mostra a nota 4,8, as 16 avaliações e 3 comentários fixos. Para atualizar automaticamente:

1. **Place ID:** encontre o da ElaClean em https://developers.google.com/maps/documentation/places/web-service/place-id (ferramenta Place ID Finder).
2. **Chave de API:** no Google Cloud Console, crie um projeto, ative o faturamento, habilite a **Places API (New)** e crie uma chave de API. Restrinja a chave à Places API.
3. **Variáveis na Vercel:** em **Project → Settings → Environment Variables**, adicione:
   - `GOOGLE_PLACES_API_KEY`
   - `GOOGLE_PLACE_ID`
4. Faça um novo deploy. A página passa a chamar `/api/reviews`, que guarda o resultado em cache por cerca de 6 horas.

Observações:
- A Places API devolve até 5 comentários por consulta. A página exibe os 3 primeiros com nota 4 ou 5.
- Se a API falhar ou não estiver configurada, a página continua mostrando os dados fixos.
- Mantenha o nome do autor, o link e a atribuição "Google" junto aos comentários, como exigem os termos do Google.
- Verifique a tabela de preços atual da Places API no Google Cloud.
- Para testar a função localmente, use `vercel dev` com um arquivo `.env.local` baseado no `.env.example`.
- **Nunca** publique a chave de API no repositório: use apenas variáveis de ambiente.

## Personalização

| O que mudar | Onde |
|---|---|
| Número e mensagem do WhatsApp, link do Maps | `src/constants.ts` |
| Textos do hero | `src/components/Hero.tsx` |
| Texto da seção About | `src/components/About.tsx` |
| Passos e antes/depois | `src/components/Features.tsx` |
| Avaliações fixas, horários, rodapé | `src/components/Contact.tsx` |
| Cores | `tailwind.config.js` e classes dos componentes |
| Fotos e logo | `src/assets/` |

Paleta: fundo preto `#000000`, cartões `#101010` e `#212121`, texto creme `#E1E0CC` e `#DEDBC8`.

---

## ⚖️ Aviso de Direitos Autorais, Plágio e Uso Restrito

**© ElaClean Higienização de Estofados · Desenvolvimento © Marx Vinicius — MV NEXUS. Todos os direitos reservados.**

Este repositório é um projeto **proprietário**. **Não é software livre / open source** e **não possui licença de uso público**. O simples fato de o código estar visível ou acessível não autoriza sua cópia, reutilização ou publicação.

### 🚫 É proibido, sem autorização prévia e por escrito

- **Copiar, reproduzir, plagiar, redistribuir, vender ou sublicenciar** qualquer parte do projeto: código, layout, estrutura de componentes, animações, textos, imagens ou identidade visual.
- **Clonar ou republicar** esta landing page, ainda que com outro nome, outras cores ou pequenas alterações. Alterar superficialmente uma obra copiada **não descaracteriza o plágio**.
- **Usar a marca, o nome, o logotipo, as fotos (inclusive antes/depois) e os textos da ElaClean** em outros sites, redes sociais, materiais impressos ou projetos de terceiros.
- **Reaproveitar o projeto como modelo, template ou base** para sites de concorrentes ou de outros clientes.
- **Usar o conteúdo para treinar modelos de IA, gerar obras derivadas ou criar sites semelhantes.**
- **Remover ou alterar** avisos de autoria e direitos autorais, inclusive o crédito a **Marx Vinicius — MV NEXUS**.
- **Apresentar este trabalho como se fosse de sua autoria**, em portfólios, propostas comerciais ou redes sociais.

### 🔒 Materiais protegidos

| Material | Titularidade |
|---|---|
| Marca, nome e logotipo da ElaClean | ElaClean Higienização de Estofados |
| Fotos antes/depois e demais imagens em `src/assets/` | ElaClean (imagens de serviços e estofados de clientes só podem ser usadas com a autorização da loja) |
| Textos institucionais, chamadas e descrições de serviços | ElaClean |
| Avaliações exibidas na página | Respectivos autores (clientes, via Google), exibidas apenas como referência, com atribuição |
| Código-fonte, layout, animações e desenvolvimento desta página | **Marx Vinicius — MV NEXUS** |

### ✅ Exceções

- **Bibliotecas de terceiros** (React, Vite, Tailwind CSS, framer-motion, lucide-react e outras) seguem as licenças de seus respectivos autores.
- **Fontes** seguem as licenças de seus distribuidores.
- **Dados do Google** (avaliações e Places API) seguem os Termos de Serviço do Google.

### 📚 Base legal

O uso não autorizado pode configurar violação, entre outras, das seguintes normas brasileiras:

- **Lei nº 9.610/1998** (Lei de Direitos Autorais): protege obras intelectuais, incluindo textos, imagens e layout, e prevê a reparação dos danos morais e patrimoniais.
- **Lei nº 9.609/1998** (Lei do Software): protege os programas de computador e seu código-fonte.
- **Código Penal, art. 184**: crime de violação de direito autoral.
- **Lei nº 9.279/1996** (Propriedade Industrial): protege marcas e proíbe a sua utilização indevida.

O descumprimento poderá resultar em **notificação extrajudicial, denúncia à plataforma de hospedagem (Vercel, GitHub e similares) para remoção do conteúdo (*takedown*), indenização e demais medidas civis e criminais cabíveis**.

### 📩 Como pedir autorização

Qualquer uso fora do descrito acima exige permissão formal e por escrito da **ElaClean** (marca e materiais da loja) e de **Marx Vinicius — MV NEXUS** (código e desenvolvimento). Entre em contato pelos canais da seção abaixo.

---

## Autoria

**Desenvolvimento:** Marx Vinicius — **MV NEXUS**
LinkedIn: [linkedin.com/in/marxbispo001](https://linkedin.com/in/marxbispo001)

## Contato

ElaClean Higienização de Estofados · Francisco Beltrão, PR e região
WhatsApp: (46) 99982-0653
Instagram: [@elaclean.higienizacao.fb](https://www.instagram.com/elaclean.higienizacao.fb/)

---

<sub>© ElaClean Higienização de Estofados · Desenvolvido por Marx Vinicius — MV NEXUS · Todos os direitos reservados.</sub>
