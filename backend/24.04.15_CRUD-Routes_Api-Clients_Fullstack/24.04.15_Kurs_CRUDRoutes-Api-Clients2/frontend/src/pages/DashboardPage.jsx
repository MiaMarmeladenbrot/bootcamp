import AddTransactionForm from "../components/AddTransactionForm";
import TransactionList from "../components/TransactionList";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  // State für gefetchte Transactions
  // da es mehrere sind, als Default leeres array
  // damit wir darauf in allen Kind-Elementen zugreifen können, finden state-Definition und Fetch bereits in Dashboard-Page statt und nicht bei TransactionList
  // alternativ könnte man es auch als globalen State mit useContext() definieren
  const [transactions, setTransactions] = useState([]);

  // fetching all transactions-data mit im Backend definierten Endpoint
  // gefetchte Daten in den state speichern
  useEffect(() => {
    fetch("http://localhost:3003/api/v1/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h1>Dashboard</h1>
      <AddTransactionForm setTransactions={setTransactions} />
      <TransactionList
        setTransactions={setTransactions}
        transactions={transactions}
      />
    </section>
  );
};

export default DashboardPage;
