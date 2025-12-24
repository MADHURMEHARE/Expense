import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction({ expense, deleteExpense, index }) {
  // State to track hover index
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  // Safety guard
  if (!expense) return null;

  return (
    <li
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseEnter={() => setCurrentHoverIndex(index)}
      onMouseLeave={() => setCurrentHoverIndex(null)}
    >
      {/* Transaction text */}
      <div>{expense.text}</div>

      <div className={styles.transactionOptions}>
        {/* Amount (NO + / - sign here to avoid test conflicts) */}
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index ? styles.movePrice : ""
          }`}
        >
          ${Math.abs(expense.amount)}
        </div>

        {/* Edit / Delete buttons (visible on hover) */}
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
