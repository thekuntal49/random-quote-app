import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";
import styles from "./App.module.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(response.data[0]);
    } catch (error) {
      setError("Failed to fetch quote. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quote of the Day</h1>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <QuoteCard quote={quote} onSave={saveQuote} />
      )}
      <button className={styles.quoteBtn} onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "New Quote"}
      </button>
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
