function calcYear(event) {
  event.preventDefault();

  const jahr = document.querySelector("#jahr").value;
  const outputDate = document.querySelector("#outputYear");

  outputDate.innerHTML = 2024 - jahr;
}
