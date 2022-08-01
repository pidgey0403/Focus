import React from "react";
import { Container, DecreaseBtn, IncreaseBtn } from "./ButtonComponent.styles";
import { useDispatch } from "react-redux";
import { decrStdy, incrStdy } from "../../actions";

const ButtonComponent = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <DecreaseBtn onClick={() => dispatch(decrStdy("study"))}>-</DecreaseBtn>{" "}
      <IncreaseBtn onClick={() => dispatch(incrStdy("study"))}>+</IncreaseBtn>
    </Container>
  );
};

export default ButtonComponent;
