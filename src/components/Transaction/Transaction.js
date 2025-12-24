import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction({ expense, deleteExpense, index }) {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  // 🛡 Safety guard
  if (!expense) return null;

  const sign = expense.amount > 0 ? "+" : "-";

  return (
    <li
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseEnter={() => setCurrentHoverIndex(index)}
      onMouseLeave={() => setCurrentHoverIndex(null)}
    >
      <div>{expense.text}</div>

      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index ? styles.movePrice : ""
          }`}
        >
          {sign}${Math.abs(expense.amount)}
        </div>

        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === index ? styles.active : ""
          }`}
        >
          <div className={styles.edit}>
            <img src={EditImage} alt="Edit" />
          </div>

          <div
            className={styles.delete}
            onClick={() => deleteExpense(expense.id)}
          >
            <img src={DeleteImage} alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
}
