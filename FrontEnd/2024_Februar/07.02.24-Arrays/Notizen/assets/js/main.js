// # ==== Array Basics ====

let gericht1 = "Kuchen";
let gericht2 = "Pizza";
let gericht3 = "Döner";

// Mit Array können wir alle gerichte in einem Datensatz speichern. Dabei spielt der Datentyp keine Rolle
// Arrays kann man wie normale variablen mit let oder const starten (man benutzt eigentlich immer const)
// Array werden immer mit den [] Klammerpaar angegeben

const lieblingsGerichte = [
  "Kuchen",
  "Pizza",
  "Döner",
  3344,
  2334,
  111,
  332312,
  true,
];

console.log(lieblingsGerichte);
// So bekommen wir eine tabellen Übersicht vom Array
console.table(lieblingsGerichte);

// Über den index kann ich ein einzelnes Element aus unseren Array ansprechen
console.log(lieblingsGerichte[0]);
console.log(lieblingsGerichte[7]);
console.log(lieblingsGerichte[2]);

// # ==== Array Methoden ====

// * indexOf
// Hier suchen wir in einem Array an welcher stelle sich ein Wert befindet

console.log(lieblingsGerichte.indexOf("Döner")); //* 2
console.log(lieblingsGerichte.indexOf("Nudeln")); //* -1 nicht gefunden
console.log(lieblingsGerichte.indexOf("hallo")); //* -1 nicht gefunden

//*  1 = true
//* -1 = false

// - Hier überschreiben wir mit hilfe von Index einen Wert
console.table(lieblingsGerichte);

lieblingsGerichte[2] = "Pasta";

console.table(lieblingsGerichte);

// * .length
// Gibt die Länge von einem Array zurück, als zahl
console.log(lieblingsGerichte.length);

const names = ["Tobi", "Mia", "Even", "Thomas"];
console.log(names);

// * namen überschreiben mit indexOf
// - Statische Möglichkeit
names[0] = "Susi";
console.log(names);

// - Dynamische Möglichkeit
names[names.indexOf("Even")] = "Gerhardt";
console.log(names);

// * push()
// die push() methode fügt ein neues Element am Ende hinzu und gibt uns ein neue length zurück
let pushNames = names.push("Sebastian");
console.log(pushNames); // 5

console.log(names); // array mit Sebastian

// * pop()
//  die pop() methode entfernt das letzte Element in einem Array und gibt den Wert, des gelöschten Elementes zurück

let popNames = names.pop();
console.log(popNames); // Sebastian
console.log(names); // Sebastian wurde wieder gelöscht

// * unshift()
// Die unshift() methode fügt ein neues Element am Anfang hinzu und gibt die neue Länge zurück
let unshiftNames = names.unshift("Reazy");
console.log(unshiftNames); // 5
console.log(names); // Reazy wurde an erster stelle hinzugefügt

// *  shift()
// Die shift() entfernt das erste Element in einem Array und gibt den Wert des Elementes wieder
let shiftNames = names.shift();
console.log(shiftNames); // Reazy
console.log(names); // Reazy wurde an erster Stelle gelöscht

// * splice()
// Die splice() methode entfernt oder fügt elemente hinzu. Der erste Wert gibt an Wo das erste Wort entfernt werden soll, der zweite wieviele werte entfernt werden sollen under der dritte wie viele Elemente hinzugefügt werden soll.
let spliceNames = names.splice(2, 1);
console.log(spliceNames); // Gerhardt
console.log(names); // Gerhardt wurde an der zweiten Stelle entfernt

// ! Methode mit .indexOf()
const myArray = ["a", "b", "c", "d"];
myArray.splice(myArray.indexOf("c"), 2);
console.log(myArray);

// * delete
// Die delete arrayName löscht das Element, das im Index angegeben ist. (erstellt dabei einen leeren Spot)
const deleteArray = [5, 67, 3, 8];
delete deleteArray[2];
console.log(deleteArray); // [5, 67, leer, 8]

// - Warum const in Array
const meinArray = [1, 2, 4];
meinArray.push(103); // Das ist erlaubt
meinArray[1] = 40; // Das ist erlaubt

console.log(meinArray);

// Das gibt mir ein Fehler weil ein Array eine const ist
// meinArray = [3, 2, 3, 2];
