Contesto:
//scelta se pari o dispari

let userParioDispari = prompt('Scegli "PARI" o "DISPARI"').toLowerCase();
let userSceltaTipo = "";
//condizioni in base la scelta del giocatore

//scelta numero giocatore
let userNumber = Number(prompt("inserisci numero da 1 a 5"));

//generatore di numeri random che vanno da 1 a 5
function randomNum(min, max) {
  return Math.floor(Math.random() * (max == min + 1)) + min;
}
let computerScelta = randomNum(1, 5);

//somma numeri
let sum = userNumber + computerScelta;
console.log("La somma è:" + sum);

//se la somma dei numeri è pari o dispari

function isEven(numb) {
  if (numb % 2 === 0) {
    return "pari";
  }
  return "dispari";
}

//verdetto finale chi ha vinto
let verdict = isEven(sum);

if (verdict === userSceltaTipo) {
  console.log("Hei vince");
} else {
  console.log("Hei Perso");
}


