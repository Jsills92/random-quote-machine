import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

function QuoteBox() {
  const [quote, setQuote] = useState({ text: '', reference: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);

      console.log('API Key:', process.env.REACT_APP_API_KEY);

      try {
        const response = await fetch('https://api.scripture.api.bible/v1/bibles/en-verse-KJV/verses/random', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
          
        });

        if (!response.ok) {
          throw new Error(`Error fetching quote: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setQuote(data.data || { text: 'No quote found', reference: '' });
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote({ text: 'For God so loved the world...', reference: 'John 3:16' });
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
          <div id="quote-content">
            <p id="text">"{quote.text}"</p>
            <p id="author">- {quote.reference}</p>
          </div>
          <button id="new-quote" onClick={() => setQuote({ text: '', reference: '' })}>New Verse</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.reference}`} target="_blank" rel="noopener noreferrer">Tweet Verse</a>
        </>
      )}
    </div>
  );
}

export default QuoteBox;
