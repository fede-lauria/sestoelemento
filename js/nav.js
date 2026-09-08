/* Navigazione mobile: apre e chiude il pannello sotto l'header.
   Nessuna dipendenza. Sotto gli 860px il CSS mostra il pulsante hamburger;
   sopra, il pannello è sempre visibile e questo file non fa nulla di visibile. */

(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (!toggle || !links) return;

  function chiudi() {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Apri il menu di navigazione");
  }

  function apri() {
    links.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Chiudi il menu di navigazione");
  }

  toggle.addEventListener("click", function () {
    if (links.classList.contains("is-open")) chiudi();
    else apri();
  });

  // Toccando una voce il pannello si chiude: sulle ancore (#locale) la pagina
  // scorre e un menu rimasto aperto coprirebbe proprio la sezione richiesta.
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) chiudi();
  });

  // Esc chiude e riporta il focus sul pulsante.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("is-open")) {
      chiudi();
      toggle.focus();
    }
  });

  // Tornando a desktop il pannello va resettato, altrimenti resta la classe
  // is-open e il menu riappare come lista verticale al prossimo restringimento.
  window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
    if (e.matches) chiudi();
  });
})();
