import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: black solid 1px;
  max-width: 500px;
  gap: 30px;
  background-color: lightcyan;
`;

export const Button = styled.a`
  background-color: #59adea;
  max-width: 400px;
  padding: 10px 20px;
  color: white;
  margin-top: 20px;
  font-weight: 300;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

export const Text = styled.p`
  color: black;
  font-weight: 500;
  font-size: 30px;
`;
