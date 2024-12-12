// Gestione dello slider di immagini 
let sliderContainer = document.querySelector(".mainSliderContainer");

function slider() {
    let imgVisibile = document.querySelector(".visibile");
    imgVisibile.classList.remove("visibile");

    let imgProssima = document.querySelector(".prossima");
    imgProssima.classList.add("visibile");
    imgProssima.classList.remove("prossima");

    let imgSuccessiva = document.querySelector(".visibile").nextElementSibling;
    if (imgSuccessiva != null) {
        imgSuccessiva.classList.add("prossima");
    } else {
        sliderContainer.children[0].classList.add("prossima");
    }
}

sliderContainer.addEventListener('click', function () {
    slider();
});



// Gestione della selezione taglia e aggiunta al carrello 
let tagliaSelezionata = "";
let nomeProdotto = document.querySelector(".infoScarpaTitolo").innerText;
let imgProdotto = document.querySelector(".mainSliderContainer img.visibile").src;
let prezzoProdotto = document.querySelector(".infoScarpa .prezzo").innerHTML;
let carrelloBox = document.querySelector(".carrello");
let btnMisure = document.querySelectorAll(".numTaglia")
let riepilogoCarrello = document.querySelector(".riepilogoCarrello");

// Selezione della taglia
btnMisure.forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".numTaglia").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        tagliaSelezionata = button.innerHTML;
    });
});

// Funzione per mostrare il box quando si clicca su "Aggiungi al carrello"
document.querySelector(".btnCarrello2").addEventListener("click", function () {
    if (tagliaSelezionata) {
        carrelloBox.querySelector(".immagineProdotto img").src = imgProdotto;
        carrelloBox.querySelector(".descrizioneProdotto p:nth-of-type(1)").innerHTML = nomeProdotto;
        carrelloBox.querySelector(".descrizioneProdotto span").innerHTML = tagliaSelezionata;
        carrelloBox.querySelector(".descrizioneProdotto .prezzo").innerHTML = prezzoProdotto;
        carrelloBox.style.display = "block";
        riepilogoCarrello.style.display = "block";

    } else {
        alert("Per favore seleziona una taglia.");
    }
});

// Funzione per chiudere il box del carrello
document.querySelector(".cancellaProdotto").addEventListener("click", function () {
    carrelloBox.style.display = "none";
});

// Funzione per aprire il carrello cliccando sull'icona della bag 
document.querySelector(".bagCarrello").addEventListener("click", function () {
    carrelloBox.style.display = "block"
})
