/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};

console.log("area", area(5, 7) + "cm²");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    console.log("crazySum numeri diversi");
    return num1 + num2;
  } else {
    console.log("crazySum numeri uguali");
    return (num1 + num2) * 3;
  }
};
const rndmNmbr1 = Math.ceil(Math.random() * 5);
const rndmNmbr2 = Math.ceil(Math.random() * 5);

console.log("     crazySum num1", rndmNmbr1, "num2", rndmNmbr2, "total", crazySum(rndmNmbr1, rndmNmbr2));

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  if (num1 <= 19) {
    console.log("crazyDiff numero <= 19");
    return Math.abs(num1 - 19);
  } else {
    console.log("crazyDiff numero > 19");
    return Math.abs(num1 - 19) * 3;
  }
};

const rndmNmbr3 = Math.floor(Math.random() * 100);

console.log("     crazyDiff num1", rndmNmbr3, "total", crazyDiff(rndmNmbr3));

/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
const rndmNmbr4 = Math.floor(Math.random() * 1000);

console.log("buondary con n=", rndmNmbr4, "allora", boundary(rndmNmbr4));

/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const frasi = ["EPICODE è una bella scuola", "ha la sede a Roma"];
const rndmNmbr5 = Math.floor(Math.random() * frasi.length);
const fraseRndm = frasi[rndmNmbr5];
console.log(fraseRndm);
const epify = function (stringa) {
  if (stringa.search("EPICODE") === 0) {
    return stringa;
  } else {
    const newfrase = "EPICODE " + stringa;
    return newfrase;
  }
};

console.log("     ", epify(fraseRndm));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n % 3 === 0) {
    console.log("il numero", n, "è multiplo di 3");
  } else if (n % 7 === 0) {
    console.log("il numero", n, "è multiplo di 7");
  } else {
    console.log("il numero", n, "non è ne multiplo di 3 ne di 7");
  }
};

check3and7(rndmNmbr4);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
  console.log("prima è", string);
  const newstring = string.split("").reverse().join("");
  console.log("     dopo è", newstring);
};

reverseString("EPICODE" /*scrivi quello che vuoi */);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string) {
  console.log("prima è", string);
  let word = string.trim().split(" ");
  string = "";
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1, word[word.length]);
    if (i === word.length - 1) {
      string += word[i];
    } else string += word[i] + " ";
  }
  return string;
};

console.log("     ", upperFirst("tutte le parole hanno la iniziale maiuscola"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  console.log("prima è: ", string);

  let newstring = string.slice(1, string.length - 1);
  return newstring;
};
console.log("     poi è:", cutString("123456789"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
