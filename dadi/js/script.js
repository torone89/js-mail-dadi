
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// // /* LOCICA  


// 1  Genero all'utente un  numero da 1 a 6
// 2  Genero un numero casuale  da  a 1 a 6 per l'IA



const utenterisultato = document.getElementById('risultatoutente')
const risultatopc = document.getElementById('risultatopc')
const risultafinale = document.getElementById('risultafinale')





const genera = document.getElementById('lanciodadi')
console.log(genera)

genera.addEventListener('click', function () {

    const utente = Math.round(Math.random() * 5 + 1);
    utenterisultato.innerText = "Hai tirato il dado è uscito " + utente

    const intelligenzaArtificiale = Math.round(Math.random() * 5 + 1);
    risultatopc.innerText = "L'IA tirato il dado è uscito " + intelligenzaArtificiale

    console.log(utente, intelligenzaArtificiale)

    let risultato = ''



    // CALCOLO I RISULTATI
    if (utente > intelligenzaArtificiale) {
        risultato = "hai vinto"
    }
    else if (utente < intelligenzaArtificiale) {
        risultato = "hai perso";
    } else {
        risultato = alert("TEMPI SUPPLEMENTARI, Ritira i dadi")
    }
    // genera.innerText = risultato
    console.log(risultato)

    risultafinale.innerText = risultato
    console.log

})
