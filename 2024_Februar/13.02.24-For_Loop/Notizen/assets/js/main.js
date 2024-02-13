// # ==== for loop ====

// * Klassicher for Loop

// for(statement1; statement 2; statement3)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// i ist frei wählbar. Es wird aber meistens i = index benutzt
// hier heißt i = pfannkuchen
// for (let pfannkuchen = 0; pfannkuchen <= 20; pfannkuchen++) {
//   console.log(pfannkuchen);
// }

// ! ACHTUNG vor: INFINITY LOOPS

// for (let i = 9; i >= 6; i++) {
//   console.log(i);
// }

// # ==== Runterzählen ====
//  Wenn ich von groß auf klein zählen möchte muss der start index höher als der zweiter statement sein
// for (let i = 50; i >= 1; i--) {
//   console.log(i);
// }

// # ==== Schleife in einer Schleife "nestet Loops" ====
// In diesem Beispiel haben wir eine äußere Schelife, die von 1 bis 3 läuft, und eine inner schleife die von 1 bis 5 läuft. Bei dem Durchlauf der äußeren schleife wird die innere schleife vollständig durchlaufen (5)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`innere Schleife: ${i}, Innere Schleife: ${j}`);
  }
  console.log("Äußere Schleife");
}

// # ==== For Schleife mit Array ====

let contrys = ["france", "germany", "spain", "italy"];
// So bekommen wir das array
console.log(contrys);

// So bekommen wir die länge von array
console.log(contrys.length);

for (let i = 0; i < contrys.length; i++) {
  console.log(contrys[i]);
}

// * Sowas geht nicht
// let big = for (let i = 0; i < contrys.length; i++) {
//     console.log(contrys[i]);
//   }

// # Checken ob eine Zahl gerade oder ungerade ist
let zahlen = [
  5, 3, 5, 4, 34, 53, 45, 2, 12, 3, 65, 6, 5, 568, 3, 23, 4565, 6, 756, 65, 89,
  87,
];

// Array wo die gerade zahlen drinnen sind
let geradeZahlen = [];

// Schleife um die gerade Zahlöen zu finden und im neuen Array zu speichern
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}
// Logs
console.table(geradeZahlen);

// # Berechnung der durschnittsnote
let noten = [1, 3, 2, 5, 4, 3, 1, 3, 2];

// Funktion zur BErechnung der Noten
const durchschnitt = (noten) => {
  let summe = 0;

  //   Addieren der Noten zu einer großen zahl
  for (let i = 0; i < noten.length; i++) {
    summe += noten[i];
  }
  console.log(summe);

  let durchschnitt = summe / noten.length;
  return Number(durchschnitt.toFixed(2));
};

let durchschnitsNotenVariable = durchschnitt(noten);

console.log(
  `die Durchschnitsnote des Schülers ist ${durchschnitsNotenVariable}`
);

console.clear();

// # String in For Loop
let stringText = "Deutschland";
for (let i = 0; i < stringText.length; i++) {
  console.log(stringText[i]);
}

// # "for of" Schleife
// ist mit es6 gekommen, kurz und bündiger. Ohne zusätzliche Variablen und kann über alles interieren was ein index hat zb Array oder String
// wir benötigen auch ein array / string

let colors = ["green", "red", "blue", "black"];

// i steht für index
// colors = der array name
for (let i of colors) {
  console.log(i);
}

let superString = "Text";

for (let i of superString) {
  console.log(i);
}

// # Wann welcher Loop
// * mit Array / String
// Wenn ich über ein Array, String iterieren will benutzen wir map(), forEach(), for of(), {for()}

// * ohne Array / String
// Wenn ich eine Schleife benötige die nicht abhängig ist von einem index wie vom string/Array benutzen wir eine ->for<- schleife. hier kann ich individuell den start und den end punkt auswählen, wie oft die schleife durchlaufen soll.
