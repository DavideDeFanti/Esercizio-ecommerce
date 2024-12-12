// Variabili globali
let elimina = document.querySelectorAll(".elimina");
let quantita = document.querySelectorAll(".quantita");
let spanImponibile = document.querySelector('.imponibile');
let spanTotale = document.querySelector('.totale');
let prezzoUnitario = document.querySelector(".spanPrezzo")

// Funzione per calcolare il totale
function calcolaTotale() {
    let imponibile = 0;
    let totale = 0;
    let shoesCards = document.querySelectorAll('.shoesCard');

    shoesCards.forEach(function (shoesCard) {
        let prezzoNumerico = parseInt(prezzoUnitario.innerHTML.replace('€', ''));
        let quantitaSelezionata = parseInt(shoesCard.querySelector('.quantita').value);
        let iva = 1.22

        imponibile += (prezzoNumerico * quantitaSelezionata);
        totale += (prezzoNumerico * quantitaSelezionata * iva);
    });

    //Metodo .toFixed per aggiungere 2 numeri dopo la virgola arrotondando
    spanImponibile.innerHTML = imponibile.toFixed(2) + '€';
    spanTotale.innerHTML = totale.toFixed(2) + '€';
}

// Gestione eliminazione prodotti
elimina.forEach(function (cestino) {
    cestino.addEventListener('click', function () {
        // metodo .closest per risalire il DOM e trovare il più vicino antenato con classe shoesCard 
        // this in questo caso è l'icona del cestino 
        let cardScarpa = this.closest('.shoesCard');
        cardScarpa.remove();
        calcolaTotale();
    });
});

// Gestionse cambio quantità
quantita.forEach(function (quanitaSelezionata) {
    quanitaSelezionata.addEventListener('change', function () {
        calcolaTotale();  // Aggiorna il totale quando cambia la quantità
    });
});

// Calcolo iniziale del totale
calcolaTotale();

