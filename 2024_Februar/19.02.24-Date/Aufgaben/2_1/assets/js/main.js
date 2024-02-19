const dateOutput = document.querySelector(".date");
const currentDate = () => {
  let today = new Date();
  let weekDayName = today.toLocaleString("default", { weekday: "short" });
  dateOutput.innerHTML = `<h2 style="font-family: Verdana"> ${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()} <p>`;
};

currentDate();
