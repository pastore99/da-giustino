# da-giustino
# 🌿 Agriturismo Da Giustino

Sito web completo per un agriturismo fittizio situato a Radda in Chianti (SI), sviluppato come progetto dimostrativo per il portfolio freelance.

## 🔗 Demo

👉 [da-giustino.vercel.app](https://da-giustino.vercel.app)

## 📸 Schermate

> Screenshots in arrivo

## 🛠 Tecnologie utilizzate

- **React 18** — libreria UI
- **Vite** — build tool e dev server
- **React Router v6** — navigazione client-side
- **Tailwind CSS v3** — styling utility-first
- **Framer Motion** — animazioni e transizioni

## 📄 Pagine

- **Home** — hero fullscreen, presentazione, anteprima camere, sezione ristorante e recensioni
- **Camere** — dettaglio delle 4 camere disponibili con servizi, prezzi e sezione "nei dintorni"
- **Ristorante** — menu completo diviso per categoria con orari
- **Prenota** — form prenotazione con due tab (stanza / cena), validazione e conferma mock
- **Contatti** — info, orari, form contatti e mappa OpenStreetMap

## ✨ Funzionalità

- Design responsive mobile-first
- Navbar con menu hamburger su mobile
- Animazioni scroll con Framer Motion
- Form di prenotazione con validazione e riepilogo
- Navigazione tra pagine con React Router
- Dati mockati in file dedicato `src/data/data.js`

## 🚀 Avvio in locale

```bash
# Clona il repository
git clone https://github.com/pastore99/da-giustino.git

# Entra nella cartella
cd da-giustino

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```
## 📁 Struttura del progetto

    src/
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Camere.jsx
    │   ├── Ristorante.jsx
    │   ├── Prenota.jsx
    │   └── Contatti.jsx
    ├── data/
    │   └── data.js
    └── main.jsx

## 👨‍💻 Autore

**Carmine Pastore** — [github.com/pastore99](https://github.com/pastore99)

---

> Progetto dimostrativo sviluppato per il portfolio freelance. Tutti i dati (nome, indirizzo, contatti) sono fittizi.