// # === API ===
// API = Application Programming Interface
// * Eine API ist eine schnittstelle zwischen front- und backend.
// * APIs komunuizieren in der regel mit dem Server, der wiederum mit den Daten Antwortet.

// ! === JSON ===
// * JSON ( Javascript Object Notation ) ist eine gäniger format um Daten zu speicher.
// * Unertztütz verschiedene Datentypen, wie zb String, Zahlen, Boolean, array, objekte
// * Objekte könnne Objekte beinhalten
// * Gibt es in verschiedenen Programmiersprachen
// * weit verbreitet
// * "JSON FORMATTER"

// So schaut ein JSON aus ( Wie ein objekt nur mit "key" auch in " ")
// {
//     "id": 1,
//     "name" : "Max"
// }

// ! === Promise & Fetchen ===
console.log(fetch("../fakeData.json"));
// * 1. ein fetch ist eine Promise

// * 2. eine promis ist ein Objekt
// - ----> A. eine Promis ist ein versprächen das den eventuellen Abschluss representiert. Der kann erfolgreich sein oder auch nicht -> ABERRR wir bekommen auf jeden fall was zurück (daten oder fehler)
// - ----> B. eine Promise hat drei zuistände:
// : ------> <pending> (wie haben noch kein antwort erhalten)
// : ------> <resolved> (Antowrt erhaltne, alles ging gut)
// : ------> <rejected> (Antwort erhalten, wir haben ein error bekommen)

// * 3. fetch ist asynchron, heißt es läuft parallel zu den anderen funktionen. Andere funktionen müssen daher nicht auf den fetch warten bis er fertig ist

// * 4. Eine Promise kann mit der Methode .then() und .catch() behandelt werden, um auf das ergebnis oder den fehler zu reagieren

// : -->(ging gut) ".then()" - Methode wird aufgerufen, wenn der Promis erfolgreich wurde. Sie nimmt eine Funktion entgegen die das Ergebnis des Promises verarbeitet.

// : -->(fehler bekommen) ".catch()" - Methode wir aufgerufen, wenn der Promise abggelehnt wurde. Sie nimmt eine Funktion engegen, die den Fehler des Promises behandelt

// ! === Lokale Daten Fetchen ===

fetch("../fakeData.json")
  // .then((response) => console.log(response)); // - Geht nicht weil die Daten im "body" sind aber kein Json format haben

  .then((response) => response.json()) // Hier wird die "response" in json gewandelt damit wir mit der weiterarbeiten können

  .then((movieData) => console.log(movieData)) // Die JSON Datei befindet sich nun in "movieData" (moviedata ist frei wählbar)

  // - Fehler ist nun in error gespeichert
  .catch((error) => console.log("Fehler beim laden der JSON :-(", error));

// ! === API Fetchen ===

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((singelProduct) => {
      // div
      let productItem = document.createElement("div");

      // Titel
      let titelProduct = document.createElement("h2");
      titelProduct.textContent = singelProduct.title;
      productItem.appendChild(titelProduct);

      // Beschreibung
      let descripProduct = document.createElement("p");
      descripProduct.textContent = singelProduct.description;
      productItem.appendChild(descripProduct);

      // Preis
      let priceProduct = document.createElement("p");
      priceProduct.textContent = singelProduct.price + "€";
      productItem.appendChild(priceProduct);

      // IMG
      let image = document.createElement("img");
      image.setAttribute("src", singelProduct.image);
      productItem.appendChild(image);

      //   Button
      let moreInfoBtn = document.createElement("button");
      moreInfoBtn.textContent = "Mehr infos";
      productItem.appendChild(moreInfoBtn);

      //   Eventlistener für btn
      moreInfoBtn.addEventListener("click", () => {
        fetch(`https://fakestoreapi.com/products/${singelProduct.id}`)
          .then((response) => response.json())
          .then((dataSingleFetch) => console.log(dataSingleFetch))
          .catch((error) => console.error("fehler beim single Fetch", error));
      });

      //   Fügt die divs mit den einzelnen produkten in das html
      document.querySelector(".product").appendChild(productItem);
    });
  })
  .catch((err) => console.error("Fehler in gesamt fetch", err)); //err ist frei wählbar

// fetch("link")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error("fehler beim fetch", err));
