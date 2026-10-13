# Saral Softworks Website

Company website for Saral Softworks, including the MyBaari product page and policy pages.

Built with React + Vite + React Router.

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Structure

- `src/content.js` — all site copy, company details and legal entity info. Set `mybaari.playStoreUrl` once the app is live on Google Play
- `src/legal/docs.js` — policy documents (company + MyBaari)
- `src/pages/` — Home, MyBaari, legal pages
- `vercel.json` — SPA rewrites so routes like `/mybaari/privacy` work on refresh

## Routes

| Path | Page |
|---|---|
| `/` | Company home |
| `/mybaari` | MyBaari product page |
| `/mybaari/privacy`, `/mybaari/terms`, `/mybaari/refunds` | MyBaari policies |
| `/privacy`, `/terms` | Company website policies |
| `/legal` | All policies |
