// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const giveMeRandom = function (n = 10) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
};

const casualArray = giveMeRandom();

const checkArray = function (array) {
  let susumGt5 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      console.log(array[i], " è minore di 5");
    } else {
      console.log(array[i], " è maggiore di 5");
      susumGt5 += array[i];
    }
  }
  return susumGt5;
};
console.log(casualArray);

console.log("       ", checkArray(casualArray));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 170,
    name: "videocamera di sicurezza",
    id: "informatica",
    quantity: 5
  },
  {
    price: 13,
    name: "veicolo di salvataggio",
    id: "giochi bimbi",
    quantity: 50
  },
  {
    price: 12,
    name: "cosucino per collo",
    id: "casa",
    quantity: 26
  },
  {
    price: 16,
    name: "kit pulizia scarpe",
    id: "casa",
    quantity: 100
  },
  {
    price: 104,
    name: "ssd esterna 1TB",
    id: "informatica",
    quantity: 4
  },
  {
    price: 5,
    name: "pasta termica",
    id: "informatica",
    quantity: 150
  }
];

const shoppingCartTotal = function () {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
};

console.log("extra 2", shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const newItem = {
  price: 23,
  name: "set di bicchieri",
  id: "casa",
  quantity: 223
};

const addToShoppingCart = function (list, obj) {
  list.push(obj);
  console.log(list, list.length);
};

addToShoppingCart(shoppingCart, newItem);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function (array, property) {
  let max = 0;
  let name = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i][property] > max) {
      max = array[i][property];
      name = array[i].name;
    }
  }
  console.log("il prodotto più costoso è", '"' + name + '"', "con il prezzo di", max);
};

maxShoppingCart(shoppingCart, "price");

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function (arr) {
  const lastElement = arr[arr.length - 1];
  return lastElement;
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (x = 5) {
  if (x < 0 || x > 9) {
    console.log("Il valore deve essere compreso tra 0 e 9");
  } else {
    let consecutiveCount = 0;
    while (consecutiveCount < 3) {
      const randomNum = Math.floor(Math.random() * 10);
      console.log(randomNum);

      if (randomNum > x) {
        consecutiveCount++;
        console.log("   ", consecutiveCount, "volta");
      } else {
        consecutiveCount = 0;
      }
    }
  }
};

loopUntil(2);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myArray = ["world", 10, "learn", "epicode", 7, "JavaScript", 74, true, "code", 16, 98, "hello", 42, "extra", 3, 55, 25, 6, 5, false];
const average = function (arr) {
  let sum = 0;
  let nmbrCounter = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "number") {
      sum += myArray[i];
      nmbrCounter++;
    }
  }
  return sum / nmbrCounter;
};
// average(myArray);
console.log("la media è", average(myArray));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringArray = ["a", "hello", "JavaScript", "world", "epicode", "learn", "programming nel chill fantastico", "xtra", "code", "marco cipolletta"];
const longest = function (arr) {
  let longestStr = "";
  let indexLongestStr = 0;
  let lengthArr = 0;
  for (let i = 0; i < stringArray.length; i++) {
    if (arr[i].length > lengthArr) {
      longestStr = arr[i];
      indexLongestStr = i;
      lengthArr = arr[i].length;
    }
  }
  const result = longestStr + " in posizione " + indexLongestStr;
  return result;
};

console.log(longest(stringArray));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
  if (emailContent.search(/spam/i) !== -1 || emailContent.search(/scam/i) !== -1) {
    return false;
  } else {
    return true;
  }
};

let email = "questa non è spam";

console.log(antiSpam(email));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
  let matrix = [];

  for (let i = 0; i < y; i++) {
    let row = [];
    for (let j = 0; j < x; j++) {
      row.push(`${i}${j}`);
    }
    matrix.push(row);
  }

  return matrix;
}

console.log(matrixGenerator(3, 4));
