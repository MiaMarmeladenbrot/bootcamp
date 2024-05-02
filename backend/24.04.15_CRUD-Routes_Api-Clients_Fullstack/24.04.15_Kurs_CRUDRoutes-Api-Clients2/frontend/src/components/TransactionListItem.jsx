import { Link } from "react-router-dom";
import { useState } from "react";

const TransactionListItem = ({ transaction, setTransactions }) => {
  // state zum Anzeigen der Bearbeitungsformulare unter jeder Transaktion
  // default ist nicht anzeigen am anfang
  const [showEditForm, setShowEditForm] = useState(false);

  // Button, um Transaktion zu löschen
  // Funktion, die einen Fetch macht, mit dem sie die URL und die Methode ans Backend übermittelt
  // im Backend werden die Daten unter dieser Id dann gelöscht und als Antwort werden die übrig gebliebenen Daten zurückgegeben
  // diese Antwort speichern wir im state der Transactions, sodass auch die Anzeige im HTML überschrieben wird
  const deleteTransaction = () => {
    fetch(`http://localhost:3003/api/v1/transactions/${transaction.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="transaction-list-item">
        <Link
          to={`/transactions/${transaction.id}`}
          className="transaction-info-box"
        >
          <div>
            <span className="datestring">
              {new Date(transaction.timestamp).toLocaleString()}
            </span>
            <b> {transaction.description}</b>
          </div>

          <span className={transaction.type + "-transaction-amount"}>
            {/* je nach Art des Amounts soll Plus oder Minus hinzugefügt werden */}
            {transaction.type === "income" ? "+" : "-"}
            {transaction.amount}
          </span>
        </Link>

        <button onClick={() => deleteTransaction()}>❌</button>
        <button onClick={() => setShowEditForm(!showEditForm)}>✎</button>
      </section>

      <div style={{ display: showEditForm ? "block" : "none" }}>
        <EditTransactionForm
          transaction={transaction}
          setTransactions={setTransactions}
          setShowEditForm={setShowEditForm}
        />
      </div>
    </>
  );
};

// - Inline Funktion
// statt sie in einer Komponente auszulagern, könnte man die Edit-Funktion auch direkt hier reinschreiben
// ich brauche sie in keiner anderen Page oder Komponente, deshalb kann ich sie auch einfach gleich in der Datei, in der ich sie ausschließlich brauche, anlegen
const EditTransactionForm = ({
  transaction,
  setTransactions,
  setShowEditForm,
}) => {
  // state for description
  const [description, setDescription] = useState(transaction.description);

  // state for amount
  const [amount, setAmount] = useState(
    transaction.amount * (transaction.type === "expense" ? -1 : 1)
  );

  // Funktion zum Hinzufügen einer neuen Transaktion
  const editTransaction = (event) => {
    event.preventDefault();

    // amount in Number umwandeln
    const amountNum = Number(amount);

    // falls amount 0 ist oder keine Zahl, dann soll einfach nur returnen, nichts passieren
    if (amountNum === 0 || isNaN(amountNum)) return;

    // Variable, um die Daten aus dem Formular in einem Objekt zu speichern und sie später bei der Übergabe ans Backend einfacher aufrufen zu können
    const transactionUpdateInfo = {
      description,
      amount: Math.abs(amountNum), // absoluter Wert, ohne Plus/Minus
      type: amountNum > 0 ? "income" : "expense",
    };

    // Endpoint von PATCH fetchen und Daten im Backend überschreiben
    // da wir hier etwas Neues schaffen wollen, müssen wir auch headers- und body-Inhalt mitgeben
    fetch(`http://localhost:3003/api/v1/transactions/${transaction.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setShowEditForm(false); // form wieder verstecken
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
      <button onClick={editTransaction}>Save</button>
    </form>
  );
};

export default TransactionListItem;
