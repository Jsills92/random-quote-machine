
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://www.bible.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Random Bible Verse Generator
        </a>
        <p>
          <QuoteBox />
        </p>
    
       
      </header>
    </div>
  );
}

export default App;
