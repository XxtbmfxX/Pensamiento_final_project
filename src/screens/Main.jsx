import React, { useState } from "react";
import styled from "styled-components";
import sampleImg from "../assets/mj_studentbarroco.jpg";

const Main = () => {
  const [list, setList] = useState(true);

  return (
    <MainContent className="Main">
      {list ? (
        <Container className="Container">
          <Card className="Card">
            <Card_top className="Card_top">
              <Card_img>
                <figure
                  src="../assets/mj_studentbarroco.jpg"
                  alt="the img thing"
                />
              </Card_img>
              <h2>The password name</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </Card_top>
            <small>User@gmail.com</small>
          </Card>
        </Container>
      ) : (
        <h1>No passwords saved</h1>
      )}
    </MainContent>
  );
};

export default Main;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 80%;
  background-color: #decfcf;
  color: black;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;

  small {
    align-self: center;
  }

  svg {
    margin-left: 25px;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* height: 80%; */
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Card_top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    margin-left: 20px;
  }
`;

const Card_img = styled.div`
  height: 50px;
  width: 50px;
  background-color: beige;
  background-image: url(${sampleImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
`;
