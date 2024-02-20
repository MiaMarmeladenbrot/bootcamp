// - Schreibe eine Funktion, die sich Daten aus dem Browser zieht und diese anzeigt. Schaue dir zum besseren Verstädnis die Vorschau an.
// - Recherchiere nach dem Begriff “Window Navigator”. Dann kannst du die Aufgabe lösen.
// - Hole dir die Informationen über den Browser wie folgt:  \- Browsername  \- Betriebssystem-Architektur  \- Browser-Version  \- Window Auflösung  \- Innenhöhe und -breite des Dokuments  \- colorDepth  \- pixelDepth

// window.navigator anschauen:
console.dir(window.navigator);
console.log(window.navigator.appName);
console.log(window.navigator.platform);
console.log(window.navigator.appVersion);

console.dir(window);

// Variablen festlegen:
const btn = document.querySelector("button");
const output = document.querySelector(".output");

// Funktion:
btn.addEventListener("click", () => {
  // console.log("läuft");
  // output.innerHTML = "Test";
  output.innerHTML = `
  <p>Browsername: ${window.navigator.appName}</p>
  <p>Betriebssystem-Architektur: ${window.navigator.platform}</p>
  <p>Browser Version: ${window.navigator.appVersion}</p>
  <p>Innere Breite des Dokuments: ${window.innerWidth}</p>
  <p>Dokument Innenhöhe: ${window.innerHeight}</p>
  <p>Color Depth: ${screen.colorDepth}</p>
  <p>Pixel Depth: ${screen.pixelDepth}</p>

  `;
});

// # Aber: Warning:
// The information from the navigator object can often be misleading.
// The navigator object should not be used to detect browser versions because:
// Different browsers can use the same name
// The navigator data can be changed by the browser owner
// Some browsers misidentify themselves to bypass site tests
// Browsers cannot report new operating systems, released later than the browser
