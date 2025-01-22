import React, { useState } from 'react';
import './QuoteBox.css';


const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchRandomBibleVerse = async () => {
        try {
            const response = await fetch("https://bible-api.com/data/web/random");
            const data = await response.json();

            // Update the state with the correct properties
            const verseText = data.random_verse?.text || "No verse text found";
            const verseAuthor = `${data.random_verse?.book || "Unknown"} ${data.random_verse?.chapter || "?"}:${data.random_verse?.verse || "?"}`;

            setQuote(verseText);
            setAuthor(verseAuthor);
        } catch (error) {
            console.error("Error fetching the Bible verse:", error);
            setQuote("Failed to fetch a verse. Please try again.");
            setAuthor("");
        }
    };

    const getNewQuote = () => {
        fetchRandomBibleVerse(); // Assuming you want to reuse the same function
    };

    return (
        <div id="quote-box">
            <p id="text">{quote}</p>
            <p id="author">{author}</p>
            <button id="new-quote" onClick={getNewQuote}>New Verse</button>
            <button><a id="tweet-quote" 
               href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`} 
               target="_blank" 
               rel="noopener noreferrer">
                Tweet Verse
            </a></button>
        </div>
    );
};

export default QuoteBox;
