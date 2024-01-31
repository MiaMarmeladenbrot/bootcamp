// ! if / else
// hatten bisher einen sehr linearen Code
// mit if/else haben wir die Möglichkeit, nur noch bestimmte Code-Blöcke ausführen zu lassen
// wenn User A das macht, mach das; wenn User B kommt, mach bitte etwas völlig anderes
// --> conditional (Bedingung) sind in der Programmierung die Möglichkeit, bestimmte Code-Blöcke auf Basis einer Bedingung auszuführen oder auch zu überspringen. Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst).
// weitere: switch & ternary operator

// * Grund-Syntax
// if(hier drin steht die Bedingung){ dieser Block wird dann ausgeführt, wenn die Bedingung true ist} else{dieser Block wird ausgeführt, wenn die Bedingung false ist}
// if würde auch allein funktionieren, aber else sollte trotzdem definiert sein, damit der User auch bei false ein Feedback erhält

// ? Wir benötigen für eine Bedingung in der Regel fast immer einen Vergleich (comparison).
// ? Das Ergebnis eines Vergleichs ist immer ein Boolean

// ! einfaches Beispiel if/else
let time = 9;
console.log(time >= 8); //true

if (time >= 8) {
  console.log("Ich führe das If aus, weil mein Vergleich true ist");
} else {
  console.log("Ich führe das else aus, weil mein Vergleich false ist.");
}

// ! Komplexeres Beispiel if/else if/else
let salary = 5000;
if (salary <= 1000) {
  console.log("Du verdienst wenig.");
} else if (salary <= 1500) {
  //man kann noch mehr "else if" einfügen, unbegrenzte Zahl möglich; es kann aber immer nur ein Block ausgeführt werden und zwar der erste, der true ist, nachfolgende trues werden ignoriert
  console.log("Du verdienst gut.");
} else if (salary <= 2000) {
  console.log("Du bist Spitzenverdiener.");
} else if (salary <= 4000) {
  console.log("Gehalt to the moon");
} else {
  console.log("Gehalt nicht mehr messbar #Elon");
}

let schuelerPunkte = 60;
if (schuelerPunkte <= 20) {
  console.log("Die Note 6");
} else if (schuelerPunkte <= 40) {
  console.log("Die Note 5");
} else if (schuelerPunkte <= 60) {
  console.log("Die Note 4");
} else if (schuelerPunkte <= 70) {
  console.log("Die Note 3");
} else if (schuelerPunkte <= 90) {
  console.log("Die Note 2");
} else {
  console.log("Die Note 1");
}

// ! logical operators
// Es gibt zwei logical operators:
// && operator --> das logische und, hier müssen beide Bedingungen true sein
// || operator --> das logische oder, hier muss nur eine der beiden Bedingungen true sein (entweder oder)

// ? Beispiel 1: 2 Werte vergleichen:
let numOne = 5;
let numTwo = 9;

console.log("%c=========", "color:tomato");
// let numOne = "5";
// let numTwo = "8";
console.log(numOne == 5); // true, weil Wert gleich
console.log(numOne === 5); // false, weil Datentyp anders
console.log(numTwo == 8); // true, weil Wert gleich
console.log(numTwo === 8); // false, weil Datentyp anders

console.log("%c=========", "color:tomato");

console.log(numOne === 5 && numTwo === 8); // false, weil eine Bedingung falsch ist
console.log(numOne === 5 || numTwo === 8); //true, weil eine Bedingung stimmt

// ? Beispiel 2: Range aufbauen:
let geschwindikeit = 100;
if (geschwindikeit <= 100 && geschwindikeit >= 80) {
  console.log("Du fährst schnell.");
} else if (geschwindikeit < 80 && geschwindikeit >= 50) {
  console.log("Du fährst normal.");
} else if (geschwindikeit < 50 && geschwindikeit >= 20) {
  console.log("Du fährst langsam.");
} else {
  console.log("Deine Geschwindigkeit ist nicht messbar.");
}

// ! Altersabfrage - Beispiel:
function checkAge() {
  // alles aus dem html wird als string ausgegeben, auch wenn der input number ist; dh die eingegebene Zahl des Users ist deshalb ein string und keine number
  // mit Number() wird aus einem string eine number (type conversion in JS); die kann ich auch direkt in einer Variable mitdefinieren und so automatisch immer aus dem eingegebenen html des Users eine number machen:
  const userAge = Number(
    document.body.querySelector("form input:first-of-type").value
  );

  console.log(userAge);

  if (userAge < 18) {
    console.log("Du kommst hier nicht rein");
  } else {
    console.log("Willkommen im Club");
  }

  // Alternativ, falls Number() nicht in Konstante definiert ist, kann sie auch in der if-Bedingung eingebaut werden:
  // if (Number(userAge) < 18) {
  //   console.log("Du kommst hier nicht rein");
  // } else {
  //   console.log("Willkommen im Club");
  // }
}

// ! Fake-Login - Beispiel:
// fake Datenbank:
const fakeDbUserEmail = "hakan@super-code.de";
const fakeDbPassword = "hakan123";
let falseLogin = 1;

function login() {
  // console.log("func login works");

  const inputEmail = document.body.querySelector("#email").value;
  const inputPassword = document.body.querySelector("#password").value;
  // console.log(inputEmail);
  // console.log(inputPassword);

  if (falseLogin < 5) {
    // if-Bedigung innerhalb der if-Bedingung beginnt:
    if (inputEmail === fakeDbUserEmail && inputPassword === fakeDbPassword) {
      console.log("Login erfolgreich");
    } else {
      console.log("Sie haben noch " + (5 - falseLogin) + " Versuche.");
      ++falseLogin;
      console.log("Email und/oder Passwort falsch");
    }
    // erste if-Bedingung wird weitergeführt:
  } else {
    console.log(
      "Sie haben sich " +
        falseLogin +
        " Mal falsch eingeloggt, bitte wenden Sie sich an den Admin."
    );
  }
}
