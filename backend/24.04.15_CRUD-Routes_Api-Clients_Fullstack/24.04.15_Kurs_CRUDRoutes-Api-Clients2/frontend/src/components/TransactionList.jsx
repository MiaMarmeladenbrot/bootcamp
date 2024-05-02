import TransactionListItem from "./TransactionListItem";

const TransactionList = ({ setTransactions, transactions }) => {
  return (
    <>
      {/* über die gefundenen Transactions mappen, um so alle anzuzeigen */}
      {/* Inhalte der gefundenen Daten mit der Id als key weitergeben an einzelne Items */}
      {transactions.map((transaction) => (
        <TransactionListItem
          key={transaction.id}
          transaction={transaction}
          setTransactions={setTransactions}
        />
      ))}
    </>
  );
};

export default TransactionList;
