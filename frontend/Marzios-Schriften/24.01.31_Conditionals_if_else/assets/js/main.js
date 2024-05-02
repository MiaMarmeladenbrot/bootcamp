// =============================
//          if / else
// =============================
// conditional (Bedingung) sind in der Programmierung die Möglichkeit, bestimmte Code-Blöcke auf Basis einer Bedingung auszuführen oder auch überspringen zu lassen. Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst)
// 2. switch --> vllt heute, sonst morgen
// 3. ternary operator --> heute nicht, später im kurs

// =============================
//          Grundsyntax
// =============================

// if(hier drin steht die bedingung) {
// dieser block wird ausgeführt wenn die bedingung true ist
// } else { 
// dieser block wird ausgeführt wenn die bedingung false ist
// }

//!!! Wir benötigen für eine Bedingung, in der regel, fast immer einen vergleich (comparison) !!!
// Das Ergebnis eines Vergleichs ist immer ein Boolean (true || false)
let time = 9;

console.log(time >= 8); //true

if (time >= 8) {
    console.log("Ich führe das if aus, weil mein vergleich true ist");
} else {
    //else ist als ausschlussfall, wenn keine bedingung true ist
    console.log("Ich führe das else aus, weil mein vergleich false ist");
}

let salary = 2000;

if (salary <= 1000) {
    console.log("Steuersatz 10%");
} else if (salary <= 1500) {
    console.log("Steuersatz 15%");
} else if (salary <= 2000) {
    console.log("Steuersatz 20%");
} else if (salary <= 4000) {
    console.log("Steuersatz 50%");
} else {
    console.log("Gehalt nicht mehr messbar #Elon");
}

let schuelerPunkte = 50;

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

// =============================
//      logical operators
// =============================
// Es gibt 2 logical operators:
//  && operator --> logische und, hier müssen beide bedingungen true sein
//  || operator --> logische oder, hier muss nur eine der beiden bedingungen true sein
// mac: opt + 7 //windoof: alt+gr + <
//  ! operator --> logische nein --> am comparison tag gemacht

let numOne = "5";
let numTwo = "8";

console.log("%c==========", "color:tomato")
console.log(numOne == 5); //true
console.log(numOne === 5); //false
console.log(numTwo == 8); //true
console.log(numTwo === 8); //false
console.log("%c==========", "color:tomato")

console.log(numOne === 5 && numTwo == 8); //false
console.log(numOne == 5 || numTwo === 8); //true

// Warum immer am besten mit === vergleiche und nicht mit nur == ?
// Weil die === einen stabileren und robusteren Code bauen, weil wir hier im strikten vergleich sind. Dadurch erlauben wir dem Code weniger freiraum für interpretation durch user eingaben und datentypen.

let geschwindigkeit = 100;

if (geschwindigkeit <= 100 && geschwindigkeit >= 80) {
    console.log("Du fährst schnell");
} else if (geschwindigkeit < 80 && geschwindigkeit >= 50) {
    console.log("Du fährst normal");
} else if (geschwindigkeit < 50 && geschwindigkeit >= 20) {
    console.log("Du fährst langsam");
} else {
    console.log("Deine Geschwindigkeit ist nicht messbar!");
}

// =============================
//         altersabfrage
// =============================

function checkAge(event) {
    event.preventDefault();
    // auch wenn ich ein input number habe, bekomme ich im JS immer einen string raus
    const userAge = Number(document.body.querySelector("form input:first-of-type").value);
    console.log(typeof userAge);
    // dies ist eine typ conversion in JS und macht in diesem fall aus einem string eine number
    console.log(userAge);

    if (userAge < 18) {
        console.log("Du kommst nicht rein");
    } else {
        console.log("Willkommen im Club");
    }
}

// =============================
//         fake login
// =============================

// fake datenbank
const fakeDbUserEmail = "hakan@super-code.de";
const fakeDbPassword = "hakan123";
let falseLogin = 1;

function login() {
    const inputEmail = document.body.querySelector("#email").value;
    const inputPassword = document.body.querySelector("#password").value;

    // console.log(inputEmail);
    // console.log(inputPassword);

    // prüft ob der counter (falseLogin) kleiner 5 ist, wenn der counter dann die 5 erreicht, wird das else ausgeführt
    if (falseLogin < 5) {
        // dieses if befindet sich im if mit der prüfung des counters (falselogin) und prüft ob die eingabe des users mit dem aus unserer fake datenbank übereinstimmen
        if (inputEmail === fakeDbUserEmail && inputPassword === fakeDbPassword) {
            // wird ausgeführt wenn die daten übereinstimmen
            console.log("Erfolgreich eingeloggt");
        } else {
            // wird ausgeführt wenn die daten nicht übereinstimmen

            // hier nur die ausgabe wieviele versuche der user noch hat
            console.log("Sie haben noch " + (5 - falseLogin) + " versuche");
            // counter (falselogin) wird hochgezählt, damit das erste if irgendwann, in das else springen kann
            ++falseLogin;
            console.log("Email und/oder Passwort falsch");
        }
        // dies ist das else was mit dem if zusammenhängt, welches den counter (falselogin) prüft
    } else {
        console.log("Sie haben sich " + falseLogin + " falsch eingeloggt, bitte wenden Sie sich an den Admin");
    }
}