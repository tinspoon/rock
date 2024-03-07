import logo from './rock.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A rock.
        </p>
        <a
          className="App-link"
          href="https://birdeye.so/token/RoCKJYqjZ8ZTqWb7YoEkALuu2wbNfM228YKhUtxXTHj?chain=solana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trade a rock
        </a>
      </header>
    </div>
  );
}

export default App;
