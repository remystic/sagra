# Mappa della Sagra — pronta per GitHub Pages

Questa cartella contiene già il sito compilato. Non bisogna caricare `node_modules`,
le schermate di prova, gli allegati o il vecchio archivio ZIP.

## Pubblicazione su GitHub

1. Estrai l'archivio ZIP sul computer.
2. Nel repository GitHub scegli **Add file → Upload files**.
3. Trascina **il contenuto di questa cartella**, non il file ZIP.
4. Conferma con **Commit changes**.
5. Apri **Settings → Pages**.
6. In **Build and deployment**, scegli **Deploy from a branch**.
7. Seleziona la branch **main**, la cartella **/(root)** e premi **Save**.
8. Quando appare **Visit site**, copia l'indirizzo pubblico della mappa.

Il pacchetto contiene meno di 100 file e ogni file è sotto il limite di GitHub.

## Inserimento nel sito principale

Sostituisci `URL-DELLA-MAPPA-GITHUB` con l'indirizzo ottenuto da GitHub Pages e
incolla questo codice nella pagina del sito:

```html
<section class="sezione-mappa-sagra" aria-labelledby="titolo-mappa-sagra">
  <h2 id="titolo-mappa-sagra">Mappa dei servizi della Sagra</h2>
  <iframe
    class="mappa-sagra"
    src="URL-DELLA-MAPPA-GITHUB"
    title="Mappa interattiva della Sagra della Pesca IGP di Leonforte"
    loading="eager"
    allow="geolocation; fullscreen"
  ></iframe>
</section>

<style>
  .sezione-mappa-sagra {
    width: 100%;
  }

  .mappa-sagra {
    display: block;
    width: 100%;
    height: min(860px, 88dvh);
    min-height: 680px;
    border: 0;
    border-radius: 18px;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    .mappa-sagra {
      height: calc(100dvh - 72px);
      min-height: 620px;
      border-radius: 0;
    }
  }
</style>
```

Il sito principale e la pagina GitHub devono usare HTTPS per consentire la
localizzazione. L'attributo `allow="geolocation"` dell'iframe è già incluso.

## Funzioni comprese

- layout ottimizzato per smartphone, tablet e desktop;
- 24 punti sulla mappa e 10 filtri;
- elenco dei servizi e schede dettagliate;
- apertura del punto e navigazione a piedi con Google Maps;
- localizzazione dell'utente con messaggi di errore comprensibili;
- stemma del Comune di Leonforte e loghi dell'evento;
- modalità tecnica tramite `?admin=1` per leggere e copiare le coordinate.
