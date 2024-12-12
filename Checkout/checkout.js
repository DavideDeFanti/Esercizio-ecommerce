// variabili form primo step 
let form1 = document.getElementById("form1")
let nome = document.getElementById("nome")
let cognome = document.getElementById("cognome")
let indirizzo = document.getElementById("indirizzo")
let cap = document.getElementById("cap")
let citta = document.getElementById("citta")
let paese = document.getElementById("paese")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let submit1 = document.getElementById("submit1")

// bottoni di spedizione e ritiro
let spedizioneBtn = document.querySelectorAll(".spedizione");

// variabili form secondo step 
let form2 = document.getElementById("form2")
let numeroCarta = document.getElementById("numeroCarta")
let data = document.getElementById("data")
let cvv = document.getElementById("cvv")
let submit2 = document.getElementById("submit2")

// variabili regex 
let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let regexTelefono = /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/

// variabili thank you page e step form
let titolo = document.querySelector(".titolo")
let primoStep = document.querySelector(".primoStep")
let secondoStep = document.querySelector(".secondoStep")
let thankYouPage = document.querySelector(".thankYouPage")
let riepilogoCarrello = document.querySelector(".carrello")

// Funzione per controllare la validità del primo form
function validazioneForm1() {
    let validitaCampo = true; // Variabile per controllare se tutti i campi sono validi

    // Controlla che tutti i campi siano compilati
    if (nome.value.trim() == false) {
        nome.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        nome.style.border = "";
    }

    if (cognome.value.trim() == "") {
        cognome.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        cognome.style.border = "";
    }

    if (indirizzo.value.trim() == "") {
        indirizzo.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        indirizzo.style.border = "";
    }


    if (cap.value.trim() == "") {
        cap.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        cap.style.border = "";
    }

    if (citta.value.trim() == "") {
        citta.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        citta.style.border = "";
    }

    if (email.value.trim() == "") {
        email.style.border = "2px solid red";
        validitaCampo = false;
    } else if (!regexEmail.test(email.value.trim())) {
        email.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        email.style.border = "";
    }

    if (telefono.value.trim() == "") {
        telefono.style.border = "2px solid red";
        validitaCampo = false;
    } else if (!regexTelefono.test(telefono.value.trim())) {
        telefono.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        telefono.style.border = "";
    }

    // Abilita o disabilita il bottone di submit
    submit1.disabled = !validitaCampo;
}

// Aggiungi event listener ai campi del primo form
nome.addEventListener("input", validazioneForm1);
cognome.addEventListener("input", validazioneForm1);
indirizzo.addEventListener("input", validazioneForm1);
cap.addEventListener("input", validazioneForm1);
citta.addEventListener("input", validazioneForm1);
email.addEventListener("input", validazioneForm1);
telefono.addEventListener("input", validazioneForm1);

// Gestisci la selezione tra spedizione e ritiro
spedizioneBtn.forEach(button => {
    button.addEventListener("click", function () {
        // Rimuovi lo stile attivo da tutti i bottoni
        spedizioneBtn.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "";
        });
        // Aggiungi lo stile attivo al bottone cliccato
        button.classList.add("selected");
        button.style.border = "2px solid black";
    });
});

// Gestisci la submit del primo form
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    primoStep.style.display = "none";
    secondoStep.style.display = "block";
});

// Funzione per controllare la validità del secondo form
function validateForm2() {
    let validitaCampo = true; // Variabile per controllare se tutti i campi sono validi

    if (numeroCarta.value.trim() === "") {
        numeroCarta.style.border = "2px solid red";
        validitaCampo = false;
    } else if (!/^\d{16}$/.test(numeroCarta.value.trim())) { // Numero carta di 16 cifre
        numeroCarta.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        numeroCarta.style.border = "";
    }

    if (data.value.trim() === "") {
        data.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        data.style.border = ""; //
    }

    if (cvv.value.trim() === "") {
        cvv.style.border = "2px solid red";
        validitaCampo = false;
    } else if (!/^\d{3,4}$/.test(cvv.value.trim())) { // CVV di 3 o 4 cifre
        cvv.style.border = "2px solid red";
        validitaCampo = false;
    } else {
        cvv.style.border = "";
    }

    // Abilita o disabilita il bottone di submit 
    submit2.disabled = !validitaCampo;
}

// Aggiungi event listener ai campi del secondo form
numeroCarta.addEventListener("input", validateForm2);
data.addEventListener("input", validateForm2);
cvv.addEventListener("input", validateForm2);

// Inizialmente disabilita il submit del secondo form
submit2.disabled = true;

// Gestisci la submit del secondo form
form2.addEventListener("submit", function (event) {
    event.preventDefault();
    secondoStep.style.display = "none";
    riepilogoCarrello.style.display = "none";
    titolo.style.display = "none";
    thankYouPage.style.display = "block";
});
