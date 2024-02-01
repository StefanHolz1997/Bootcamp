function ageCheck() {
  const inputAge = document.querySelector("#age").value;
  const output = document.querySelector(".output");

  const age =
    inputAge < 18
      ? (output.textContent = "under 18")
      : (output.textContent = "old enough");
}
