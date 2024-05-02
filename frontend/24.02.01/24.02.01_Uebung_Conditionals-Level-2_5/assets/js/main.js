// - Schreibe eine Funktion, um Daten über die Bundesländer zu erhalten.
// - Nutze dafür das vorgegebene HTML und CSS, und lasse dir mit switch, case, break und default die Textschnipsel (auch im Code-Snippet) ausgeben.

function check() {
  // Variable input-Feld deklarieren:
  const inputBundesland = document.body.querySelector("#bundeslandInfo").value;

  // Variable output im div-Container deklarieren:
  const outputBundesland = document.body.querySelector(
    "#bundeslandInfoErgebnis"
  );

  // wenn inputBundesland den jeweiligen case erfüllt, dann soll der Text im div-Container erscheinen:
  switch (inputBundesland) {
    case "Baden-Württemberg":
      outputBundesland.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;

    case "Bayern":
      outputBundesland.innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;

    case "Berlin":
      outputBundesland.innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;

    case "Brandenburg":
      outputBundesland.innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;

    case "Bremen":
      outputBundesland.innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      outputBundesland.innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;

    case "Hessen":
      outputBundesland.innerHTML =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;

    case "Mecklenburg-Vorpommern":
      outputBundesland.innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;

    case "Niedersachsen":
      outputBundesland.innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      outputBundesland.innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Rheinland-Pfalz":
      outputBundesland.innerHTML =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    case "Saarland":
      outputBundesland.innerHTML =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;

    case "Sachsen":
      outputBundesland.innerHTML =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;

    case "Sachsen-Anhalt":
      outputBundesland.innerHTML =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;

    case "Schleswig-Holstein":
      outputBundesland.innerHTML =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;

    case "Thüringen":
      outputBundesland.innerHTML =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;

    default:
      outputBundesland.innerHTML =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
  }
}
