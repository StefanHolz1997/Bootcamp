// # Wiederholung

// - Wie kann ihc checken ob es richtig eingebunden ist?
// console.log(44);

// - Ich möchte mir ein Element selektieren mit der clas "wdh" wie kann ich das machen?
const wiederholung = document.querySelector(".wdh");

// - Welche Datentypen kennen wir?
// Number, String, Boolean

// - Was ist der Unterschied zwischen == und ===?
// == nur Wert
// === Wert und Datentyp

// - <, <=, >. >= Was kann ich damit machen?
// < kleiner, <= kleiner gleich, > größer, >= größer gleich

// - Warum mögen wir den query selector?
// vielseitig einsetzbar, ID, klasse, und html tags

// - Wo ist der unterschied, zwischen innerHTML und document.write()
// write() schiebt das html element immer ans Ende. innerHTML können wir gezielt element wo platzieren

// - Wie heißt das keyword mit dem wir in JS einzelne werte stylen können?
// .style

// - WIe schreibe ich die CSS eigenschaften in JS
// fontSize

// - was ist eine funktion?
// ein Aufgabenaufruf -> zb. Bitte mach erst ein console.log() dann addiere mit zwei zahlen und gib mir diese aus.

// - Was sind Parameter?
// Paramter sind Platzhalter um eine Funktion wiederverwendbarer zu machen

// # NEUES THEMA

// ! Values Auslesen
// Form => onSubmit
// Button ?> onClick

function getInputValues(event) {
  event.preventDefault(); // Verhindert dass die Seite neu geladen wird.

  //   mit .value lesen wir die daten von input aus.

  //   name
  const marziosName = document.querySelector("#name").value;

  //   age
  const marziosAge = document.querySelector("#age").value;

  //   range
  const marziosRange = document.querySelector("#range").value;

  //   happy
  const marzioHappy = document.querySelector("#check").checked;

  //   bday
  const marzioBday = document.querySelector("#bday").value;

  //   console.log(
  //     "Meine Name lautet " +
  //       marziosName +
  //       " und ich bin " +
  //       marziosAge +
  //       " Jahre alt. Meine Range ist " +
  //       marziosRange +
  //       " und ich bin Happy: " +
  //       marzioHappy +
  //       ". Ich habe am " +
  //       marzioBday +
  //       " Geburtstag."
  //   );

  const outputMarzio = document.querySelector(".output-form");

  outputMarzio.innerHTML =
    "Meine Name lautet " +
    marziosName +
    " und ich bin " +
    marziosAge +
    " Jahre alt. Meine Range ist " +
    marziosRange +
    " und ich bin Happy: " +
    marzioHappy +
    ". Ich habe am " +
    marzioBday +
    " Geburtstag.";
}

// ! Add, Remove , Toggle Classes
// mit classLIst haben wir die möglichkeit klassen hinzuzufügen abziehen und zu toggeln
// wenn ich classList benutze, muss ich kein . vor die klasse schreiben da js schon weiss das es sich hier um klassen handelt => (Class)List

// * Add
// class = super-big
function addClass() {
  const addClassMarzio = document.querySelector(".add");

  //   mit .add fügen wir die klasse super.big hinzu
  addClassMarzio.classList.add("super-big");
}

// * remove
function removeClass() {
  // class => super-crazy

  const removeClassMarzio = document.querySelector(".remove");

  removeClassMarzio.classList.remove("super-crazy");
}

// * Toggle
function darkLight() {
  // class => dark
  const wrapper = document.querySelector(".wrapper");

  wrapper.classList.toggle("dark");
}
