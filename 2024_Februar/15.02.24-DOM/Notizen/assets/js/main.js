// # Selektieren von Elementen

// ! HTML Collection
// Eine HTML Collection ist ein aussen ein Array darinnen befinden sich Objects. Es wird in JS verwendet um eine Gruppe von Elementen in DOM selektieren
// DOM = Documenten Object Model

// - HTML Collection sind live! Sobald sich HTML ändert, ändert sich auch die collection
// - index Bassierent - Das erste Element ist 0
// - wird oft beim document.getElementByClassName() & document.getElementByTagName() benutzt. (da bekommen wir eine collection zurück)

// * So bekomme ich zugriff auf die HTML elemente
console.log(document.forms);

let myForm = document.forms.loginForm;
console.log(myForm);

// Holt input feld raus
console.log(myForm.username);

// Holt value raus
// HTML = name="username"
console.log(myForm.username.value);

// So bekomme ich email value
console.log(myForm.email.value);

// Holt sich den btn
console.log(myForm.button.value);

// # NodeList
// Eine NodeList ist eine Sammlung von knoten, darum nodes. Im gegenzug zu HTML Collection können NOdes alle arten von DOM knoten enthalten

// - Node können statisch sein oder live
// - Index basiert - Erstes element ist 0
// - NodeList werden oft als Rückgabewerte von DOM Methoden wie document.querySelectorAll() oder Node.childeNodes erhalten

const liHTMLCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");

console.log(liHTMLCollection);
console.log(liNodeList);

// mit console.dir() bekommen wir immer ein Objekt zurück (weisses teil)

// So bekomme ich einzelne Child Elemente
console.log(document.body.children[0]); // Ich bekomme das Formular
console.dir(document.body.children[0].children); // so bekommen wir die inputs
console.dir(document.body.children[1].children); // so bekomme ihc die li

// - So fügen wir was in unsere children ein
document.body.children[0].innerHTML += "<p> Ich bin im Form Element </p>";
document.body.children[1].innerHTML += "<li> Ich bin ein li Tag </li>";

// - So machen wir den Text von inputfeld farbig
document.body.children[0].children[0].style.color = "pink";
document.body.children[0].children[1].style.color = "red";

// # firstElementChild & lastElementChild

console.log(document.body.firstElementChild); // Wie bekommen das erste elment von html zurück (form)
console.log(document.body.lastElementChild); // Wie bekommen das letzte elment von html zurück (Script)
console.log(document.body.children[0].lastElementChild); // So können wir eine Kombination mit index und lastElementChild machen (<p>)

// # ==== createElement, appendChild ====
console.clear();

// * Element ins HTML Einfügen

// 1. erstellt ein Element deiner Wahl
let div = document.createElement("div");

// 2. erstellt den Text für das Div
div.textContent = "Test Div";

// 3. styling deiner Elemente
div.style.height = "200px";
div.style.backgroundColor = "red";

// 4. Fügen das Element in das body hin
document.body.appendChild(div);

// # ==== setAttribute("attribute", "attribute-inhalt") ====
// so kann ein Bild in das HTML geschrieben werden
let image = document.createElement("img");
// hier definiere ich die quelle
image.setAttribute(
  "src",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center"
);
// hier definiere ich mein alt text
image.setAttribute("alt", "random img");
// hier füge ich die klasse hinzu
image.setAttribute("clas", "random-class");
// Hier schreibe ich es ins HTML
document.body.appendChild(image);

// - So machen wir das mit innerHTML
document.body.innerHTML += `<img class="hi" src="https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center" alt="test">`;

// # ==== setAttribute & forEach
let imageArray = [
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?resize=400x300&vertical=center",
];

// 1.chleife erstellen
imageArray.forEach((elm) => {
  // 2.erstellen von image tag
  let img = document.createElement("img");
  // 3.src anpassen
  img.setAttribute("src", elm);
  //   4.alt tag
  img.setAttribute("alt", "alt Tag");
  // 5.Klasse hinzufügen
  img.setAttribute("class", "class123");
  document.body.appendChild(img);
});
