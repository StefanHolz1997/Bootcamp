// # ==== Return ====
console.log("%c ==== Return ====", "background: red; color: white");

// * Ein Return benötigen wir um ein Wert auserhalb der funktion verfügbar zu machen.
// * Ein Return beendet die funktion

function returnSomething() {
  return console.log("hallo return");

  //   Das werden wir nicht in der Konsole sehen, da es nach dem Return kommt.
  console.log("Hallo nach den return");
}
returnSomething();

// ! BSP 2
function gehtNicht(a, b) {
  let outputGehtNicht = a + b;

  //   Hier kann ich den output sehen
  console.log(outputGehtNicht);
}

// Fehler: weil die variable in iener Funktion definiert wurde und nicht global
// console.log(outputGehtNicht);
gehtNicht(5, 6);

function add(a, b) {
  let outputGeht = a + b;

  return outputGeht;
}

console.log(add(4, 1));

let reutrnOutput = add(6, 10);

console.log({ reutrnOutput });

// ! BSP 3
// - Checken ob gerade oder nicht

let num2 = 27364;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let ergebnisGerade = isEven(num2)
  ? `die zahl ${num2} ist gerade` // das ist immer der true wert
  : `die zahle ${num2} ist nicht gerade`; // das ist immer der false wert

console.log(ergebnisGerade);

// ! BSP 4
// - Checken ob eine Zahl postivis, Negativ oder null ist

let nummerChecken = 0;

function checkNumber(num) {
  if (num > 0) {
    // jedes If else kann ein eigenes return haben
    return "positiv";
  } else if (num < 0) {
    return "negativ";
  } else {
    return "null";
  }
}

let result = `Die zahl ${nummerChecken} ist ${checkNumber(nummerChecken)}`;

console.log(result);

// # ==== Arrow ====
console.log("%c ==== Arrow Funktion ====", "background: red; color: white");
// auch fat arrow function genannt
// ist mit ES6 gekommen

const bootCamp = "Vollzeitkurs";

// - Alte schreibweise
function whichBootcamp() {
  console.log(`Wir sind im ${bootCamp}`);
}
whichBootcamp();

// - Neues Schreibweise:
const whichBootcampNew = () => {
  console.log(`Wir sind im ${bootCamp}`);
};
whichBootcampNew();

// - Verkürzte version - nur möglich bei einer zeile Code

const bootCampSuperCode = (bootcamp) => console.log(`Wir sind im ${bootcamp}`);

bootCampSuperCode("FullStack Kurs");

// # ==== Scope ====
console.log("%c ==== Scope ====", "background: red; color: white");

// - Globaler Scope
//Der Globale Scope ist quasi unsere komplette JS Datei
// Wenn etwas im globalen scope definiert ist, kann ich von überall aus drauf zugreifen

const BootcampNew = "Vollzeit";
// frei verfügbar
console.log(BootcampNew);

const whitchBootcamp = () => {
  console.log(`Wir sind im ${BootcampNew}`);
};
whitchBootcamp();

// - local Scope
// Der locale Cope kann zb in einerm Funtionskörper sein
// Wenn wir eine Variable in loockalem Scope einer funtion definieren, können wir nur in der funktion darauf zugreifen

const superBootcamo = () => {
  const superdupperBootcamp = `Vollzeit von Supercode :3`;
  console.log(superdupperBootcamp);
};

superBootcamo();

// Geht nicht weil local definiert
// console.log(superdupperBootcamp);

// - globale variable in funktion zuweisen

let mix = 387;

const mixFunc = (superNummer) => {
  if (superNummer % 2 === 0) {
    mix = "gerade :)";
  } else {
    mix = "ungerade :(";
  }
};

// Funktionsaufruf
mixFunc(3);
console.log(mix);
