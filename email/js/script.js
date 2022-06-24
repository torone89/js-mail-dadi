
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

const email = ["francescotovani@hotmail.it", "fabrimastro@gmail.com", "enricocampani@gmail.com", "marco lenci@gmail.com"]
console.log(email)

const nome = prompt("Inserisci un email,grz");
console.log(nome)



// seleziono tutti gli elementi contenuti in email"

let accessibilita = "MI dispiace questa email non valida"


for (let i = 0; i < email.length; i++) {
    if (nome == email[i]) {
        accessibilita = "Benvenuto nella tua email, accesso consentito"
    }

}

console.log(accessibilita)
// 


