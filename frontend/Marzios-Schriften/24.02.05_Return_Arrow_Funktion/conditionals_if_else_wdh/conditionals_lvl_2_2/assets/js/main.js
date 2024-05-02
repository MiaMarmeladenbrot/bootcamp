// function mit inline style auf dem body
// function checkAirQuality() {
//     // console.log("onchange works"); //nur zum testen ob die function onchange works
//     const outputAirQuality = document.body.querySelector('form label:first-of-type');
//     const inputAirQuality = Number(document.body.querySelector('form input[type="range"]').value);
//     const outputHealthConcern = document.body.querySelector('.outputHealthConcern');
//     const outputHealthEffect = document.body.querySelector('.outputHealthEffect');

//     // nur zum testen ob alle elemente richtig selektiert worden sind
//     // console.log(outputAirQuality);
//     // console.log(inputAirQuality);
//     // console.log(outputHealthConcern);
//     // console.log(outputHealthEffect);

//     // Hier geben wir nur die Luftqualität im Label aus
//     // mit textContent kann ich nur texte in elementen austauschen
//     outputAirQuality.textContent = "Luftqualität: " + inputAirQuality;
//     // Was bedeutet += in JS ?
//     // neuer value ist gleich alter value plus etwas neues


//     if (inputAirQuality <= 50) {
//         outputHealthConcern.textContent = "Good";
//         outputHealthEffect.textContent = "Little or no risk";
//         document.body.style.backgroundColor = "green";
//     } else if (inputAirQuality > 50 && inputAirQuality <= 100) {
//         outputHealthConcern.textContent = "Moderate";
//         outputHealthEffect.textContent = "Acceptable quality";
//         document.body.style.backgroundColor = "orange";
//     } else if (inputAirQuality > 100 && inputAirQuality <= 150) {
//         outputHealthConcern.textContent = "Unhealthy for sensitive groups";
//         outputHealthEffect.textContent = "Generable publics not likely affected";
//         document.body.style.backgroundColor = "red";
//     } else {
//         console.log("Fehler, Wert nicht messbar");
//     }
// }

// ==================================================================
//                  function mit classList auf dem body
// ==================================================================

function checkAirQuality() {
    // console.log("onchange works"); //nur zum testen ob die function onchange works
    const outputAirQuality = document.body.querySelector('form label:first-of-type');
    const inputAirQuality = Number(document.body.querySelector('form input[type="range"]').value);
    const outputHealthConcern = document.body.querySelector('.outputHealthConcern');
    const outputHealthEffect = document.body.querySelector('.outputHealthEffect');

    // nur zum testen ob alle elemente richtig selektiert worden sind
    // console.log(outputAirQuality);
    // console.log(inputAirQuality);
    // console.log(outputHealthConcern);
    // console.log(outputHealthEffect);

    // Hier geben wir nur die Luftqualität im Label aus
    // mit textContent kann ich nur texte in elementen austauschen
    outputAirQuality.textContent = "Luftqualität: " + inputAirQuality;
    // Was bedeutet += in JS ?
    // neuer value ist gleich alter value plus etwas neues


    if (inputAirQuality <= 50) {
        outputHealthConcern.textContent = "Good";
        outputHealthEffect.textContent = "Little or no risk";
        document.body.classList.add("bgColorGreen");
        document.body.classList.remove("bgColorRed", "bgColorOrange");

    } else if (inputAirQuality > 50 && inputAirQuality <= 100) {
        outputHealthConcern.textContent = "Moderate";
        outputHealthEffect.textContent = "Acceptable quality";
        document.body.classList.add("bgColorOrange");
        document.body.classList.remove("bgColorGreen", "bgColorRed");

    } else if (inputAirQuality > 100 && inputAirQuality <= 150) {
        outputHealthConcern.textContent = "Unhealthy for sensitive groups";
        outputHealthEffect.textContent = "Generable publics not likely affected";
        document.body.classList.add("bgColorRed");
        document.body.classList.remove("bgColorGreen", "bgColorOrange");

    } else {
        console.log("Fehler, Wert nicht messbar");
    }
}