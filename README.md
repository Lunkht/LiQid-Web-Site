# LiQid Web Site

Site vitrine de l'application Liqid — banque mobile africaine.

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build statique

```bash
npm run build
```

Le site est exporté statiquement dans le dossier `out/` et déployé automatiquement sur **GitHub Pages** via `.github/workflows/deploy.yml` à chaque push sur `main`.

## Pages

- `/` — Accueil (Hero, Features, Plans, Download, Footer)
- `/login` — Connexion  
- `/dashboard` — Dashboard simulé
- `/privacy` — Politique de confidentialité
- `/terms` — Conditions d'utilisation

## Technos

- [Next.js](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
