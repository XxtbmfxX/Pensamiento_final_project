import React from "react";
import styled from "styled-components";

const Modal = ({ singtype, estado, actionButton }) => {
  return (
    <>
      {estado && (
        <Overlay className="Modal">
          <form id="login-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="Input"
              placeholder="*******"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="Password"
              className="Input"
              placeholder="*******"
              required
            />
            <button onClick={actionButton}>{singtype}</button>
          </form>
          <CloseButton onClick={actionButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </CloseButton>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  color: white;
  background-color: black;
  position: absolute;
  top: 57px;
  right: 20px;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  &:hover {
    color: #1766dc;
  }
  text-align: center;

  svg {
    width: 50%;
    height: 50%;
  }
`;
