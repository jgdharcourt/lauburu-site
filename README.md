# Lauburu — site vitrine

Site vitrine de **Lauburu**, fromage basque traditionnel vendu en direct aux
commerçants ambulants, marchés et fromagers mobiles (Zyrax SAS, Pays Basque).

Site **statique** (HTML / CSS / JS), sans build ni dépendance.
En production : [fromagerie-lauburu.com](https://fromagerie-lauburu.com)

## Pages
| Fichier | Contenu |
|---|---|
| `index.html` | Accueil — accroche, arguments, aperçu de la gamme, contact |
| `la-fromagerie.html` | Savoir-faire + carrousel des 7 étapes de fabrication |
| `les-produits.html` | Catalogue — 6 familles de fromages |
| `infos-pratiques.html` | Commande, paiement, livraison |
| `contact.html` | Coordonnées |
| `mentions-legales.html` | Mentions légales |

## Aperçu en local
Aucune installation nécessaire :
```bash
python3 -m http.server 5051 --directory .
```
→ http://localhost:5051

## Structure
```
├── *.html          # les 6 pages
├── css/v2.css      # styles (charte « fiche pro », rouge #b5363d)
├── js/v2.js        # menu mobile + carrousel
├── assets/         # logo, illustration, packshots (WebP), photos (WebP), polices Outfit
├── robots.txt
└── sitemap.xml
```

## Charte
- Fond `#f5f4f2` · accent `#b5363d` (rouge) · texte `#262019`
- Typographie **Outfit**
- Symbole : croix basque (lauburu)

## SEO
`title` / `meta description`, URL canonique, Open Graph + Twitter Card et image de
partage (`assets/og-image.jpg`) sur chaque page. Données structurées `LocalBusiness`
(JSON-LD) sur l'accueil. `sitemap.xml` + `robots.txt` fournis.

## Déploiement
Hébergement statique **Vercel**, domaine **fromagerie-lauburu.com**.
Toute modification poussée sur `main` est déployée automatiquement.

---
© Lauburu — Zyrax SAS
