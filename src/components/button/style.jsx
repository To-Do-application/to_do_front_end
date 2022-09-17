import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.bg_color || "#0c0d0d"};
  color: ${(props) => props.color || "#f5f5f5"};
  height: 45px;
  border-radius: 8px;
  border: 2px solid #0c0d0d;
  font-family: "Roboto Mono", nonospace;
  margin-top: 16px;
  width: 226px;
  transition: all 0.5s ease 0s;
  :hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  }
`;
