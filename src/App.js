import dictionary from "./dictionary.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-dictionary img-fluid"
            alt="dictionary"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="dawn" />
        </main>
        <footer className="App-footer">
          <small>Coded by Katia Barnave and </small>
          <a href="https://github.com/Katya383/dictionary-project">
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
