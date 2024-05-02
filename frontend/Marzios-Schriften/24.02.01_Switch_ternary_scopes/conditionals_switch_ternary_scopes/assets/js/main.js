// ================================
//          conditionals 2
// ================================

// ================================
//              scopes
// ================================

// der global definiert sich dadurch das es direkt im JS dokument definiert wird, ohne in irgendwelchen funktionen, methoden, etc. definiert wird
const inWelchemScopeBefindeIchMich = "global scope";

var number1 = 30;
function showMeScope() {
    const welcherScopeIstHier = "localFunction scope";
    console.log(inWelchemScopeBefindeIchMich);
    console.log(welcherScopeIstHier);
    var number1 = 50;
    console.log(number1);
}
showMeScope();
console.log(number1);

//console.log(welcherScopeIstHier); //uncaught referenceError --> die variable/konstante wurde nicht gefunden 
let number = 10;

if (inWelchemScopeBefindeIchMich === "global scope") {
    const undWoBefindeIchMich = "localBlock scope";
    console.log(inWelchemScopeBefindeIchMich);
    let number = 5;
    console.log(number);
} else {
    let number = 50;
}

console.log(number);

//console.log(undWoBefindeIchMich); //uncaught referenceError --> die variable/konstante wurde nicht gefunden

console.clear();

// ================================
//             switch
// ================================

// switch & ternary operator
// Wo ist der unterschied zwischen if/else, switch & ternary ?
// if/else --> flexibelste, komplexe bedingungen möglich
// switch --> einfacher, übersichtler, zum vergleich von einem wert
// ternary --> sehr kurze syntax, für einfach bedingungen geeignet

// ================================
//        grundsyntax switch
// ================================

switch ("burger") { //bedingung kann zb ein string, number oder variable sein
    case "bedingung": //case wird mit der bedingung im switch verglichen
        //was soll gemacht werden , wenn case true ist (stimmt überein mit switch bedingung)
        console.log("case === bedingung");
        break; //hiermit steigt man aus einem case wieder aus --> WICHTIG!!!!!
    case "pizza":
        console.log("case === pizza");
        break;
    default: //wie else
        console.log("case stimmt nicht mit bedingung im switch überein");
}

// Aufgabe für Uns --> Muss ich heute arbeiten oder habe ich frei ????

let today = "Kuchen";

if (
    today === "Montag" ||
    today === "Dienstag" ||
    today === "Mittwoch" ||
    today === "Donnerstag" ||
    today === "Freitag"
) {
    console.log("Heute musst du arbeiten");
} else if (
    today === "Samstag" ||
    today === "Sonntag"
) {
    console.log("Hoch die Hände Wochenende");
} else {
    console.log("Wochentag gibt es nicht");
}

// ===================================
//      Micha's pro lösung
// ===================================
// Hier wichtig das der User keine freie eingabe tätigen kann --> hier sollte eine Liste mit Wochentage vorgegeben sein
if (today !== "Samstag" || today !== "Sonntag") {
    console.log("Du musst arbeiten")
} else {
    console.log("Wochentag gibt es nicht")
}
// ===================================
//      Micha's pro lösung
// ===================================


function hallo(wochentag) {
    switch (wochentag) {
        case "Montag":
            console.log("Hey es ist montag");
            break;
        case "Dienstag":
        case "Mittwoch":
        case "Donnerstag":
        case "Freitag":
            console.log("Du musst heute arbeiten");
            break;
        case "Samstag":
        case "Sonntag":
            console.log("Du hast heute frei");
            break;
        default:
            console.log("Wochentag gibt es nicht");
    }
}
hallo("Montag");

// switch nutzt den strict equal operator (===) zum vergleich im hintergrund für uns

// =============================
//      ternary operator
// =============================
// wird als oneliner geschrieben und gibt einen wert zurück
// wird richtig interessant bei react
// super für ja/nein abfrage

// =============================
//   syntax ternary operator
// =============================
// "bedingung" ? "wenn bedingung true" : "wenn bedingung false";
// ternary braucht immer einen true und einen false wert

// unterschied if/else & ternary

let zahl = 6;

// console.log(zahl % 2); //1
// console.log(zahl % 6); //1
// console.log(zahl % 4); //3

if (zahl % 2 === 0) {
    console.log(zahl + " ist gerade.")
} else {
    console.log(zahl + " ist ungerade.")
}

const evenOrNot = zahl % 2 === 0 ? zahl + " ist gerade" : zahl + " ist ungerade";
console.log(evenOrNot);


let today2 = "Montag"
// BITTE NICHT MACHEN, DANKE <3
const wochentag = today2 === "Montag" ? "Es ist Montag" :
    today2 === "Dienstag" ? "Es ist Dienstag" :
        today2 === "Mittwoch" ? "Es ist Mittwoch" : null;
// null --> nichts, leer
console.log(wochentag);