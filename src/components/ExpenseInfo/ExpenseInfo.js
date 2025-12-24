import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  // Extract all amounts
  const amounts = expenses.map((expense) => expense.amount);

  // Total income (positive amounts)
  const profitAmount = amounts
    .filter((amount) => amount > 0)
    .reduce((total, amount) => total + amount, 0);

  // Total expense (negative amounts)
  const lossAmount = amounts
    .filter((amount) => amount < 0)
    .reduce((total, amount) => total + amount, 0);

  // Grand total
  const grandTotal = profitAmount + lossAmount;

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        {/* Grand total should be displayed here */}
        <h1>${grandTotal || 0}</h1>
      </div>

      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          {/* Total Profit Amount should be displayed here */}
          <p className={`${styles.money} ${styles.plus}`}>
            +${profitAmount || 0}
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          {/* Total expense amount should be displayed here */}
          <p className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(lossAmount) || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
