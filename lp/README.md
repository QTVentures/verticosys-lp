# VerticoSys — Landing Page

LP em Astro baseada no brandbook da VerticoSys, com estrutura e linguagem de UI da Linear adaptadas para tema claro.

## Rodar

```bash
cd lp
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist
```

## Design system

- **Cores da marca:** roxo `#706cb0` (accent único), branco, preto `#1d1d1d`
- **Tipografia:** Tosh A (títulos) · Neulis Sans (corpo) — em `public/fonts`
- **Base Linear:** max-width 1200px, seções de 96px, raios 12/6/9999px, bordas hairline no lugar de sombras, pesos tipográficos contidos
- Tokens em `src/styles/global.css`

## Estrutura

```
src/
  layouts/Layout.astro        # head, SEO, animação de entrada
  pages/index.astro
  components/
    Nav.astro                 # sticky, blur, CTA pill escuro
    Hero.astro                # headline do brandbook + mockup
    DashboardMockup.astro     # dashboard financeiro simulado (HTML/CSS)
    LogoStrip.astro           # prova social
    Features.astro            # controle · automação · inteligência
    Governance.astro          # compliance + foto da marca
    Results.astro             # métricas + depoimento
    CTA.astro                 # bloco escuro com captura de e-mail
    Footer.astro
```

Copy em PT-BR seguindo o tom de voz do brandbook: claro sem ser simplista, confiante sem promessas absolutas, foco B2B.
