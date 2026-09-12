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
- 53 servizi complessivi, tutti con segnaposto, e 10 filtri;
- un’unica area parcheggio ufficiale per auto, bus e camper presso lo Stadio Comunale, tra Via Don Bosco e Via dei Cento Comuni d’Italia;
- 36 punti ristoro, ricerca per nome/via/telefono e 31 numeri chiamabili;
- elenco dei servizi e schede dettagliate con note sulle posizioni indicative;
- apertura del punto e indicazioni con Google Maps (per i ristori si cerca nome e indirizzo senza imporre il percorso a piedi);
- localizzazione dell'utente con messaggi di errore comprensibili;
- stemma del Comune di Leonforte e loghi dell'evento;
- modalità tecnica tramite `?admin=1` per leggere e copiare le coordinate.

## Posizioni dei ristori

Tutti i 36 ristori sono nell’elenco Food & Drink e hanno un segnaposto sulla mappa.
Le coordinate sono state verificate su Google Maps tramite nome, telefono o civico.
Le schede indicano quando il riferimento riguarda una piazza, un’area diffusa oppure
quando la scheda Maps corrente riporta una via o un civico diverso dall’elenco ufficiale.
Il solo punto F16, Tavola Calda Cangeri Vito, è stimato sul lato pari tra i civici
382 e 386 perché Maps non espone direttamente il 384. Non sono stati aggiunti orari
o numeri di telefono non forniti.

La precedente coppia di voci generiche Food & Drink è stata sostituita dall’unica
AREA FOOD SAGRA, che descrive il tratto da Piazza Branciforti a Piazza Margherita.

Fonti principali: [elenco ufficiale della Sagra](https://www.sagradellepesche.it/programma/informazioni-utili/)
e [Google Maps](https://www.google.com/maps). Riscontro del civico di Cangeri Vito:
[MySisal, Corso Umberto 384](https://negozi.sisal.com/my-sisal/leonforte-corso-umberto-384-caffetteria-gelateria-di-cangeri-vito).
