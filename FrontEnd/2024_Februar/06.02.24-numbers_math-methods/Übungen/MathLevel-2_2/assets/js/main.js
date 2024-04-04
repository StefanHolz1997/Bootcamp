let Zufall = Math.ceil(Math.random() * 10);

Check = prompt("Welche Zahl bin ich? 1 - 10", "");
if (Check != Zufall) {
  console.log("Du hast verloren. Die Nummer lautet " + Zufall);
} else {
  console.log("Du hast die Zahl erraten. Congratualtion !!!");
}
