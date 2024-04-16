import { useEffect, useState } from "react";

const AddTransactionForm = ({ setTransactions }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [attachment, setAttachment] = useState();

  const addTransaction = (event) => {
    event.preventDefault();

    const amountNumber = Number(amount);
    if (amountNumber === 0 || isNaN(amountNumber)) return;

    // ! ab hier: Multer / Dateien hochladen
    // falls kein Anhang da ist, soll einfach returned werden
    if (!attachment) return;

    // mit formData können wir eine Sammlung an key/value-Paaren aus den Formularfeldern heraus erstellen
    // die wiederum können wir mit fetch() ans Backend senden
    // nutzt dasselbe Format als wäre der encoding type "multipart/form-data"
    const formData = new FormData();

    // mit append()-Methode können wir einen neuen Wert zu einem bereits existierenden key in einem FormData Object hinzufügen
    // falls der key noch nicht existiert, erstellt append() den key
    // hier speichern wir jetzt also die Daten aus dem hochgeladenen Attachment in der Variable formData
    // formData.append("name", "tobi");
    // formData.append("email", "tobi@gmail.com");
    formData.append("attachment", attachment, attachment.name); // daten anhängen append("fieldname", file/blob, "name of file")

    // dann folgt der API-Call zum Hochladen, bei dem wir die Formular-Daten übergeben
    fetch("http://localhost:3003/api/v1/files/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      // die neuen Daten speichern wir dann wie zuvor in einer neuen Variable und geben sie weiter
      .then((data) => {
        const newTransaction = {
          description,
          amount: Math.abs(amountNumber), // Betrag nehmen (aus -30 mach 30)
          type: amountNumber > 0 ? "income" : "expense",
          fileName: data.fileName,
        };
        return newTransaction;
      })
      // sodass sie innerhalb des ersten Upload-API-Calls jetzt mit einem weitern API-Call übergeben werden, um einen neuen Post zu erstellen
      // der Rest bleibt exakt gleich zur vorherigen Variante
      .then((newTransaction) =>
        fetch("http://localhost:3003/api/v1/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTransaction),
        })
      )
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        // reset form inputs
        setDescription("");
        setAmount("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="transaction-form">
      <input
        type="text"
        placeholder="Essen gehen"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="-30"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
      <button onClick={addTransaction}>Add</button>
    </form>
  );
};

export default AddTransactionForm;
