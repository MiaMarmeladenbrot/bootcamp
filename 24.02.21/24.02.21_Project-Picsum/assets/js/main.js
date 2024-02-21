// - Für dieses Projekt verwendest du die API von Picsum, um eine Galerie zu erstellen.
// - Diese beiden Links sind wichtig für die Umsetzung, schau sie dir an:
//     - [picsum](https://picsum.photos/)
//     - [picsum list](https://picsum.photos/v2/list/)

// 1. gesamtes json fetchen (response, data, error)
// 2. im zweiten then einzelne Daten fetchen
//      a. forEach()
//      b. div für Ausgabe aller kreierten Elemente erstellen
//      c. Elemente kreieren (img, urheber, button --> a-tag, siehe d)
//      d. EventListener mit fetch auf den Button mit Weiterleitung zur URL des img --> zu kompliziert gedacht, statt Button besser a-tag mit url als href-Attribut
//      e. div ins HTML schreiben (output-section)

// * gesamtes json fetchen:
fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    // checken, ob fetch läuft:
    // console.table(data);

    // * über items im fetch iterieren:
    data.forEach((singleImg) => {
      // checken, ob iterieren über json läuft:
      //   console.log(singleImg);

      // * Produkte fürs HTML erstellen:
      // - Ausgabe-div erstellen:
      let imgOutput = document.createElement("div");

      // - img aus json ins HTML:
      //   console.log(singleImg.download_url);
      let image = document.createElement("img");
      image.setAttribute("src", singleImg.download_url);
      image.setAttribute("alt", `Author of image: ${singleImg.download_url}`);
      imgOutput.appendChild(image);

      // - author aus json ins HTML:
      // console.log(singleImg.author);
      let author = document.createElement("p");
      author.textContent = singleImg.author;
      imgOutput.appendChild(author);

      // - a-Tag ins HTML:
      let seeMoreBtn = document.createElement("a");
      seeMoreBtn.textContent = "See more";
      seeMoreBtn.setAttribute("href", singleImg.url);
      imgOutput.appendChild(seeMoreBtn);

      // - alles ins HTML section .output schreiben:
      document.querySelector(".output").appendChild(imgOutput);
    });
  })

  .catch((err) => console.log(err));

// ! =================================
// * Lösungsidee mit download-url:
// download-URL: https://picsum.photos/id/7/4728/3168
//   fetch(`https://picsum.photos/id/${singleImg.id}/${singleImg.width}/${singleImg.height}`)
// --> falscher Link!

// * Lösungsidee mit Button & EventListener:
// Button ins HTML:
//   let seeMoreBtn = document.createElement("button");
//   seeMoreBtn.textContent = "See more";
//   imgOutput.appendChild(seeMoreBtn);

// EventListener auf den Button legen:
// seeMoreBtn.addEventListener("click", () => {
//     // testen, ob unsplash-url angesprochen wird:
//     // console.log(singleImg.url);

//     fetch(singleImg.url)
//       .then((res) => res.json())
//       .then((url) => console.log(url))
//       .catch((err) => console.log("Fehler beim single Fetch", err));
//   });
// --> geht nicht, weil CORS, mehr dazu: https://sentry.io/answers/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-error-while-postman-does-not/
