// # ==== Window Object ====
// das Window Object repräsentiert das geöffnete Fenster im Browser
// mit JS können wir auf das Browserfenster zugreifen wie zb, höhe / breite / url

// "window" kann immer weggelassen werden. geht dennoch
console.log(window);

// ! width & height

// * innerWidth
// Werte werden hier in px angegeben
// Browserzeit und Devtools sind nicht einbegriffen
console.log("innerWidth", window.innerWidth);

// * innerHeight
// Werte werden hier in px angegeben
// Browserzeit und Devtools sind nicht einbegriffen
console.log("innerHeight", window.innerHeight);

// * outerHeight
//Größe des Fensters mit allen Elementen, wie Browserzeile und devTools
console.log("outerHeight", window.outerHeight);

// * outerWidth
//Größe des Fensters mit allen Elementen, wie Browserzeile und devTools
console.log("outerWidth", window.outerWidth);

// ! location

// * location
// die URL Adresse der aktuellen Seite
console.log(window.location);

// * so bekommen wir die Domain zurück
console.log(window.location.host);

// * so bekommen wir den pfad
// / ist immer home
console.log(window.location.pathname);

// ! Screen

// Das Screen Objekt befindet sich im Window Object. Es gibt und Informationen über den Bildschirm / Monitor, auf dem das Browserfenster geöffnet ist
console.log(window.screen);

// * screen.height
// wir bekommen dier Höhe zurück in px -> gesamte höhe mit taskleiste
console.log("Screen.height", window.screen.height);

// * screen.width
// wir bekommen die Breite zurück in px -> gesamte breite mit allem
console.log("Screen.width", window.screen.width);

// * screen.availHeight
// so bekommen wir die höhe ohne Taskleiste
console.log("Screen.availHeight", window.screen.availHeight);

// * screen.availWidth
// wir bekommen die Breite zurück in px -> gesamte breite ohne allem
console.log("Screen.availWidth", window.screen.availWidth);

// ! ==== Window Methoden ====

// * window.alert()
// es öffnet sich ein PopUp in dem ein text steht
// window.alert("Hallo");

// * window.prompt()
// es öffnet sich ein popup in dem ich einen Text eingeben kann
// window.prompt();

// * window.prompt() value auslesen
// let promptAnswer = window.prompt("Zahl von 1 -10?");
// console.log(promptAnswer);

// * window.open
// damit können wir eine andere Seite öffnen lassen
// default wird die seite immer in einem neuen Tab geöffnet
// window.open("https://twitter.com/home?lang=de");

// - öffnet sich in selben Tab
// window.open("https://twitter.com/home?lang=de", "_self");

// - öffnet sich auch im neuen Tab
// window.open("https://twitter.com/home?lang=de", "_blank");

// * window.onload
// Wenn die seite komplett geladen wurde soll etwas passieren
window.onload = console.log("Seite wurde geladen");

// * window.scollTo
// mit window.scrollTo können wir zu einem bestimmten Punkt der Seite scrollen

// - Version 1 (eventlistener direkt anwenden)
document.querySelector(".scroll").addEventListener("click", () => {
  // 1. Wert in px x Achse
  // 2. Wert in px Y Achse
  window.scrollTo(0, 1000);
});

// - Version 2 (eine Variable erstellt mit dem Btn)
let scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {
  console.log("hi von der Variable");
});

// * window.location.reload()
// damit können wir die akutelle seite neu laden lassen
document.querySelector(".reload").addEventListener("click", () => {
  window.location.reload();
});

// * window.location.replace()
// wir können auf eine adere ulr weiterleiten
document.querySelector(".weiterleiten").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de/");
});

// * history.back()
// So können wir uns ein zurück btn machen
document.querySelector(".back").addEventListener("click", () => {
  history.back();
});
console.log(history);

// # ==== JS Timing Events ====
console.clear();

// * setTimeOut(Funktion, Millisekunden)
// führt eine Funktion erst nach bestimmten Millisekunden aus

// * setIntervall(Funktion, Millisekunden)
// die funktion wird immer nach x millisekunden ausgeführt

const konsolenAusgabe = () => {
  console.log("Hier steht etwas in der Konsole");
};

const konsolenAusgabeLöschen = () => {
  console.clear();
  console.log("Konsole wurde gelöscht");
};

// ! setTimeOut
// - Wert 1: welche Funktion soll ausgeführt werden
// - Wert 2: Nach wie vielen MilliSekunden soll die funktion ausgeführt werden

// setTimeout(konsolenAusgabe, 2000); // hier wird nach 2 sek etwas in der konsole geschrieben
// setTimeout(konsolenAusgabeLöschen, 4000); // nach 4 sek wird die konsole gelöscht

// ! setInterval
// setInterval(konsolenAusgabe, 1000);

// ! clearInterval
// löscht den Interval wieder
// - WICHTIG: wir müssen das setInterval in einer Variablen speichern, damit wir das später wieder löschen können

const intervalMarzio = setInterval(konsolenAusgabe, 1000);

// Hier wir der intervall gelöscht
document.querySelector(".interval").addEventListener("click", () => {
  clearInterval(intervalMarzio);
});

// ! so können wir eine set intervall acuih in einer Callback fkt. schreiben

// // Neu
// setInterval(() => {
//   console.log("Hellöchen");
// }, 1000);

// // Alt
// setInterval(function () {
//   console.log("Servus");
// }, 1000);

// # Countdown

const startButton = document.querySelector(".goBtn");
const coutdownDisplay = document.querySelector(".output");

startButton.addEventListener("click", () => {
  // Holt das Value und wandelt in num um
  let inputVal = Number(document.querySelector(".input-value").value);

  // Holt uns den output
  coutdownDisplay.innerHTML = inputVal;

  // Erstellt eine intavall mit dem Name intervallTimer was alle 1000ms ausgeführ wird
  const intervalTimer = setInterval(() => {
    // Hier wird dann immer ein runtergezählt
    inputVal--;

    // schrieben es in das html
    coutdownDisplay.innerHTML = inputVal;

    // Abfrage ob 0 erreicht worden ist, wenn ja soll der interval resetet werden
    if (inputVal <= 0) {
      clearInterval(intervalTimer);
      coutdownDisplay.innerHTML = "Finito Freunde";
    }
  }, 1000);
});
