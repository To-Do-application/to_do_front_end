import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-image {
    display: none;
  }
  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .form-login h1 {
    margin-bottom: 30px;
  }
  .form-login form {
    width: 90%;
    max-width: 340px;
    margin-bottom: 20px;
  }
  p span {
    color: var(--red);
  }
  .redirect-span {
    cursor: pointer;
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
  }
  form div input {
    background-color: var(--white);
    border: none;
    width: 90%;
  }
  form button {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
  }

  @media (min-width: 1100px) {
    .login-image {
      display: block;
      background-color: black;
      height: 100%;
      display: flex;
      align-items: center;
      width: 100%;
    }
    .login-image img {
      width: 100%;
    }
  }
`;
