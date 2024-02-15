// - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// - HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze zum Beispiel: getElementsByClassName, for-loop oder length.
// 1. Variable für alle example-classes mit getElementsByClassName
// 2. onclick myFunction() verknüpfen
// 3. myFunction () schreiben
//    a. for-loop
//    b. length

const exampleCollec = document.getElementsByClassName("example");
// const exampleNode = document.querySelectorAll(".example");
console.log(exampleCollec);
console.log(exampleCollec.length);
// console.log(exampleNode);
// console.log(exampleNode.length);

const myFunction = () => {
  for (let i = 0; i < exampleCollec.length; i++) {
    console.log("example-Position:", i);

    exampleCollec[i].classList.toggle("change-class");
    // exampleCollec[i].style.backgroundColor = "black";
  }
};
