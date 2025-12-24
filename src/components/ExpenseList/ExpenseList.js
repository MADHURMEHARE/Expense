import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className={styles.expenseListContainer}>
      <h3>History</h3>

      <ul className={styles.transactionList}>
        {expenses.map((expense, index) => (
          <Transaction
            key={expense.id}
            index={index}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </ul>
    </div>
  );
}
