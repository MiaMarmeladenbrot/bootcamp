import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TransactionDetailPage = () => {
  // Id des jeweiligen Links auslesen
  const { tid } = useParams();

  // state zum Speichern der gefetchten Transaktions-Daten
  const [transaction, setTransaction] = useState();

  // fetch aus dem backend mithilfe der ausgelesenen ID
  useEffect(() => {
    fetch("http://localhost:3003/api/v1/transactions/" + tid)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // im Backend haben wir definiert, dass bei einem leeren Fetch, ein leeres Objekt zurückgegeben werden soll, damit wir hier jetzt keine Fehlermeldung (Unexpected end of json) erhalten
        setTransaction(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h1>{transaction?.description}</h1>

      {/* Amount-Farben anpassen je nach Art, indem wir als className{"income" or "expense"} */}
      <h2 className={transaction?.type + "-transaction-amount"}>
        {/* je nach Art des Amounts soll Plus oder Minus hinzugefügt werden */}
        {transaction?.type === "income" ? "+" : "-"}
        {transaction?.amount}
      </h2>

      {/* gespeicherte Zeit der Transaktion in eine Datum-Anzeige umwandeln */}
      <h2 className="datestring">
        {new Date(transaction?.timestamp).toLocaleString()}
      </h2>
    </section>
  );
};

export default TransactionDetailPage;
