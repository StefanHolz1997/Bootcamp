const output = document.querySelector(".message");
let count = document.querySelector("#count");
let number = Number(count.innerHTML);

const countdown = setInterval(() => {
  number--;
  count.innerHTML = number;
  if (number <= 0) {
    clearInterval(countdown);
    output.style.opacity = "0";
  }
}, 1000);

setTimeout(countdown, 9000);
