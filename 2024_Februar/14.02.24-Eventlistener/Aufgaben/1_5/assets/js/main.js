const pressMe = document.querySelector("#clickMe");
let number = 1;
pressMe.addEventListener("click", () => {
  pressMe.innerHTML = `Click me: ${number++}`;
});
