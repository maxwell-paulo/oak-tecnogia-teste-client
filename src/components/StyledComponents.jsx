import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  gap: 30px;
  border: black solid 1px;
  /* background-color: lightgreen; */
  background-color: ${(props) =>
    props.id % 2 === 0
      ? "#59adea"
      : props.id % 2 === 1
      ? "lightgreen"
      : "lightgreen"};
`;

export const Text = styled.p`
  color: black;
  font-weight: 500;
`;
