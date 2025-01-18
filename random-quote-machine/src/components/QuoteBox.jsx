import React, { useState } from 'react';
import './QuoteBox.css';
import { fetchRandomBibleVerse } from '../api';  // Assuming your API file is named api.js

function QuoteBox() {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const fetchedQuote = await fetchRandomBibleVerse();
            console.log(fetchedQuote); // Log the entire response to inspect
            setQuote(fetchedQuote.data); // Assuming the response contains a `data` object
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div id="quote-box">
            {loading ? <p>Loading...</p> : (
                <>
                    <p id="text">"{quote.text}"</p>
                    <p id="author">- {quote.reference}</p>
                    <button id="new-quote" onClick={fetchQuote}>New Quote</button>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.reference}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
                </>
            )}
        </div>
    );
}

export default QuoteBox;
