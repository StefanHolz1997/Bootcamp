//  ==== console.log() ====
// mit console.log() können wir uns sachen in der konsole ausgeben lassen. Das werden wir viel zum testen benutzen
// Am Ende jedes Befehls muss ein Semikolen (;) stehen.
console.log(50);

// ! ==== Variablen ====
// - cons - Variable sollten für Werte verwendet werden, die sich nicht ändern.
// - let - Variablen für Wert die sich später ggf ändern
// - var - Variable ähnlich zu let (vor ECMA 6) bitte nicht benutzen

// ? CONST
// * Stell dir vor, du möchtest eine Variable deklarieren, um den Namen einer Person zu speichern. Wenn er eionmal zugewiesen ist woll er nichtmehr verändert werden können. In diesem Fall bitte const benutzen

const name = "Max";
// name = "Tobi";

// ? LET
// * Jetzt wollen wir ein Spielstand in einer Variable let pseichern un den wert im llaufe des Spiels immer wieder anpassen. Wenn sich ein Wert im Laufe des Programms ändert benutzen wir let
let score = 0;
score = 11;
console.log(score);

// ? Zuweisung auf aufruf
// let = Mit let erstellen wir eine Variable
// let num1 = Hier Initialisieren wir eine Variable und weisen direkt einen namen zu

let num1 = 30;
console.log("num1:", num1);

let num2 = 10;
console.log("num2:", num2);

console.log(num1 - num2);

let num3 = 0;

num3 = num1 - num2;
console.log(num3);

// # Konventionen

// Selbsterklärende Namen verwenden
// nicht zu kurz
// nicht zu lang
// Namen sollen nicht mit Zahlen anfangen
// let 2Pac = 33
// Namen sollen nicht mit $ starten
// JS ist Case-Sensitive

// CASE SENSITIVE

let a = 10;
let A = 50;

console.log(a);
console.log(A);

let zahl;
zahl = 55;

console.log(zahl);

//  Best practice

// camelCase : erster Buchstabe klein und zweites Wort groß

let meineErsteVariable;
let myFirstVariable;

// # ==== DatenTypen ====

// ? Numbers
// NUmbers werden inder Konsole Blau / Lila angezeigt
console.log(12);
console.log(17);
console.log("50" - "25");

// ? Strings
// String = Textelemente
// Um ein String müssen wir immer "" mahcen
console.log("Marzio");
// Wir können auch Zahlen als Strings ausgeben
console.log("10");

// ? Boolean
console.log(true);
console.log(false);

// # ==== String Concatination ====
// Wir können mehrere Textelemnte miteinander verbidnen

const firstName = "Marzio";
const lastName = "Constantini";
let address = "Tutzing";

console.log(firstName, lastName, address);

// console.log(
// "Ich bin" + firstName + " " + lastName + " und wohne in " +address;
// );

let satz = "Ich bin" + firstName + " " + lastName + " und wohne in " + address;

console.log(satz);

// # ==== Arthmische Operationen ====

// addieren
console.log(5 + 3);

// multiplizieren
console.log(5 * 5);

// dividieren
console.log(5 / 2);

// Modulo Operator -> Restwert ermitteln
// Wie schauen ob ein restwer bleibt, wenn die Zahl 6 durch 5 dividiert wird
console.log(6 % 5);

let zahl1 = 10;

// Increment
console.log("zeile 124", zahl1);
zahl1++;
zahl1++;
zahl1++;
console.log("Zeile 128", zahl1);

// Decrement
console.log("Zeile 131", zahl1);
zahl1; // -1
console.log("Zeile 132", zahl1);

// # ==== Output ====
// console.log("kennen wir schon");

// ? document.write()
// Damit schreiben wir immer Daten am Ende von dem HTML dom
document.write("Hallo Kurs ^^");

// Und so haben wir eine umanteltes html element hinzugefügt
document.write("<h2 class='test'> Kurs123 </h2>");

// ?window.alert()
// Damit öffnet sich ein PopUp fenster mit dem Text Hallöchen
// window.alert("Hallöchen");

// # ==== Inputs ====

// ? window.prompt()
// Damit öffnet sich ein Popup, in dem der Nutzer etwas eingeben kann
// Wenn ihc den zweiten String mit einem , trenne wird das in dem Eingabefeld als Platzhalter angezeigt
// window.prompt("Bitte gebe eine Zahl ein", "Alter");

// * Wir haben userAntowrt in einer Variable geschrieben und speicher uns nun das Input von User ab
// const userAntwort = window.prompt("Gib dein Geburtsjahr an");

// console.log("Der User ist", userAntwort + " geboren.");

// So können wir das auch in Kombi nutzen
// document.write("<h2>" + userAntwort + "</h2>")

// ! window.confirm()
// So kann ich was akzeptieren oder ablehnen
// window.confirm("Stimmen sie den Cookies zu?");

// let zustimmung = window.confirm("Stimmen Sie den Cookie zu?");
// console.log(zustimmung);
