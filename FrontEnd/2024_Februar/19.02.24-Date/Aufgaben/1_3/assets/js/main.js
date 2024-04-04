let date1 = new Date(2222, 5, 20, 15, 42, 38);
let date2 = new Date(2123, 1, 24, 15, 42, 38);
let date3 = new Date(2123, 2, 24, 15, 42, 38);
let date4 = new Date(2123, 2, 3, 15, 42, 38);
// let date5 = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); - Alternative
let date5 = new Date();

date5.setDate(date5.getDate() + 30);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
