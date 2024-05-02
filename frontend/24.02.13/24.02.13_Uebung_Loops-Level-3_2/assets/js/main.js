// - Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// - Schreibe das Ergebnis in dein HTML.
// - Das Array findest du im Code-Snippet!

let numArr = [5, 22, 15, 100, 55];
const result = document.querySelector("p");

// zuerst: loop, um Werte im array einzeln anzusprechen:
for (
  i = 0; // damit wir an 0. Position im array starten
  i < numArr.length; // damit Loop stoppt, sobald letzte Position im array erreicht wurde
  i++ // damit wir Loop durchlaufen
) {
  // dann: loop, um einzelne Werte/Indexe auf Teilbarkeit zu testen:
  for (
    j = 2; // j steht für den Nenner, durch den geteilt wird; bei 2 anfangen, damit "außer durch eins" gegeben ist
    j < numArr[i]; // j muss kleiner als index-Wert im array sein, damit "außer durch sich selbst" gegeben ist und der Loop stoppt, bevor er index-Wert erreicht
    j++ // damit alle Werte ab j=2 nacheinander durchlaufen werden, bis eine Stelle vor dem jeweiligen index-Wert erreicht ist
  ) {
    // falls die Zahl (numArr[i]) durch etwas anderes als 1 und sich selbst teilbar ist (Modulor muss also 0 sein), soll die Zahl (numArr[i]) gemeinsam mit dem Nenner (j) und dem Ergebnis (numArr[i] / j) im HTML ausgegeben werden:
    if (numArr[i] % j === 0) {
      result.innerHTML += `${numArr[i]} is devidable by ${j}. The result is ${
        numArr[i] / j
      }  <br>`;
      // if( Zahl % Nenner === 0){
      // HTML += Zahl is devidable by Nenner. The result ist Zahl / Nenner.
      // }
    }
  }
}
