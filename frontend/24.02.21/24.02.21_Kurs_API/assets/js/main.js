// # API
// = application programming interface
// Schnittstelle zwischen Front- und Backened
// kommunizieren idR mit dem Server, der wiederum mit den Daten antwortet
// jede API ist anders aufgebaut
// um sie zu nutzen, Dokumentation checken, wie API aufgebaut ist und wie ich sie nutze

// ! JSON
// = JavaScript Object Notation
// gängiges Format, um Daten zu speichern
// unterstützt verschiedene Datentypen, wie zB strings, numbers, booleans, arrays, objects
// hierarchische Struktur, kann tief verschachtelt werden, Objekte in Objekten
// großer Vorteil: gibt es in allen gängigen Programmiersprachen
// sehr weit verbreitet
// Plugin für Chrome: JSON FORMATTER

// * Syntax: meist array außenrum, darin Objekt mit keys und values in "":
// [
//   {
//    "Title": "Avatar",
//     "Year": "2009",
//   },
// ];

// ! Promise & fetchen
// * fetch = promise
// * promise = Objekt
// ein Versprechen, dass wir irgendwann etwas zurückbekommen - entweder einen Fehler oder die Daten
// muss aber nicht sofort sein, kann auch zu einem späteren Zeitpunkt sein
// kann 3 Zustände haben:
// 1. <pending> => noch keine Antwort erhalten
// 2. <resolved> => Antwort erhalten, alles ging gut
// 3. <rejected> => Antwort erhalten, Fehler

console.log(fetch("./fakeData.json"));

// * fetch ist asynchron
// heißt, es läuft, aber parallel zu den anderen Funktionen, andere Funktionen müssen daher nicht auf den fetch warten, bis er fertig ist.
// falls eine andere Funktion mit den Daten aus dem fetch arbeiten soll, kann das aber zu einem Fehler führen (idR "map is not a function"), dann sollte ein ternary in diese Funktion, der sie nur ausführen lässt, wenn die Daten vorhanden sind

// * .then() & catch()
// mit diesen Methoden kann auf das Ergebnis oder den Fehler reagiert werden
// ähnlich wie if/else: if = .then() und else = .catch()
// .then() --> wird aufgerufen, wenn wir resolved erhalten: nimmt eine Funktion entgegen, die das Ergebnis des Promise verarbeitet
// .catch() --> wird aufgerufen, wenn wir rejected erhalten: nimmt eine Funktion entgegen, die den Fehler des Promise behandelt

// ! Lokale Daten fetchen
fetch("./fakeData.json")
  // .then((response) => console.log(response)); --> geht nicht, weil die Daten im "body" sind, aber kein Json-Format haben

  // braucht idR 2 then() und 1 catch():
  .then((response) => response.json()) //--> "response" ins json-Format umwandeln, damit wir damit weiterarbeiten können; response ist frei wählbarer Name

  .then((date) => console.log(date)) //--> json-Datei befindet sich nun hinter "date", damit kann ich mir jetzt die Daten holen; date ist frei wählbarer Name

  .catch((error) => console.error("Fehler beim Laden :(", error)); //--> falls wir einen Fehler bekommen, wird diese Nachricht ausgegeben; error ist frei wählbarer Name

// ! Externe Daten/ API fetchen
// Syntax:
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((itemData) => console.log(itemData))
  .catch((error) => console.log("Fehler beim Laden :(", error));

// ! Schleife auf API -> einzelne Daten rausgeben lassen & ins HTML schreiben
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((singleProduct) => {
      //   console.log(singleProduct); //--> jedes einzelne Produkt-Objekt
      //   console.log(singleProduct.title); //--> jeder einzelne Produktname
      //   console.log(singleProduct.price); //--> jeder einzelne Preis

      // * Produkte im HTML anzeigen:
      // - div erstellen
      let productItem = document.createElement("div");

      // - h2 für Titel erstellen
      let titelProdukt = document.createElement("h2");
      titelProdukt.textContent = singleProduct.title;
      productItem.appendChild(titelProdukt);

      // - p für Beschreibung erstellen
      let descripProdukt = document.createElement("p");
      descripProdukt.textContent = singleProduct.description;
      productItem.appendChild(descripProdukt);

      // - p für Preis erstellen
      let priceProdukt = document.createElement("p");
      priceProdukt.textContent = singleProduct.price + " €";
      productItem.appendChild(priceProdukt);

      // - img erstellen
      let image = document.createElement("img");
      image.setAttribute("src", singleProduct.image);
      productItem.appendChild(image);

      // - alles, was wir vorher ins div hinzugefügt haben, hier in die HTML-Section schreiben
      //   (damit wir die Produktbeschreibung bei Klick auf den entsprechenden Button später einfacher fetchen können, lieber mit appendChild als mit innerHTML, denn da bräuchten wir dann jedes Mal die ID des Produkts, um den Button individuell klickbar zu machen):
      document.querySelector(".product").appendChild(productItem);

      // * Produktdetails bei Klick aufs Produkt ausgeben:
      // - Button mit appendChild ergänzen, damit er im HTML ausgegeben wird:
      let moreInfoBtn = document.createElement("button");
      moreInfoBtn.textContent = "More info";
      productItem.appendChild(moreInfoBtn);

      // - EventListener auf den Button setzen:
      moreInfoBtn.addEventListener("click", () => {
        // testen, dass wir die ID jedes Produkts ansprechen:
        console.log(`Produkt mit der ID ${singleProduct.id} wurde angeklickt`);
        // testen, dass wir immer die URL der jeweiligen ID ansprechen:
        console.log(`https://fakestoreapi.com/products/${singleProduct.id}`);

        // - Fetch im Fetch bei Klick auf Button:
        // einzelne Produktdaten, die hinter der Id liegen, fetchen und in Konsole ausgeben:
        fetch(`https://fakestoreapi.com/products/${singleProduct.id}`)
          .then((response) => response.json())
          .then((dataSingleFetch) => console.log(dataSingleFetch))
          .catch((error) => console.log("Fehler beim single Fetch", error));
      });
    });
  })
  .catch((error) => console.error("Fehler beim gesamten Fetch :(", error));
