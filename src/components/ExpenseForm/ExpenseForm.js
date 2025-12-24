import React, { useRef } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ addExpense }) {
  // Refs for input fields
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Form submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const text = expenseTextInput.current.value;
    const amount = Number(expenseAmountInput.current.value);

    // Create expense object
    const expense = {
      id: Date.now(),
      text,
      amount
    };

    // Call addExpense from props
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
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
        className={styles.input}
      />

      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>

      <input
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
        className={styles.input}
      />

      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
