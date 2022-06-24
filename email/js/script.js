
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

const email = ["francescotovani@hotmail.it", "fabrimastro@gmail.com", "enricocampani@gmail.com", "marco-lenci@gmail.com"]
console.log(email)

const nome = prompt("Inserisci un email,grz");
console.log(nome)

let accessibilita

// seleziono tutti gli elementi contenuti in email"

for (let i = 0; i < email.length; i++) {
    accessibilita = "Benvenuto nella tua email, accesso consentito"
    console.log(email[i])
}
// else { accessibilita = "Mi dispiace email non valida, accesso negato" }


