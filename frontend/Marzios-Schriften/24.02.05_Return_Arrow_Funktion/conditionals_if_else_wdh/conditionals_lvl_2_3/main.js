// # ✅ Aufgabenstellung
// - Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// - Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// - Lass dir das Ergebnis in der Konsole ausgeben.
// - Teste die Nummern: 35, 74, 123.

function checkNumber(testNumber) {
    if (testNumber > 27) {
        let differenz = testNumber - 27;
        console.log(differenz * 2);
        console.log("Zahl ist größer als 27");
    } else {
        console.log("Zahl ist kleiner als 27 und das Programm wird beendet");
    }
}

checkNumber(35);
checkNumber(74);
checkNumber(123);
checkNumber(12);