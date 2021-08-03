import dictionary from "./dictionary.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={dictionary}
          className="App-dictionary img-fluid"
          alt="dictionary"
        />
      </header>
    </div>
  );
}

export default App;
