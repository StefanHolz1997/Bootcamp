// ===================================
//          string aka zeichenkette
// ===================================
// 3 möglichkeiten strings in js zu deklarieren
const text1 = "Double quotes";
const text2 = "single quotes";
const text3 = `template literals`; // hier gibt ein paar coole features

// mit typeof bekomme ich den datentypen von meiner variable/konstante/function/ ...
console.log(typeof text1);

// ===================================
//                string methoden
// ===================================
// Was ist das? Wofür brauch ich das? Warum eigentlich?

// String-Methoden sind von JS für uns vorgefertigte Funktionen, die wir auf Strings anwenden können, um strings zu manipulieren, analysieren und formatieren

// string.lengt --> gibt die anzahl der zeichen meines strings als number zurück
// leerzeichen werden mitgezählt
console.log(text1.length);

// string.indexOf("etwas") --> gibt uns den Index (Position) einer Zeichenkette innerhalb des strings zurück
// WICHTIG --> fängt bei 0 anzuzählen und ist case sensitive
const fristName = "Michael Alexander";

console.log(fristName.indexOf("x"));
console.log(fristName.indexOf("der")); // Wenn gefunden gibt die Position des ersten buchstaben zurück
console.log(fristName.indexOf("H")); // -1 gibt es immer wenn string nicht gefunden wird
console.log(fristName.indexOf("a"));
console.log(fristName.lastIndexOf("a"));

// string.slice()
// string.slice(startIndex)
// string.slice(startIndex, endIndex(opt.))
// slice gibt zeichen zwischen start- und endindex zurück oder wenn nur startIndex dann bis zum ende des strings
// wenn gar kein wert dann wird der komplette string genommen

const testText = "Bruce Wayne";
console.log(testText.slice()); //hier kompletter string
console.log(testText.slice(2)); // nimmt den string ab dem startIndex
// das heißt:
// startIndex ist inklusive
// endIndex ist exklusive (schneidet davor ab)
console.log(testText.slice(2, 4));
// kombination aus slice und indexOf
// wir starten bei 0 und mit indexOf lassen wir uns den endIndex ausgeben, weil indexOf uns den index des gesuchten zurückgibt
console.log(testText.slice(0, testText.indexOf(" ")));

// Es gibt noch mehr methoden um strings zuteilen:
// Substring --> OK
// Substr --> deprecated --> Bitte nicht mehr nutzen!

// slice kann auch negative zahlen nutzen und nimmt die zeichen aus dem string von hinten
console.log(testText.slice(-3));

// string.concat() --> ist die offizielle methode um strings miteinander zuverketten <3
const vorName = "Anna";
const nachName = "SuperWomen";

console.log(vorName.concat(nachName)); // concat werdet ihr noch bei anderen datentypen kennenlernen und lieben <3

// ====================================================
//                     template literals
// ====================================================
// super für mehrzeilige strings
// super um variablen/konstanten un meinen string zu implementieren

// const greeting = `Hallo ${vorName} ${nachName}, willkommen zurück auf deinem Dashboard`;

function greeting(vorName, nachName) {
  const sayHallo = `Hallo ${vorName} ${nachName}, willkommen zurück auf deinem Dashboard`;

  console.log(sayHallo);
}
greeting("Zied", "Hackerman");
greeting("Anna", "SuperWomen");
greeting("Izel", "in the dark");
