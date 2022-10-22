import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";

const Login = () => {
  const [modal, setModal] = useState(false);

  const manageLogSing = (e) => {
    modal == false ? setModal(true) : setModal(false);
  };
  return (
    <div className="Login">
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
};

export default Login;
