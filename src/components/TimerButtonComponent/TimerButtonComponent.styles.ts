import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const StyledButton = styled(Button)`
  font-size: 20px;
  background: none;
  border: 0;
  &:hover {
    background: none;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    font-size: 20px;
    background: none;
    border: 0;
  }
  &:active {
    font-size: 20px;
    background: none;
    border: 0;
  }
`;
