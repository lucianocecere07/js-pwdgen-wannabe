let nome = prompt("Inserisci nome");
let cognome = prompt("Inserisci cognome");
let colore = prompt("Inserisci colore preferito");
let numero1 = prompt("Inserisci primo numero");
let numero2 = prompt("Inserisci secondo numero");

/* console.log(nome + cognome + colore + "21"); */

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
divisione = numero1 / numero2;

console.log(nome + cognome + colore + divisione);

document.getElementById("tuonome").innerHTML = nome;
document.getElementById("tuocognome").innerHTML = cognome;
document.getElementById("tuocolore").innerHTML = colore;
document.getElementById("tuapassword").innerHTML = nome + cognome + colore + divisione;
document.getElementById("utente").innerHTML = nome + " " + cognome;