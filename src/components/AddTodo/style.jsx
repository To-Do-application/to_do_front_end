import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  opacity: 0.98;
  display: flex;
  align-items: center;
  div {
    width: 90%;
    max-width: 488px;
    margin: 0 auto;
    background-color: var(--white);
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    margin: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  form div {
    padding: 20px;
    background-color: var(--white);
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid var(--black);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  form div span {
    display: flex;
    margin-right: 20px;
  }
  .text-area {
    display: flex;
    align-items: flex-start;
  }
  form div input,
  textarea {
    background-color: var(--white);
    border: none;
    width: 90%;
  }
  textarea {
    height: 110px;
  }
  form button {
    height: 60px;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 60px;
  }
`;
