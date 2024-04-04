const text = "Sam is going to codingschool";

const upSchool = document.querySelector(".upSchool");
const lowSchool = document.querySelector(".lowSchool");
const partUp = document.querySelector(".partUp");
const partLow = document.querySelector(".partLow");

upSchool.innerHTML = text.toUpperCase();
lowSchool.innerHTML = text.toLowerCase();
partUp.innerHTML = text.toUpperCase();
partLow.innerHTML = text.toLocaleUpperCase;
