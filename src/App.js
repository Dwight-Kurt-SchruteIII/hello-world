import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Odkaz na youtube more
        </a>
      </header>
    </div>
  );
}

export default App;
