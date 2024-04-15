import { useState } from "react";

const AddTransactionForm = ({ setTransactions }) => {
  // state for description
  const [description, setDescription] = useState("");

  // state for amount
  const [amount, setAmount] = useState();

  // Funktion zum Hinzufügen einer neuen Transaktion
  const addTransaction = (event) => {
    event.preventDefault();

    // amount in Number umwandeln
    const amountNum = Number(amount);

    // falls amount 0 ist oder keine Zahl, dann soll einfach nur returnen, nichts passieren
    if (amountNum === 0 || isNaN(amountNum)) return;

    // Variable, um die Daten aus dem Formular in einem Objekt zu speichern und sie später bei der Übergabe ans Backend einfacher aufrufen zu können
    const newTransaction = {
      description,
      amount: Math.abs(amountNum), // absoluter Wert, ohne Plus/Minus
      type: amountNum > 0 ? "income" : "expense",
    };

    // Endpoint von POST fetchen und neue Daten ans Backend übergeben
    // da wir hier etwas Neues schaffen wollen, müssen wir auch headers- und body-Inhalt mitgeben
    fetch("http://localhost:3003/api/v1/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setDescription("");
        setAmount("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="transaction-form">
      <input
        type="text"
        placeholder="Neue Transaktion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="number"
        placeholder="-30"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <button onClick={addTransaction}>Add</button>
    </form>
  );
};

export default AddTransactionForm;
