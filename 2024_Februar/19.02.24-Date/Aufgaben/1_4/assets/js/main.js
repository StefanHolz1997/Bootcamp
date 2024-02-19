const numDays = (y, m) => new Date(y, m, 0).getDate();
console.log(numDays(2016, 1));
console.log(numDays(2017, 2));
console.log(numDays(2016, 2));
console.log(numDays(2017, 12));
