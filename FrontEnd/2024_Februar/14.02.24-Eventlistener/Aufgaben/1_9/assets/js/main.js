const löschen = document.querySelector("#button");
const farbAuswahl = document.querySelector("#farbeAuswahlen").options;

löschen.addEventListener("click", (event) => {
  event.preventDefault();
  const index = farbAuswahl.selectedIndex;
  farbAuswahl.remove(index);
});
