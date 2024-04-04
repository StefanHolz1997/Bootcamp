date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

function AmPm(datum) {
  const stunde = datum.getHours();
  const ampm = stunde >= 12 ? `PM` : `AM`;
  return ampm;
}

console.log(AmPm(date1));
console.log(AmPm(date2));
console.log(AmPm(date3));
console.log(AmPm(date4));
