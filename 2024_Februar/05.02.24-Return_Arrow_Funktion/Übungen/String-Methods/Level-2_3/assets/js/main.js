const searchWord = () => {
  let textInput = document.querySelector("#search-input").value;
  let content = document.querySelector("article").innerText;

  let textReplace = "<span class = highlight>" + textInput + "</span>";

  let result = content.replaceAll(textInput, textReplace);

  document.querySelector("article").innerHTML = result;
};

