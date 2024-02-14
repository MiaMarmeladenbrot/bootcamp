// ! onclick()
const sayHallo = () => {
  halloOutput.innerHTML = "Hallo vom Onclick";
};

// ! Event Listener
// statt onclick uä ins HTML einzufügen
// seit ES6 Standard, aber mit react brauchen wir wieder onclick und Co
// beobachtet konstant ein Element und was damit passiert
// enthält eine Funktion, die nur mit diesem Element und dem Event verbunden ist
// braucht eine Variable mehr, da wir nicht nur Output brauchen, sondern auch das HTML-Element, das wir beobachten wollen

// - click:
// Variable festlegen, damit er weiß, welches Element beobachtet werden soll (das haben wir vorher über eine Verknüpfung der Funktion im HTML gemacht)
const sayHiBtn = document.querySelector("#say-hi-btn");
// Variable fürs Output-Feld festlegen:
const halloOutput = document.querySelector("#hello-output");

// Aufbau:
// 1. Welches Element soll beobachtet werden?
// * sayHiBtn;

// 2. Event Listener hinzufügen
// * sayHiBtn.addEventListener();

// 3. Event definieren
// * sayHiBtn.addEventListener("click");
// gibt verschiedene andere Events wie mouseover
// click ist aber das häufigste

// 4. Definieren, was bei dem Event passieren soll durch callback-Function
// neue Schreibweise:
sayHiBtn.addEventListener("click", () => {
  halloOutput.innerHTML = "Hallo vom Event";
});

// alte Schreibweise:
// sayHiBtn.addEventListener("click", function () {
//   halloOutput.innerHTML = "Hallo vom Event";
// });

// - mouseover
// wenn die Maus darüber hovert
const textInput = document.querySelector("#text-input");
textInput.addEventListener("mouseover", () => {
  //   console.log("Die Maus wurde ins Feld bewegt");
  textInput.style.border = "3px solid red";
});

// - mouseout
// wenn die Maus das Element verlässt
textInput.addEventListener("mouseout", () => {
  //   console.log("Die Maus wurde rausbewegt");
  textInput.style.border = "3px solid blue";
});

// - onchange
// wenn sich der Zustand des Elements ändert
const selectInput = document.querySelector("#select-input");

selectInput.addEventListener("change", () => {
  console.log("Optionfeld wurde verändert");
  halloOutput.innerHTML = selectInput.value;
});

// ! Externer Event Listener
// Funktion aus Event Listener auslagern, um sie wiederverwendbar zu machen

// 1. Funktion schreiben
const inputFunc = () => {
  console.log("In mich wurde was eingetragen");
  halloOutput.innerHTML = textInput.value;
};

// 2. Funktion im Event Listener aufrufen, ohne Parameterklammern! Parameter werden beim Event Listener anders hinzugefügt, kommt später
// - input
textInput.addEventListener("input", inputFunc);

// ! Remove
// bei einem bestimmten Event etwas wieder entfernen
// funktioniert NUR, wenn die Funktion extern angelegt wurde
// wenn es eine anonyme callback-Function innerhalb des Event Listeners ist, geht es nicht
// hat Marzio noch nicht benutzt im wahren Leben

const submitBtn = document.querySelector("input[type='submit']");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("submit wurde geklickt, Event Listener wurde removed");

  // inputFunc soll nach dem Klick auf submit nicht mehr funktionieren, will diese Funktion, dieses Event entfernen, nachdem submit geklickt wurde:
  textInput.removeEventListener("input", inputFunc);
});

// ! Parameter im Event Listener
// callback-Function, die eine Funktion aufruft und die Parameter übergibt
// Funktion und Parameter werden aber erst in den geschweiften Klammern übergeben, nicht vorher!
const parameterBtn = document.querySelector("#param");

const parameterFunc = (a, b) => {
  console.log(a, b);
};

//* Das funktioniert leider nicht:
// parameterBtn.addEventListener("click", parameterFunc("Kuchen", "Trinken"));

// * So funktioniert's:
parameterBtn.addEventListener("click", () => {
  parameterFunc("Auto", "Haus");
});
