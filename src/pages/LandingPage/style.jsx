import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  h1 {
    text-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    font-size: 2.5rem;
  }
  h1 span {
    color: var(--orange);
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    section {
      flex-direction: column;
    }
  }
`;
