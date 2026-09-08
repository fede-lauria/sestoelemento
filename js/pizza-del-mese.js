/* Pizza del mese — porting della logica `DCLogic` del design.
   Nel canvas era una classe con renderVals(); qui è JS vanilla che riempie
   gli elementi con attributo data-pdm dentro #pizza-del-mese. */

(function () {
  "use strict";

  var MESI = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  /* Tre proposte per ogni mese, nell'ordine del design.
     Indice 0 = gennaio ... indice 11 = dicembre. */
  var PROPOSTE = [
    [ // Gennaio
      ["Bufala e limone", "Fiordilatte, bufala campana, scorza di limone, basilico", "12,00"],
      ["Cavolo nero", "Cavolo nero ripassato, pancetta croccante, pecorino", "11,50"],
      ["Marinara del mese", "Pomodoro, aglio, origano, alici del Cantabrico", "9,50"]
    ],
    [ // Febbraio
      ["Broccoli e salsiccia", "Broccoli, salsiccia di maiale, provola affumicata", "11,50"],
      ["Quattro pepi", "Fiordilatte, pepe nero, cacio, guanciale", "12,00"],
      ["Radicchio e noci", "Radicchio tardivo, noci, gorgonzola dolce", "11,00"]
    ],
    [ // Marzo
      ["Carciofi romani", "Carciofi, mentuccia, fiordilatte, pecorino", "11,00"],
      ["Asparagi e uovo", "Asparagi verdi, uovo, parmigiano", "11,50"],
      ["Primavera", "Fiori di zucca, alici, fiordilatte", "12,00"]
    ],
    [ // Aprile
      ["Fave e pecorino", "Crema di fave, pecorino romano, pepe", "11,00"],
      ["Pomodorino giallo", "Pomodorino giallo del Vesuvio, bufala, basilico", "12,00"],
      ["Zucchine e menta", "Zucchine, menta, ricotta di pecora", "10,50"]
    ],
    [ // Maggio
      ["Bufala e datterino", "Datterino confit, bufala, basilico", "12,00"],
      ["Norma", "Melanzane fritte, ricotta salata, pomodoro", "11,00"],
      ["Alici e capperi", "Alici, capperi di Pantelleria, origano", "11,50"]
    ],
    [ // Giugno
      ["Estiva", "Pomodoro fresco, stracciatella, olive taggiasche", "12,00"],
      ["Peperoni arrosto", "Peperoni arrosto, capocollo, provola", "11,50"],
      ["Caprese", "Pomodoro cuore di bue, bufala, basilico a crudo", "11,50"]
    ],
    [ // Luglio
      ["Fichi e crudo", "Fichi, prosciutto crudo, fiordilatte", "12,50"],
      ["Melanzane e menta", "Melanzane grigliate, menta, scamorza", "10,50"],
      ["Bianca del mare", "Gamberi, zucchine, limone", "13,00"]
    ],
    [ // Agosto
      ["Pomodoro e stracciatella", "Pomodoro giallo, stracciatella, basilico", "11,50"],
      ["Salsiccia e friarielli del mese", "Salsiccia, friarielli, provola", "11,50"],
      ["Tonno e cipolla", "Tonno, cipolla di Tropea, olive", "11,00"]
    ],
    [ // Settembre
      ["Zucca e speck", "Crema di zucca, speck, scaglie di grana", "11,50"],
      ["Funghi porcini", "Porcini, fiordilatte, prezzemolo", "12,50"],
      ["Uva e lardo", "Uva fragola, lardo di Colonnata, pepe", "12,00"]
    ],
    [ // Ottobre
      ["Porcini e tartufo", "Porcini, crema al tartufo, fiordilatte", "13,50"],
      ["Castagne e salsiccia", "Castagne, salsiccia, provola affumicata", "12,00"],
      ["Zucca e gorgonzola", "Zucca arrostita, gorgonzola, noci", "11,50"]
    ],
    [ // Novembre
      ["Cardoncelli", "Funghi cardoncelli, salsiccia, pecorino", "12,00"],
      ["Cime di rapa", "Cime di rapa, alici, aglio, peperoncino", "11,00"],
      ["Tartufo nero", "Fiordilatte, tartufo nero, uovo", "13,50"]
    ],
    [ // Dicembre
      ["Baccalà e cicoria", "Baccalà mantecato, cicoria, pomodorino", "13,00"],
      ["Festiva", "Mortadella, stracciatella, pistacchi", "12,00"],
      ["Carciofi e guanciale", "Carciofi, guanciale, pecorino", "11,50"]
    ]
  ];

  /**
   * Sceglie quale delle tre proposte del mese mostrare in vetrina.
   *
   * Comportamento attuale (identico al design): sempre la prima.
   * Le altre due restano nei dati, pronte all'uso.
   *
   * @param {Array<Array<string>>} proposteDelMese - le tre proposte [nome, descrizione, prezzo]
   * @param {Date} oggi - la data corrente
   * @returns {Array<string>} la proposta scelta
   */
  function selezionaPizzaDelMese(proposteDelMese, oggi) {
    return proposteDelMese[0];
  }

  function scrivi(radice, chiave, testo) {
    var el = radice.querySelector('[data-pdm="' + chiave + '"]');
    if (el) el.textContent = testo;
  }

  var box = document.getElementById("pizza-del-mese");
  if (!box) return;

  var oggi = new Date();
  var mese = oggi.getMonth();
  var scelta = selezionaPizzaDelMese(PROPOSTE[mese], oggi);

  scrivi(box, "mese", MESI[mese]);
  scrivi(box, "nome", scelta[0]);
  scrivi(box, "desc", scelta[1]);
  scrivi(box, "prezzo", scelta[2]);
})();
