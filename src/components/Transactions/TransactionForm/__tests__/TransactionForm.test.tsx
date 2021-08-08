import { render } from "@testing-library/react";
import { TransactionForm } from "../";

describe("Expenses Form", () => {
  // Test ===============================
  it("should render the component", () => {
    render(<TransactionForm />);
  });

  // Test ===============================
  it("should match the snapshot", () => {
    const { container } = render(<TransactionForm />);
    expect(container).toMatchSnapshot();
  });

  describe("Transaction type selector", () => {
    // Test ===============================
    it("should contain a type selector for expense", () => {
      const { getByLabelText } = render(<TransactionForm />);
      expect(getByLabelText("expense")).toBeTruthy();
    });

    // Test ===============================
    it("should contain a type selector for income", () => {
      const { getByLabelText } = render(<TransactionForm />);
      expect(getByLabelText("income")).toBeTruthy();
    });

    // Test ===============================
    it("Should have the radio buttons with the same name", () => {
      const { getByTestId } = render(<TransactionForm />);
      const radioExpense = getByTestId("transaction-type-expense");
      const radioIncome = getByTestId("transaction-type-income");

      expect(radioExpense).toHaveAttribute("name", "transactionType");
      expect(radioIncome).toHaveAttribute("name", "transactionType");

      expect(radioExpense).toBeTruthy();
      expect(radioIncome).toBeTruthy();
    });
  });
});
