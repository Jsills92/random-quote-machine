import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

function QuoteBox() {
  const [quote, setQuote] = useState({ text: '', reference: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.scripture.api.bible/v1/bibles/en-verse-KJV/verses/random', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        });

        if (!response.ok) {
          throw new Error('Error fetching quote');
        }
        const data = await response.json();
        setQuote(data.data); // Assuming the response contains a 'data' object
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        setLoading(false);
      }
    };

    getQuote();
  }, []);

  return (
    <div id="quote-box">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p id="text">"{quote.text}"</p>
          <p id="author">- {quote.reference}</p>
          <button id="new-quote" onClick={() => setQuote({ text: '', reference: '' })}>New Quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.reference}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
        </>
      )}
    </div>
  );
}

export default QuoteBox;
