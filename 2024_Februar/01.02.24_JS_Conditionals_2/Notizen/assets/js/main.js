// =============================================
//                  Conditionals 2
// =============================================

// =============================================
//                      Scopes
// =============================================

// Der global definiert sich dadurch das es direkt im JS dokument definiert wird, ohne in irgendwelchen funktionen, methoden, etc. definiert wird
const inWelchemScopeBefindeIchMich = "global scope";

var number1 = 30;
function showMeScope() {
  const welcherScopeIstHier = "localFunction scope";
  console.log(inWelchemScopeBefindeIchMich);
  console.log(welcherScopeIstHier);
  var number1 = 50;
  console.log(number1);
}
showMeScope();
console.log(number1);

// console.log(welcherScopeIstHier); // uncaught refrenceError --> die variable/ konstante wurde nicht gefunden
let number = 10;

if (inWelchemScopeBefindeIchMich === "global scope") {
  const undWoBefindeIchMich = "localBlock scope";
  console.log(inWelchemScopeBefindeIchMich);
  let number = 5;
  console.log(number);
}

console.log(number);
// console.log(undWoBefindeIchMich); //uncaught refrenceError --> die variable/konstante wurde nicht gefunden

// =============================================
//                      Switch
// =============================================

// switch & ternary operator
// Wo ist der unterschied zwischen if/else, switch & ternary ?
// if/else --> flexibeslte, komplexe bedingungen möglich
// switch --> einfacher, übersichtlicher, zumb verlgeich von einem wert
// ternary --> sehr kurze syntax, für einfach bedingungen geeignet

// =============================================
//                grundsyntax switch
// =============================================

switch (
  "burger" //bedingung kann zb ein string, number oder variable sein
) {
  case "bedingung": // case wird mit der bedingung im switch verglichen
    console.log("case === bedingung");
    break; //hiermit steigt man aus einem case wieder aus --> WICHTIG !!!!
  case "pizza":
    console.log("case === pizza");
    break;
  default: //wie else
    console.log("case stimmt nicht mit bedingung im switch überein");
}

// Aufgabe für uns --> Muss ich heute arbeiten oder habe ich frei ????

let today = "Donnerstag";

if (
  today == "Montag" ||
  today === "Dienstag" ||
  today === "Mittwoch" ||
  today === "Donnerstag" ||
  today === "Freitag"
) {
  console.log("Heute musst du arbeiten");
} else if (today === "Samstag" || today == "Sonntag") {
  console.log("Hoch die Hände Wochenede");
} else {
  console.log("Wochentag gibt es nicht");
}

switch (today) {
  case "Montag":
  case "Dienstag":
  case "Mittwoch":
  case "Donnerstag":
  case "Freitag":
    console.log("Du musst heute arbeiten");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Du hast heute frei");
    break;
  default:
    console.log("Wochentag gibt es nicht");
    break;
}

// * tenary

// wird als one-liner geschrieben und gibt einen wert zur체ck
// wird interessant bei reacht
// ? Grundsyntax ternary operator
// "Bedingung" ? "Ausf체hrung wenn Bedingung true" : "Ausf체hrung wenn Bedingung false";

let zahl = 7;

console.log(zahl % 2); // 1
console.log(zahl % 6); // 1
console.log(zahl % 4); // 3

if (zahl % 2 === 0) {
  console.log(zahl + " ist grade.");
} else {
  console.log(zahl + " ist ungerade");
}

const evenOrNot = zahl % 2 === 0 ? zahl + " ist grade" : zahl + " ist ungerade";
console.log("ternary " + zahl);
