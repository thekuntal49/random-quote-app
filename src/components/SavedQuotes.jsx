import React from "react";
import styles from "./SavedQuotes.module.css";

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Saved Quotes</h3>
      {savedQuotes.length === 0 ? (
        <p>No saved quotes</p>
      ) : (
        <ul>
          {savedQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
