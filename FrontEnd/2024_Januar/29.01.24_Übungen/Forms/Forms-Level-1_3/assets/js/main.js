function diff(event) {
  event.preventDefault();
  const nummer1 = document.querySelector("#num1").value;
  const nummer2 = document.querySelector("#num2").value;

  const outputResult = document.querySelector(".result");
  outputResult.innerHTML = nummer1 - nummer2;

  // if (num1 > num2) {
  //   return num1 - num2;
  // } else {
  //   return num2 - num1;
  // }
}
