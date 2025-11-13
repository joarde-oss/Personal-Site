# Portfolio Blockchain Developer

Sito personale statico dedicato ai progetti e alla presentazione professionale come blockchain developer.

## Contenuti principali
- **Home**: hero con highlights e panoramica profilo/competenze/metodo.
- **Progetti**: sezione placeholder per lavori in corso.
- **Contattami**: canali diretti, disponibilità e form di contatto.
- **CV**: esperienze, competenze e stack organizzati in card.

## Struttura del progetto
```
.
├── assets/
│   ├── css/
│   │   ├── style.css        # foglio di stile compilato
│   │   ├── style.css.map    # sourcemap (opzionale in produzione)
│   │   └── style.scss       # sorgente SCSS
│   └── img/
│       ├── favicon.png / .svg
│       └── og-image.png     # anteprima per social
├── index.html               # homepage
├── projects.html
├── contattami.html
└── cv.html
```

## Come lavorare in locale
1. **Clona** o scarica il repository.
2. **Apri** `index.html` (o qualsiasi pagina) con un browser moderno. Non serve un server di sviluppo perché il sito è statico.

## Modifiche allo stile
- Il CSS utilizzato dal sito è `assets/css/style.css`.
- Il file `assets/css/style.scss` contiene la versione sorgente: per rigenerare il CSS puoi usare il comando
  ```bash
  sass assets/css/style.scss assets/css/style.css --style=compressed --source-map
  ```
  (Assicurati di avere installato `sass`/`dart-sass`).

## Ottimizzazioni SEO e social
- Ogni pagina ha `meta description` personalizzata per i motori di ricerca.
- I tag Open Graph e Twitter Card puntano all'immagine `https://joarde-oss.github.io/assets/img/og-image.png?v=20241026`.
  Se pubblichi su un dominio diverso, aggiorna l'URL nei rispettivi meta tag.

## Deploy su GitHub Pages
1. Esegui `git add .`, `git commit` e `git push` sul branch pubblicato (es. `main`).
2. GitHub Pages servirà automaticamente i file statici.
3. Dopo il deploy, usa strumenti come Facebook Sharing Debugger e Twitter Card Validator per invalidare la cache delle anteprime social.

## Manutenzione
- Mantieni aggiornati i link social nel footer (`index.html`, `projects.html`, `contattami.html`, `cv.html`).
- Per aggiungere nuovi asset (immagini, script) posizionali all'interno di `assets/` seguendo la stessa struttura.

