/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

const parola = "parola";

function isPalindrom(parola) {
  const splitParolaArray = parola.split("");
  console.log(splitParolaArray);
}

const splitParolaArray = parola.toLowerCase().split("");
console.log(splitParolaArray);
const reverseParolaArray = splitParolaArray.reverse();
console.log(reverseParolaArray);

const revParola = reverseParolaArray.join("");
console.log(revParola);
