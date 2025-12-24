import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  // Extract amounts
  const amounts = expenses.map(exp => exp.amount);

  // Calculate totals
  const profitAmount = amounts
    .filter(amount => amount > 0)
    .reduce((acc, val) => acc + val, 0);

  const lossAmount = amounts
    .filter(amount => amount < 0)
    .reduce((acc, val) => acc + val, 0);

  const grandTotal = profitAmount + lossAmount;

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal}</h1>
      </div>

      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p className={`${styles.money} ${styles.plus}`}>
            +${profitAmount}
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(lossAmount)}
          </p>
        </div>
      </div>
    </div>
  );
}
