
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
    utenterisultato.innerHTML = `<img class="img-fluid" src="img/${utente}.png" alt="E'uscito-${utente}"<img>`

    const intelligenzaArtificiale = Math.round(Math.random() * 5 + 1);
    risultatopc.innerHTML = `<img class="img-fluid" src="img/${intelligenzaArtificiale}.png" alt="E'uscito-${intelligenzaArtificiale}"<img>`

    console.log(utente, intelligenzaArtificiale)

    let risultato = ''



    // CALCOLO I RISULTATI
    if (utente > intelligenzaArtificiale) {
        risultato = "Complimenti hai vinto"
    }
    else if (utente < intelligenzaArtificiale) {
        risultato = "Mi dispiace hai perso";
    } else {
        alert("TEMPI SUPPLEMENTARI, Ritira i dadi")
    }
    // genera.innerText = risultato
    console.log(risultato)

    risultafinale.innerText = risultato
    console.log

})
