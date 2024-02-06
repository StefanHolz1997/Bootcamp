// # Number Methoden
console.log("%c=== Number Methoden ===", "background: red; color: white");

// * toFixed()
//
const num1 = 14.239489574;
console.log(typeof num1.toFixed());
console.log(num1.toFixed());

// Als Argument können wir eine nummer mitgeben wo sie in diesem Fall zwei stellen nach dem . rundet
console.log(num1.toFixed(2));

// So können wir to fixed benutzen und es direkt in ienen Number umwandeln
console.log(Number(num1.toFixed(2)));

// Klammern müssen wir manuel setzten. So kommen die Klammern in zeile 14 zustande
// console.log();
// Number()
// toFixed()

// * Number()
// Wandelt String in eine Number um

const num2 = "33.53433";
console.log(Number(num2));
console.log(typeof Number(num2));

const num3 = "Max4323783";
console.log(Number(num3)); // Nan = Not a number

// # ==== Math Object Methoden ====
console.log("%c=== Math Methoden ===", "background: red; color: white");

// so sehen wir alle methoden von Math
console.log(typeof Math);
console.log(Math);

// * Math.round()
// die Math.round Methode rundet toFixed auf oder ab

const num4 = 14.992834723;
console.log(Math.round(num4));

// Math.round vs toFixed()
// Math.round rundet immer zum ganzen ab oder auf
// toFixed kann ich die zahlen nach dem . angeben

// * Math.ceil
// Rundet immer auf
const num5 = 14.000000001;
console.log(Math.ceil(num5));

// *Math.floor
// Rundet immer ab
const num6 = 14.99999999;
console.log(Math.floor(num6));

// * Math.random
// Gibt uns eine Random zahl aus

console.log(Math.random());

// So bekommen wir eine Zahl von 0 - 3 raus
console.log(Math.round(Math.random() * 3));

// So bekommen wir eine Zahl von 1 - 3 raus
console.log(Math.ceil(Math.random() * 3));

// So bekommen wir eine Zahl von 11-20
console.log(Math.ceil(Math.random() * 10 + 10));
