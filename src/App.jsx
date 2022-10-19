import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";

import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const manageLogSing = (e) => {
    modal == false ? setModal(true) : setModal(false);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1>Save_pass</h1>
      </header>
      <main className="Main">
        <button onClick={manageLogSing}>Log in</button>
        <button>Sing up</button>
      </main>
      <Modal actionButton={manageLogSing} estado={modal} singtype="Login" />
      <Modal actionButton={manageLogSing} estado={modal} singtype="Sing up" />

      <footer className="Footer">
        <ul>
          <li>Lorem impus</li>
          <li>Lorem impus</li>
          <li>Lorem impus</li>
        </ul>
        <ul>
          <li>instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
