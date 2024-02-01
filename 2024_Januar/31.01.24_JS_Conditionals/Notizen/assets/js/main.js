// ===============================
//              if / else
// ===============================
// conditional (Bedingung) sind in der Programmierung die Möglichkeit, bestimmte Code Blöcke auf Basis einer Bedingung auszuführen oder auch überspringen zu lassen. Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst)
// 2. switch --> vllt heute, sonst morgen
// 3. ternary operator --> heute nicht, später im kurs

// ===============================
//              Grundsyntax
// ===============================

// if(hierdrin steht die bedingung) {
// dieser wird dann ausgeführt wenn die bedingung true ist
// } else {
// dieser block wird ausgeführt wenn die bedingung false ist
// }

// Wir benötigen für eine Bedingung, in der Regel, fast immer einen vergleich (comparison!!!!)
// Das ergebnis eines Vergleichs ist immer ein Boolean (true/false)

let time = 5;
console.log(time >= 8);

if (time >= 8) {
  console.log("Ich führe das if aus, weil mein vergleich true ist");
} else {
  console.log("Ich führe das else aus, weil mein vergleich false ist");
}

let salary = 3001;

if (salary <= 1000) {
  console.log("Du verdienst wenig");
} else if (salary <= 1500) {
  console.log("du verdienst gut");
} else if (salary <= 2000) {
  console.log("Du verdienst richtig gut");
} else if (salary <= 4000) {
  console.log("Gehalt to the Moon");
} else {
  console.log("Gehalt nicht mehr messabr #Elon");
}

let schuelerPunkte = 60;

if (schuelerPunkte <= 20) {
  console.log("Die Note 6");
} else if (schuelerPunkte <= 40) {
  console.log("Die Note 5");
} else if (schuelerPunkte <= 60) {
  console.log("Die Note 4");
} else if (schuelerPunkte <= 70) {
  console.log("Die Note 3");
} else if (schuelerPunkte <= 80) {
  console.log("Die Note 2");
} else {
  console.log("Die Note 1");
}

// ===============================
//         Logical operators
// ===============================
// Es gibt zwei logical operators:
// &&  operator --> logisches "und", hier müssen beide bedingungen true sein
// || operator --> logisches "oder", hier muss nur eine der beiden bedingungen true sein
// alt + gr + ><

let numOne = 5;
let numTwo = "8";

console.log(numOne === 5 && numTwo === 8);
console.log(numOne === 5 || numTwo === 8);

// Warum immer am besten mit === vergleichen und nicht nur mit == ?
// Weil die === einen stabileren und robusteren Code bauen, weil wir hier im strikten vergleich sind. DAdurch erlauben wir dem Code weniger freiraum für interpretationen durch user eingaben und datentypen

let geschwindigkeit = 100;

if (geschwindigkeit <= 100 && geschwindigkeit >= 80) {
  console.log("Du fährst schnell");
} else if (geschwindigkeit < 80 && geschwindigkeit >= 50) {
  console.log("Du fährst normal");
} else if (geschwindigkeit < 50 && geschwindigkeit >= 20) {
  console.log("Deine Geschwindigkeit ist nicht messbar");
} else {
  console.log("Für was fährst du überhaupt. Bleib doch direkt stehen.");
}

function checkAge() {
  // auch wenn ich ein input number habe, bekomme ich im JS immer inene string raus
  const userAge = Number(
    document.body.querySelector("form input:first-of-type").value
  );
  //   dies ist eine typ conversion in JS und macht in diesem fall aus ienem string eine number
  console.log(userAge);
  if (userAge < 18) {
    console.log("Du kommst nicht rein");
  } else {
    console.log("Willkommen im Club");
  }
}

// ===============================
//           fake login
// ===============================

// fake datenbank
const fakeDBUserEmail = "Hakan@super-code.de";
const fakeDBPassword = "hakan123";
let falseLogin = 0;

function userLogin() {
  const userMail = document.querySelector("#email").value;
  const userPW = document.querySelector("#pw").value;

  if (falseLogin < 5 && 5 - falseLogin > 0) {
    if (userMail === fakeDBUserEmail && userPW == fakeDBPassword) {
      console.log("Willkommen auf der Seite");
    } else {
      console.log("Email oder Passwort ist falsch");
      console.log("Sie haben noch " + (5 - falseLogin) + " Versuche");
      falseLogin++;
    }
  } else {
    console.log("Ihr Account ist gesperrt!");
  }
}
