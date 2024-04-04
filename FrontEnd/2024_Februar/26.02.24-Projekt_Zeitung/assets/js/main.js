const search = (event) => {
  event.preventDefault();
  const sprachen = document.querySelector("#sprache").value;
  const sort = document.querySelector("#sort").value;
  const textInput = document.querySelector("#text-input").value;
  const output = document.querySelector(".output");
  const apiKey = "bbcf21dcbe6d4b77b25d7f8250e5ce53";

  if (!textInput) {
    alert("Bitte geben Sie einen Suchbegriff ein.");
    return;
  }

  const apiUrl = `https:newsapi.org/v2/everything?q=${textInput}&sortBy=${sort}&language=${sprachen}&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = "";

      if (data.articles.length >= 1) {
        data.articles.forEach((singleData) => {
          let description = singleData.title;
          let content = singleData.content;
          let image = singleData.urlToImage;
          let readMore = singleData.url;
          output.innerHTML += `
      <div>
      <h2> ${description} </h2>
      <p> ${content} </p>
      <img src="${image}" >
      <a href="${readMore}" target='_blank'>Zum Artikel</a>
      </div>
      `;
        });
      }
    })
    .catch((error) =>
      console.error("Fehler beim laden der Nachrichten API", error)
    );
};
