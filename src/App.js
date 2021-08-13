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
          <small>This project was coded by Katia Barnave and </small>
          <a href="https://github.com/Katya383/dictionary-project">
            {" "}
            open-sourced on Github
          </a>
          {""}
          and
          <a href="https://brave-gates-d5766c.netlify.app/">
            {""}
            and hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
