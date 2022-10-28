/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let scelta;
do{
    scelta = prompt('Scegliere fra Pari o Dispari')
} while (scelta !== 'pari' && scelta !== 'dispari' && scelta !== 'NaN');

console.log(scelta);

let numeroUtente;
do{
    numeroUtente = parseInt(prompt('Sclegliere un numero da 1 a 5'))
}while ((numeroUtente < 1) || (numeroUtente > 5));

console.log(numeroUtente);

let numeroPc = getRandomNumber(1, 5); 
console.log(numeroPc);

let sommaNumeri = somma(numeroUtente, numeroPc);
console.log(sommaNumeri);

let pariDispari = divisibilita(sommaNumeri);
console.log(pariDispari);

if(pariDispari == scelta){
    console.log('hai visto');
}else{
    console.log('hai perso');
}


function somma(num1,num2) {
    return num1+num2
};

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

function divisibilita(num) {
if (num % 2) {
    return('dispari');
} else {
    return('pari');
}

};