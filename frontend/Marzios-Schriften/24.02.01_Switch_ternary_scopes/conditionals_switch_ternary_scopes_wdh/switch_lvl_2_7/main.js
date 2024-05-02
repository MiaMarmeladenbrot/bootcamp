// JS Assets:

{/* <b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm */}

{/* <b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm */}

{/* <b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm */}

// <b>DHL Paket 10 kg</b> <br>
//       bis 120 x 60 x 60 cm

// "<b>Extra große Größe</b>

function showtxt() {
    const myList = document.body.querySelector('#mylist').value;
    const outputGroesse = document.body.querySelector('table tr td:first-of-type');
    const outputMasse = document.body.querySelector('#masse');
    console.log(myList);
    console.log(outputMasse);

    switch (myList) {
        case '0':
            console.log("Brief & Postkarte");
            outputGroesse.innerHTML = "<b>Brief und Postkarte</b>"
            outputMasse.innerHTML = `
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            break;
        case "1":
            console.log("Paket 2kg");
            outputGroesse.innerHTML = "<b>DHL Paket 2 kg</b>"
            outputMasse.innerHTML = `bis 60 x 30 x 15 cm`
            break;
        case "2":
            console.log("Paket 5kg")
            outputGroesse.innerHTML = "<b>DHL Paket 5 kg</b>"
            outputMasse.innerHTML = `bis 120 x 60 x 60 cm`
            break;
        case "3":
            console.log("Extra größe");
            outputGroesse.innerHTML = `<b>Extra große Größe</b>`
            break;
        default:
            console.log("Paket kann nicht geliefert werden")
    }
}

console.log(`Hallo`) //--> backticks aka template literals, hier mit kann man einen mehrzeiligen string erstellen