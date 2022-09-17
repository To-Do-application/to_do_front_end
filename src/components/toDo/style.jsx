import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 4px;
  border: 1px solid var(--black);
  color: var(--black);
  justify-content: space-around;
  margin-top: 16px;
  margin-right: 32px;
  .title {
    display: flex;
    align-items: center;
  }
  .title span {
    display: flex;
    align-items: center;
    color: var(--orange);
    margin-right: 7px;
  }
  hr {
    width: 88%;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  button {
    margin-top: 80px;
    align-self: flex-end;
    background: rgb(12, 13, 13);
    color: rgb(245, 245, 245);
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    font-family: "Roboto Mono", nonospace;
    margin-top: 16px;
    width: 100%;
    transition: all 0.5s ease 0s;
  }
`;
