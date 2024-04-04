const button = document.querySelector("#btn");
const time = document.querySelector(".zeit");
let number = 100;

button.addEventListener("click", () => {
  const countdown = setInterval(() => {
    number--;
    time.innerHTML = number + "%";
    if (number <= 0) {
      clearInterval(countdown);
    }
  }, 80);
});
