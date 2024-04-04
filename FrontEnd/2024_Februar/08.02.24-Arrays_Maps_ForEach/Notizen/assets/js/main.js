const heroes = ["Superman", "Spiderman", "Hulk", "Ironman"];

// - Welchen index hat Spiderman
console.log(heroes.indexOf("Spiderman"));

// - Wo fängt der Index an zu zählen=
// bei 0

// - Wie kann ich ein Element zum Ende hinzufügen?
heroes.push("Thor");
// console.log(heroes);

// - Wie kann ich ein Element am Anfang hinzufügen?
heroes.unshift("SuperMario");
// console.log(heroes);

// - Wie kann ich ein Element am Ende entfernen?
heroes.pop();
// console.log(heroes);

// - Wie kann ich ein Element am Anfang entfernen?
heroes.shift();
// console.log(heroes);

// # Neues Thema

console.log("%c Array Methoden 2", "Color: white; background-color: red;");

let carName = ["Audi", "BMW", "Ford", "Seat", "Skoda"];
console.log(carName);

// # ==== splice ====

// Die splice() methode entfernt oder fügt elemente hinzu. Der erste Wert gibt an Wo das erste Wort entfernt werden soll, der zweite wieviele werte entfernt werden sollen under der dritte wie viele Elemente hinzugefügt werden soll.
// Erster Wert: Wo soll hinzugefügt/entfernt werden
// Zweiter Wert: Wieviel Elemente sollen gelöscht/überschrieben werden?
// Dritter Werr: Neues Element (optional)
carName.splice(2, 0, "VW", "Fiat");
console.log(carName);

// VW löschen
// 2 = Ab wo soll gelöscht werden
// 1 = Wie viele sachen sollen gelöscht werden
carName.splice(2, 1);
console.log(carName);

// Ford löschen
carName.splice(3, 1);
console.log(carName);

// Audi soll zu Audoli werden
carName.splice(carName.indexOf("Audi"), 1, "Audoli");
console.log(carName);

// ! slice()
// Mit .slice() können wir ein teil eines Array ausschneiden und geben ein neues Array zurück
// Erster Wert: Start
// Zweiter Wert: Ende (optional)

let newCars = carName.slice(0, 3);
console.log(newCars);

// Wenn ich kein Endwert angebe, dann macht er das automatisch bis ans ende
let otherCarName = carName.slice(3);
console.log(otherCarName);

// - WICHTIG: sclice verändert das ursprungs Array nicht
console.log(carName);

// ! .sort()
// Mit .sort() können wir sortieren

// Nummern sortieren
const numbers = [4, 3, 7, 5, 9, 2];
console.log(numbers);
numbers.sort();
console.log(numbers);

// Strings sortieren
const strings = ["B", "A", "Z", "D"];
console.log(strings);
strings.sort();
console.log(strings);

// Hohe Nummern sortieren
const num2 = ["54", "100", "32", "67", "42"];
console.log(num2);
num2.sort();
console.log(num2);

// * Mit einer Callback function bekommen wir das hin

num2.sort((a, b) => {
  return a - b;
});

// Kurzschreibform
// bei einzeiligen befehlen benötige ich kein return mehr, macht er automatisch
numbers.sort((a, b) => a - b);
console.log(num2);

// So von groß auf klein
num2.sort((a, b) => b - a);
console.log(num2);

// ! reverse()
const reverseNum = [1, 2, 3, 4, 5];
reverseNum.reverse();
console.log(reverseNum);

// ! filter()

let filmTitel = [
  "Dragon Force",
  "Inception",
  "Naruto",
  "Forrest Gump",
  "The Matrix",
  "Fight Club",
  "Spiderman",
  "Demon Slayer",
  "Schindler's List",
  "The Godfather",
  "Avengers",
  "Lord of the Rings",
  "Star Wars",
  "Avatar",
  "Casablanca",
  "Titanic",
  "The Lion King",
  "Jurassic Park",
  "Gladiator",
  "The Departed",
];
console.log(filmTitel);

// So filtern wir nun alle titel die länger als 10 Zeichen sind und speichern sie in einer Variablen mit dem namen "result"
const result = filmTitel.filter((word) => word.length > 10);
console.log(result);

// So filtern wir nach einem Suchwort
let suchwort = "the";

const result2 = filmTitel.filter((einzelneFilme) =>
  einzelneFilme.includes(suchwort)
);
console.log(result2);

// So filtern wir nach einem Suchwort egal ob Groß oder kleinschreibungs
const result3 = filmTitel.filter((einzelneFilme) => {
  return einzelneFilme.toLowerCase().includes(suchwort.toLowerCase());
});
console.log(result3);

// # ==== LOOPS ====

const names = ["Lisa", "Tobi", "Izel", "Mia", "Even", "Stefan", "Adrian"];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// !forEach

names.forEach((döner) => {
  console.log(döner);
});

let images = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
  "https://picsum.photos/208",
  "https://picsum.photos/209",
  "https://picsum.photos/210",
];

const bilderBox = document.querySelector(".imageBox");

images.forEach((foto, index) => {
  // zeigt mit index und das element (immer an zweiter stelle der parameter))
  console.log(index);
  //   zeigt mir den inhalt von array (immer an erster stelle bei den parameter)
  console.log(foto);

  bilderBox.innerHTML += `<img src="${foto}" alt"">`;
});

// So würden wir das Manuell machen
// bilderBox.innerHTML += `<img src="${images[0]}" alt"">`;
// bilderBox.innerHTML += `<img src="${images[1]}" alt"">`;
// bilderBox.innerHTML += `<img src="${images[2]}" alt"">`;
// bilderBox.innerHTML += `<img src="${images[3]}" alt"">`;
// ...

// ! map()
// .map() geht durch jedes element des array und gibt ein neues Array zurück
// map verändert das ursprungsarray NICHT!

let number3 = [10, 5, 2, 22];
console.log(number3);

// - Falsch
// Geht nicht weil sich das ursprungs Array nicht verändert.
// number3.map((Pfannkuchen) => {
//   return Pfannkuchen * 2;
// });

// - Richtig
let doubleNum = number3.map((nummer) => {
  return nummer * 2;
});
console.log(doubleNum);
console.log(number3);

// ! forEach() vs. map()

// - forEach() -> Gibt uns kein neues Array zurück
// - map() -> Gibt und ein neues Array zurück. Wenn ich mit den Weren später weiter arbeiten muss ist das the way to go

let studentNames = ["Nina", "Susi", "Max"];

// * forEach()
// - lagnschreibform
console.log(studentNames.forEach((names) => names.toUpperCase())); // undefined -> weil forEach gibt uns kein Array zurück :(

// - kurzschreibform
// console.log(
//   studentNames.forEach((names) => {
//     names.toUpperCase();
//   })
// );

// * map()
console.log(studentNames.map((names) => names.toUpperCase())); // geht -> weil map gibt uns ein neues Array zurück :)

// - Werte in eine neue Variable speichern
const mapLowName = studentNames.map((names) => names.toLowerCase());
console.log(mapLowName); // ['nina', 'susi', 'max'] -> geht weil map uns ein neues Array zurück gibt

// * forEach()
const forEachLowName = studentNames.forEach((names) => names.toLowerCase());
console.log(forEachLowName); // undefined -> weil forEach uns KEIN!!! neues Array zurück gibt

// das ursprungsArray bleibt unverändert
console.log(studentNames);
