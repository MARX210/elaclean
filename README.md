# ElaClean — Landing page

Landing page da **ElaClean Higienização de Estofados** (Francisco Beltrão, PR e região), com visual escuro e cinematográfico em tom creme. Higienização de sofás, colchões, cadeiras, tapetes e outros estofados, com orçamento pelo WhatsApp.

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

## Contato

ElaClean Higienização de Estofados · Francisco Beltrão, PR e região
WhatsApp: (46) 99982-0653
Instagram: [@elaclean.higienizacao.fb](https://www.instagram.com/elaclean.higienizacao.fb/)
