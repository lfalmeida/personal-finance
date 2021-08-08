export const TransactionForm = () => {
  return (
    <form>
      <h3>add transaction</h3>

      <label htmlFor="typeExpense">expense</label>
      <input
        data-testid="transaction-type-expense"
        type="radio"
        name="transactionType"
        id="typeExpense"
      />
      <label htmlFor="typeIncome">income</label>
      <input
        data-testid="transaction-type-income"
        type="radio"
        name="transactionType"
        id="typeIncome"
      />
    </form>
  );
};
