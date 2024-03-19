import logo from './rock.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BBC on Solana.
        </p>
        <a
          className="App-link"
          href="https://birdeye.so/token/?chain=solana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trade BBC
        </a>
      </header>
    </div>
  );
}

export default App;
