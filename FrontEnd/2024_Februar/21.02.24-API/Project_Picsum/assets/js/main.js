fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((singlePicture) => {
      let pictureItem = document.createElement("div");

      // Image
      let image = document.createElement("img");
      image.setAttribute("src", singlePicture.download_url);
      pictureItem.appendChild(image);

      // Author
      let authorImage = document.createElement("h2");
      authorImage.textContent = singlePicture.author;
      pictureItem.appendChild(authorImage);

      // Button
      let seeMoreBtn = document.createElement("button");
      seeMoreBtn.textContent = "See more";

      seeMoreBtn.addEventListener("click", () => {
        window.open(singlePicture.url, "_blank");
      });

      pictureItem.appendChild(seeMoreBtn);

      document.querySelector(".outputPictures").appendChild(pictureItem);
    });
  })
  .catch((error) => console.log("Fehler im gesamt Fetch", error));
