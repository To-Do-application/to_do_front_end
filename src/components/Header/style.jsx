import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  h1 {
    color: var(--white);
  }
  h1 span {
    color: var(--red);
  }
  a {
    text-decoration: none;
    color: var(--vanilla);
  }
  a:hover {
    font-weight: bolder;
  }

  .header-functions {
    display: none;
  }
  .open-header-functions {
    background: wheat;
    perspective: 1000px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .open-header-functions section {
    color: var(--white);
    background: transparent;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 600ms ease-in-out;
    top: 20px;
    height: 100%;
  }
  .open-header-functions section p {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .open-header-functions .close {
    transform: rotateY(180deg);
  }
  .open-header-functions:hover section {
    cursor: pointer;
    transform: rotateY(180deg);
  }
  @media (min-width: 600px) {
    .header-functions {
      display: flex;
    }
    .header-functions button {
      width: 5rem;
      background-color: var(--vanilla);
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      transition: all 0.5s ease 0s;
      margin: 15px;
    }
    .open-header-functions {
      display: none;
    }
  }
`;
