function arbeitstagOderWochenende(datum) {
  const tag = datum.getDay();
  // 0 = Sonntag
  // 6 = Samstag
  if (tag === 0 || tag === 6) {
    return "Wochenende";
  } else {
    return "Arbeitstag";
  }
}

const date1 = new Date(2019, 11, 15);
const date2 = new Date(2001, 1, 16);
const date3 = new Date(2020, 1, 1);
const date4 = new Date(2020, 1, 29);
const date5 = new Date();

console.log(arbeitstagOderWochenende(date1));
console.log(arbeitstagOderWochenende(date2));
console.log(arbeitstagOderWochenende(date3));
console.log(arbeitstagOderWochenende(date4));
console.log(arbeitstagOderWochenende(date5));
