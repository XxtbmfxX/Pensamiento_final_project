import reactLogo from "./assets/react.svg";
import Login from "./screens/Login";
import "./styles/App.css";
import Main from "./screens/Main";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Save_pass</h1>
      </header>
      {/* <Login /> */}
      <Main />
    </div>
  );
}

export default App;
