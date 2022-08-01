import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const DecreaseBtn = styled(Button)`
  border: 0;
  background-color: #c56e6e;
  &:hover {
    background-color: #945252;
  }
`;

export const IncreaseBtn = styled(Button)`
  border: 0;
  background-color: #70a87f;
  &:hover {
    background-color: #51775b;
  }
`;
