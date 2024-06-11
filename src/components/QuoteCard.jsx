import React from "react";
import styles from "./QuoteCard.module.css";

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{quote}</p>
      <button className={styles.saveBtn} onClick={() => onSave(quote)}>
        Save
      </button>
    </div>
  );
};

export default QuoteCard;
