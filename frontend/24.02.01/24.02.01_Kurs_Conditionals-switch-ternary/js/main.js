// ! Conditionals 2

// ! Scope
// der global scope definiert sich dadurch, dass er direkt im JS-Dokument definiert wird, ohne in irgendwelchen Funktionen/Methoden/etc. zu liegen
// eine global scope variable kann überall aufgerufen werden, egal wie weit ich reinnavigiere:
const inWelchemScopeBefindeIchMich = "global scope";

// local function scope wird innerhalb einer Funktion definiert und kann nur innerhalb dieser aufgerufen werden:
function showMeScope() {
  const welcherScopeIstHier = "localFunction scope";
  // diese Variable gilt nur innerhalb der function, also innerhalb der geschweiften Klammern der Function

  console.log("inWelchemScopeBefindeIchMich");
  // darauf kann ich hier zugreifen, weil diese Variable global definiert wurde
  console.log(welcherScopeIstHier);
  // darauf kann ich hier zugreifen, weil diese Variable innerhalb der Funktion definiert wurde
}

showMeScope();

//* console.log(welcherScopeIstHier);
// uncaught referenceError, weil diese Variable nicht im global definiert ist, sondern nur innerhalb der Funktion showMeScope()

if (inWelchemScopeBefindeIchMich === "global scope") {
  const undWoBefindeIchMichJetzt = "localBlock scope";
  // diese Variable gilt nur für die if-Bedingung, also innerhalb der geschweiften Klammern des if

  console.log("inWelchemScopeBefindeIchMich");
  // darauf kann ich hier zugreifen, weil diese Variable global definiert wurde
  console.log(undWoBefindeIchMichJetzt);
  // darauf kann ich hier zugreifen, weil diese Variable innerhalb der if-Bedingung definiert wurde
}

//* console.log(undWoBefindeIchMichJetzt);
// uncaught referenceError, weil diese Variable nicht im global definiert ist, sondern nur innerhalb der if-Bedingung

// ! switch & ternary
// Unterschied zw. if/else, switch, ternary:
// - if/else: flexibelste, komplexe Bedingungen
// - switch : einfacher, übersichtlicher, eignet sich zum Vergleich von einem Wert; nutzt den strict equal operator; Vergleich findet zwischen switch und case statt; ist nett, hat aber nicht mehr den Riesenanwendungsbereich; gut für schnelle, kleine Vergleiche, aber damit würde Steffen nicht die komplette Logik seines Programms aufbauen
// - ternary: sehr kurze Syntax, nur für einfache Bedingungen; vergleicht, ob etwas richtig oder falsch ist; kann auch mehrere Sachen vergleichen, aber das sollte man tunlichst vermeiden; braucht zwangsläufig IMMER einen false-Wert, es muss immer 2 Werte geben (zweiter kann aber auch "null" sein, ist aber kein guter Code)

// ! switch
// * Grundsyntax:
switch (
  "bedingung" //Bedingung kann zB string, number, variable sein
) {
  case "bedingung": //case wird mit der Bedingung im switch verlgichen
    // was soll gemacht werden, wenn case true ist, dh case stimmt mit switch-Bedingung überein:
    console.log("case === bedingung");
    break; // mit break steigt man aus einem case wieder aus --> WICHTIG!
  case "pizza":
    console.log("case === pizza");
    break;
  default: //wie else, Ausschlussfall
    console.log("case stimmt nicht mit Bedigung im switch überein");
}

// * Beispiel: Muss ich arbeiten oder nicht?
let today = "Montag";

//? if/else-Lösung:
if (
  today === "Montag" ||
  today === "Dienstag" ||
  today === "Mittwoch" ||
  today === "Donnerstag" ||
  today === "Freitag"
) {
  console.log("Heute musst du arbeiten.");
} else if (today === "Samstag" || today === "Sonntag") {
  console.log("Hoch die Hände, Wochenende!");
} else {
  console.log("Wochentag gibt es nicht.");
}

//? switch-Lösung:
switch (today) {
  case "Montag":
    console.log("Hey, es ist Montag.");
  // dieser Satz wird in der Konsole ausgespielt, aber der switch wird noch nicht gestoppt, deshalb wird auch das nächste console.log ausgespielt; erst danach folgt ein break und der switch stoppt
  case "Dienstag":
  case "Mittwoch":
  case "Donnerstag":
  case "Freitag":
    console.log("Du musst arbeiten.");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Du hast frei.");
    break;
  default:
    console.log("Wochentag gibt es nicht.");
}

// * Michas Lösung
// Hier ist wichtig, dass der User keine freien Eingaben tätigen kann, weil auch bei Eingabe "Kuchen" dann das if zutreffen würde; idealerweise gibt man eine Liste mit Wochentagen vor, aus denen der User auswählen kann
if (today !== "Samstag" || today !== "Sonntag") {
  console.log("Du musst arbeiten.");
} else {
  console.log("Wochentag gibt es nicht.");
}

// ! ternary
// wird als oneliner geschrieben
// gibt einen Wert zurück
// wird richtig interessant bei react
// * Grundsyntax:
// * "bedingung" ? "wenn bedingung true" : "wenn bedingung false"
// Unterschied if/else und ternary
let zahl = 7;

if (zahl % 2 === 0) {
  console.log(zahl + " ist gerade");
} else {
  console.log(zahl + " ist ungerade");
}

const evenOrNot =
  zahl % 2 === 0 ? zahl + " ist gerade" : zahl + " ist ungerade";
// ternary gibt einen Wert zurück und damit ich einen Wert speichern kann, muss ich ihm eine Variable zuweisen; deshalb wird einem ternary-Vergleich idR immer eine Variable zugewiesen
console.log(evenOrNot);

// kann mit ternary auch mehrere Sachen vergleichen und bei false dann "null" festlegen, aber unübersichtlich und weniger logisch/einfach als if/else oder switch
// # bitte nicht so:
let today2 = "Montag";
const wochentag =
  today2 === "Montag"
    ? "Es ist Montag"
    : today2 === "Dienstag"
    ? "Es ist Dienstag"
    : today2 === "Mittwoch"
    ? "Es ist Mittwoch"
    : today2 === "Donnerstag"
    ? "Es ist Donnerstag"
    : null;
console.log(wochentag);
