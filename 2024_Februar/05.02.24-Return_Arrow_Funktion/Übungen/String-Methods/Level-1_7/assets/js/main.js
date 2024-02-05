let text = "Sam is good at codingschool";
const result1 = document.querySelector(".r1esult");
const result2 = document.querySelector(".r2esult");
const result3 = document.querySelector(".r3esult");

result1.innerHTML = text.replace("good", "bad");
result2.innerHTML = text.replace("codingschool", "school");
result3.innerHTML = text.replace("codingschool", "tennis");
