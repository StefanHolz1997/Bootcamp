let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let date1 = new Date();
console.log(date1);
console.log(date1.getFullYear());

const dateOutput = document.querySelector(".date");
const currentDate = () => {
  let today = new Date();
  let weekDayName = today.toLocaleString("default", { weekday: "short" });
  dateOutput.innerHTML = `<h2 style="font-family: Verdana"> ${weekDayName}  ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()} <p>`;
};

currentDate();
