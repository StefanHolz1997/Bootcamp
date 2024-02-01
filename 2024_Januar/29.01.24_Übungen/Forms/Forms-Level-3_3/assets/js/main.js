function backgroundChange() {
  const redColor = document.querySelector("#red").value;
  const greenColor = document.querySelector("#green").value;
  const blueColor = document.querySelector("#blue").value;

  const wrapColor = document.querySelector(".wrap");
  wrapColor.style.backgroundColor =
    "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
}
