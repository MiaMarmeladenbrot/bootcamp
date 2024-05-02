function transferMessage() {
    const inputMessage = document.body.querySelector('#inputMessage').value;
    const outputMessage = document.body.querySelector('#outputMessage');
    const errorMessage = document.body.querySelector('#errorMessage');

    console.log(inputMessage);
    console.log(outputMessage);
    console.log(errorMessage);
    // Transfer der Message aus dem Input in die OutputMessage --> Nachricht soll bestehen bleiben, wenn der User nichts eingegeben hat
    outputMessage.textContent = inputMessage.length === 0 ? outputMessage.textContent : inputMessage;

    // Fehlermeldung wenn User nichts eingegeben hat
    errorMessage.textContent = inputMessage.length === 0 ? "Bitte gebe eine Nachricht ein!" : "";
}