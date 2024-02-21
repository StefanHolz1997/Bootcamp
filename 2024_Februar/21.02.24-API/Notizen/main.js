// # ==== API ====
// API = Application Programming Interface
// * Eine API ist eine schnittstelle zwischen front- und backend
// * APIs kommunizieren in der regel mit dem Server, der wiederum mit den Daten Antwortet

// ! === JSON ===
// * JSON (Javascript Object NOtation) ist eine gänigeres format um daten zu speichern
// * Unterstütz verschiedene Datentypen wie zb string, Zahlen, Boolean, array, object
// * Objekte können Objekte beinhalten
// * Gibt es in verschiedenen Programmiersprachen
// * weit verbreitet
// * "JSON FORMATTER"

// So schaut ein JSON aus (Wie ein Objekt nur mit "Key" auch in " ")
// {
// "id" : 1,
// "name" : "Max"
// }

// ! === Promise $ Fetchen ===
console.log(fetch("./fakeData.json"));
// * 1. Ein fetch ist eine Promise

// * 2. eine promise ist ein Objekt
// - -----> A.Eine Prmis ist ein versprechen das den eventuellen Abschluss representiert. Der kannerfolgreich sein oder auch nicht -> ABER wir bekommen auf jedenfall was zurück (daten oder fehler)
// - -----> B. ein Promise hat drei zustände
// : ----> <pending> (wir haben noch keine antwort erhalten)
// : ----> <resolved> (Antwort erhalten, alles ging gut)
// : ----> <rejected> (Antowrt erhalten, wir haben ein error bekommen)

// * 3. fetch ist asynchron, heißt es läuft parallel zu den anderen funktionen. Andere Funktionen müssen daher nicht auf den fetch warten bis er fertig ist.

// * 4. Eine Promise kann mit der Methode .then() und .catch() behandelt werden, uma uf das ergebnis oder den fehler zu reagieren

// : ----> ".then()" - Methode wird aufgerufe, wenn der Promise erfolgreich war. Sie nimmt eine Funktion entgegen die das Ergenis des Promises verarbeitet.

// : ----> ".catch()" - Methode wird aufgerufen, wenn der Promise abgelehnt wurde. Sie nimmt eine Funktion entgegen die den Fehler des Promise behandelt.

// ! === Lokale Daten Fetchen ===

fetch("./fakeData.json")
  // .then((response) => console.log(response)); // - Geht nicht weil die Daten in "body" sind aber kein Json format haben

  .then((response) => response.json()) // Hier wird die "response" in json gewandelt damit wir mit der  weiterarbeiten können
  .then((date) => console.log(date)) // Die JSON Datei befindet sich nun in "movieData" (moviedata ist frei wählbar)

  // - Fehler ist nun in error gespeichert
  .catch((error) => console.log("Fehler beim laden der JSON :(", error));

// ! === API Fetchen ===

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((singleProduct) => {
      let productItem = document.createElement("div");

      // Titel
      let titelProduct = document.createElement("h2");
      titelProduct.textContent = singleProduct.titel;
      productItem.appendChild(titelProduct);

      // Beschreibung
      let descripProduct = document.createElement("p");
      descripProduct.textContent = singleProduct.description;
      productItem.appendChild(descripProduct);

      // Preis
      let priceProduct = document.createElement("p");
      priceProduct.textContent = singleProduct.price + "€";
      productItem.appendChild(priceProduct);

      // Image
      let image = document.createElement("img");
      image.setAttribute("src", singleProduct.image);
      productItem.appendChild(image);

      // Button
      let moreInfoBtn = document.createElement("button");
      moreInfoBtn.textContent = "Mehr Infos";

      moreInfoBtn.addEventListener("click", () => {
        // console.log(`https://fakestoreapi.com/products/${singleProduct.id}`);
        fetch(`https://fakestoreapi.com/products/${singleProduct.id}`)
          .then((response) => response.json())
          .then((dataSingleFetch) => console.log(dataSingleFetch))

          .catch((error) => console.log("Fehler beim Single Fetch", error));
      });

      productItem.appendChild(moreInfoBtn);

      document.querySelector(".product").appendChild(productItem);
    });
  })
  .catch((error) => console.log("Fehler im gesamt Fetch", err)); // err ist frei wählbar
