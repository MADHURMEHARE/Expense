import React, { useRef } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ addExpense }) {
  // Refs for input fields
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const text = expenseTextInput.current.value;
    const amount = Number(expenseAmountInput.current.value);

    const expense = {
      id: Date.now(),
      text,
      amount
    };

    // Call parent function
    addExpense(expense);

    // Clear inputs
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>

      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />

      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>

      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />

      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
