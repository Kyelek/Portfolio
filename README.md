# Portfolio · Francisco Eugenio Ibeas Aniceto

Portfolio y CV de desarrollador Full Stack. Proyectos con caso de estudio, experiencia y un CV imprimible generado a partir de los mismos datos.

**Web:** https://francisco-dev.vercel.app

## Stack

- Angular 22: componentes standalone, sin Zone.js, Signals y control flow (`@if`, `@for`)
- TypeScript estricto y SCSS con design tokens (modo claro y oscuro)
- Rutas con carga diferida y títulos por página
- Desplegado en Vercel

## Estructura

```
src/app/
├── core/          # modelos, datos (portfolio.data.ts) y servicios
├── layout/        # header y footer
├── shared/        # componentes y directivas reutilizables
└── features/      # home, caso de estudio (/proyectos/:slug), CV (/cv) y 404
```

Todo el contenido de la web y del CV sale de `src/app/core/data/portfolio.data.ts`.

## Desarrollo

```bash
npm install
npm start        # http://localhost:4200
npm run build    # salida en dist/portfolio/browser
```
