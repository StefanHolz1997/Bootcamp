// # ==== DATE OBJECT ====
// 01.01.1970 -> Start der Zeit

// * Wenn wir keine Parameter mitgeben, bekommen wir die aktuelle Zeit + Datum zurück
let date1 = new Date();
console.log(date1);

// * Wenn wir Parameter mitgeben, wird ein Objekt erstellt mit den durchgereichten Zeiten
let date2 = new Date(1993, 3, 10, 16, 12, 13);
console.log(date2);

// * Wenn wir Date1 - Date2 rechnen, bekommen wir die Millisekunden die zwischen den beiden zeiten liegen
let date3 = date1 - date2;
console.log(date3);

// * So können wir die Tage rausbekommen
// 24 = Weil ein tag
// 60min = weil eine Stunde
// 60sec = eine minute
// 1000ms = eine Sekunde
let tage = date3 / (24 * 60 * 60 * 1000);
console.log(tage);

// * .toString() Methode wandelt unser Objekt un einen String
let date4 = date2.toString();
console.log(date4.toLowerCase());

// * toUTCString() - gibt ein Datum in UTC Zeit zurück
// UTC -The Universal Coordinated ist der standard bei den Welt Uhren
// wandelt in String um
let date5 = date2.toUTCString();
console.log(date5);

// * toLocalDateString - gibt ein Datum in einr lokalisierten darstellung zurück
// Datum
let date6 = new Date().toLocaleDateString();
console.log(date6);

// * toLocalString - gibt ein Datum in lokaler darstellung zurck
// Datum & Uhrzeit
let date7 = new Date().toLocaleString();
console.log(date7);

// # ==== So kann ich einzelne Werte von dem Datum bekommen

// * getFullYear() - gibt uns nur das Jahr zurück
let date8 = new Date().getFullYear();
console.log(date8);

// *getMonth() - gibt uns nur den Monat zurück
// Monate starten bei index 0 = Jan => 0
let date9 = new Date().getMonth();
console.log(date9); // 1 => 2 nicht weil Feb index 2 Hat

// * getDate() - gibt uns den Tag
let date10 = new Date().getDate();
console.log(date10);

// * getHours() - gibt uns die Stunden
let date11 = new Date().getHours();
console.log(date11);

// * getMinutes() - gibt uns die Minuten
let date12 = new Date().getMinutes();
console.log(date12);

// * getSeconds() - gibt uns die Sekunden
let date13 = new Date().getSeconds();
console.log(date13);

// # ====  So kann ich einzelne Werte im Datum abändern
console.clear();

const überschreiben = new Date();
console.log(überschreiben);

// * setDate()
// So kann ich nur den Tag ändern
überschreiben.setDate(28);
console.log(überschreiben);

// * set Month()
// So kann man nur den Monat ändern
// Jan = 0
// Feb = 1
überschreiben.setMonth(11);
console.log(überschreiben);

// * setFullYear()
// So können wir das ganze jahr setzen
überschreiben.setFullYear(2000);
console.log(überschreiben);

// # Wochentag's Name rausbekommen

// * Name von Wochentag rausbekommen
let dateName = new Date();

// - "long" = Montag
// - "short" = "Mo"
// - "narrow" = "M"

let weekDayDate = dateName.toLocaleString("default", { weekday: "long" });
console.log(weekDayDate);

// # Öffnungszeiten

const date = [
  { day: "Montag", time: "9:00 - 18:00" },
  { day: "Dienstag", time: "9:00 - 18:00" },
  { day: "Mittwoch", time: "9:00 - 18:00" },
  { day: "Donnerstag", time: "9:00 - 18:00" },
  { day: "Freitag", time: "9:00 - 18:00" },
  { day: "Samstag", time: "9:00 - 12:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

const outputData = document.querySelector(".offnungszeiten");

date.forEach((weekDayItem) => {
  outputData.innerHTML += `
    <div class="${weekDayDate === weekDayItem.day ? "strong" : "light"}">
    <h1>${weekDayItem.day}</h1>
    <p>${weekDayItem.time}</p>
    </div>
    `;
});

// * elemente dynamisch ausgeben
date.forEach((weekDayItem) => {
  outputData.innerHTML +=
    weekDayDate === weekDayItem.day
      ? `
    <div>
    <h1>${weekDayItem.day}</h1>
    <p>${weekDayItem.time}</p>
    </div>
    `
      : "";
});

// # Event tage Checker

const outputEvent = document.querySelector(".outputDate");
const eventBtn = document.querySelector(".btn");

eventBtn.addEventListener("click", () => {
  const dateInput = document.querySelector("#date").value;

  console.log(dateInput);
  // Zieldatum festlegen
  const zielDatum = new Date(dateInput);
  console.log(zielDatum);

  // Aktuelles Datum erhalten
  const heute = new Date();

  // Berechnen der Differenz in Lillisekunden
  const differenz = zielDatum - heute;
  console.log(differenz);

  // Rechnen von Millisekunden in Tag
  // Math.ceil => weil wir immer hochrunden wollen
  const tageBisZumEvent = Math.ceil(differenz / (24 * 60 * 60 * 1000));
  console.log(tageBisZumEvent);
  outputEvent.innerHTML += `<p>Das Event am ${dateInput} ist ${tageBisZumEvent} Tage entfernt </p> </br>`;
});
