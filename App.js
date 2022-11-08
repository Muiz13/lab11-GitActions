import "./App.css";
import List from "./List";

function App() {
  return (
    <>
      <div data-testid="comp" className="App">
        <h1>Hello World</h1>
      </div>
      <div data-testid="comp2" className="App">
        <List />
      </div>
    </>
  );
}

export default App;
