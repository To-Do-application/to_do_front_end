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
`;
