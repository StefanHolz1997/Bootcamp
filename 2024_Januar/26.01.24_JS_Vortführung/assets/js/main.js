// Checken ob JS richtig eingebunden ist
console.log(2);

// - Wie kann ich eine h1 mit dem Text Hallo Leute einfügen
// document.write("<h1> Hallo Leute </h1>");

// - Welche Datentypen sind das
let datenType = "10"; //String
datenType = 10; //Number
datenType = "text"; //String
datenType = true; //Boolean
datenType = 3906723468; //Number

// - Wo ist der Unterschied von let und const
// let - Wir können were der Variable überschreiben / verändern
// const - Wert kann nicht überschrieben / verändert werden

// - Wie schreibe ich meine Variable?
// camelCase
// nicht zu lange / kurz
// gerne englisch
// Sinnvoll gestalten
// keine zahlen am Anfang

// - Wie kann ich ein String zusammenfügen das dieser Satz entsteht "Hallo Leute ich bin Marzio und bin 30 Jahre alt"

const firstName = "Marzio";
let age = 30;

console.log(
  "Hallo Leute ich bin " + firstName + " und bin " + age + " Jahre alt."
);

// Aritmische Operationen

let a = 10;
let b = 20;
let c = 3;

// - addieren von a und b
console.log(a + b);

// - subtrahieren von b von a
console.log(a - b);

// - dividieren a durch b
console.log(a / b);

// - multiplizieren b * c
console.log(b * c);

// - Ckecken ob ein Restwert bleibt wenn ich a durch b teile
console.log(a % b);

// - Den Wert b um eins erhöhen
b++;
console.log(b);

// - Den Wert a um eins verringern
a--;
console.log(a);

// # ==== Neues Thema ====

// ! === Comparison ===

// ? = Nutzen wir als zuweisung
// ? == vergleicht nur den Wert
// ? === vergleicht den Wert und den Datentyp

console.log(3 == 3); // true
console.log(3 == "3"); //true
console.log(3 === "3"); //false
console.log(3 == 5); //false
console.log(3 == "three"); //false

// ? != nicht gleicher Wert
// ? !== nicht gleicher Wert und Datentyp

console.log(3 != 3); //false
console.log(3 !== 3); //false
console.log(4 != 3); //true

// ? > größer als
// ? < kleiner als
// ? >= größer gleich
// ? <= kleiner gleich

console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false
console.log(4 >= 4); //true
console.log(1 >= 2); //false

console.log("B" > "A"); //true
console.log("B" > "a"); //false

// ! ==== Elemente selektieren ====

// - getElementById()
// Damit sprechen wir Elemente über die ID an
// id aus dem HTML: main-headline

const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline);

// So kann ich auf die einzelnen Werte zugreifen
console.log(mainHeadline.innerText);

// So hole ihc mir andere eigenschaften
console.log(mainHeadline.clientWidth);
console.log(mainHeadline.baseURI);

// - querySelector()
// Damit können wir alles ansprechen: ID's (#)/ Klassen (.) oder einfache Elemente (h2)

const secondaryHeadline = document.querySelector("#secondary-headline");
const secondaryHeadline2 = document.querySelector(".test");
const secondaryHeadline3 = document.querySelector("h2");

console.log(secondaryHeadline);
console.log(secondaryHeadline2);
console.log(secondaryHeadline3);

// - .innerHTML
// Wir können innerHTML auch verwenden um den inhalt zu überschreiben
mainHeadline.innerHTML = "Zack - einfach so über JS geändert";

// mit = überschreiben wir den wert
// mit += fügen wir was zum alten text hinzu
secondaryHeadline.innerHTML = "Super";
secondaryHeadline.innerHTML += "Code";

// in Elemente schreiben
const divContainer = document.querySelector(".div-container");
divContainer.innerHTML = "<h2> Hallo ich komme über JS </h2>";

// const j2 = document.querySelector("h2");
// console.log(h2);

// * Unterschied document.write() vs .innerHTML
// mit document.write() schreibe ich es immer ans ende
// mit .innerHTML können wir gezielt Elemente ansprechen und deren inhalt verändern / überschreiben / hinzufügen
// - .style
// mit .style können wir das ELement stylen
mainHeadline.style.color = "red";

// So ändere ich die Hintergund Farbe
mainHeadline.style.backgroundColor = "blue";
mainHeadline.style.fontSize = "30px";

// Div box stylen
divContainer.style.backgroundColor = "red";

// ! ==== Funktionen ====

// *deklarieren
// Wir erstellen eine Funktion und beschreiben was die Funktion machen soll
// mit dem Keyword "function" sagen wir JS, dass jetzt eine funktion kommt
// "sayHi" (camelCase) ist der Name der Funktion. Der Name ist frei definier bar, sollte aber Sinn ergeben
// {} muss immer d asein

function sayHi() {
  console.log("Hallo Lisa, schön das du da bist :)");
}

// * Aufruf
// Wir müssen eine Funktion aufrufen, damit sie ausgeführt wird
// später können wir Funktionen ausführen lassen, wenn wir z.b. auf einen button klicken...
sayHi();

// ! ==== Funktion mit Parameter ====
// mit einem Parameter können wir unsere Funktion wiederverwendbarer machen

// Deklaration
// in den Klammern schreiben wir die Parameter und reichen sie an die Funktion weiter
// "kursteilnehmer" ist so zusagen unser platzhalter

function sagHallo(kursteilnehmer) {
  console.log("Hallo" + kursteilnehmer);
}

sagHallo("Thomas");
sagHallo("Adrian");
sagHallo("Theo");

// - Mehrere Parameter
function addMe(num1, num2) {
  console.log(num1 + num2);
}

addMe(20, 30);
addMe("Susi", " Sabine");
addMe(902834750982345, 10872345089234);

// - Funktion ins HTML schreiben lassen
// Version 1
function multplyMe(num1, num2, num3) {
  console.log(num1, num2, num3);
  let ergebnis = num1 * num2 * num3;
  console.log(ergebnis);

  divContainer.innerHTML += "<p>" + ergebnis + "</p>";
}
multplyMe(2, 5, 8);
multplyMe(542, 554, 18);

// Version 2
function multplyMe(num1, num2, num3) {
  console.log(num1, num2, num3);
  let ergebnis = num1 * num2 * num3;
  console.log(ergebnis);

  divContainer.innerHTML += "<p>" + ergebnis + "</p>";
}
multplyMe(76, 32, 98);
