import React from 'react';
import './QuoteBox.css';

function QuoteBox() {
    return (
        <div id="quote-box">
            <p id="text">"This is a placeholder quote."</p>
            <p id="author">- Author Name</p>
            <button id="new-quote">New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet Quote</a>
        </div>
    );
}

export default QuoteBox;