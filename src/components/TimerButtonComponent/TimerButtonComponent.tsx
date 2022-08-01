import React from "react";
import { Container, StyledButton } from "./TimerButtonComponent.styles";

export interface TimerButtonProps {
  pause: (e?: React.MouseEvent<HTMLElement>) => void;
  start: (e?: React.MouseEvent<HTMLElement>) => void;
  restart: (e?: React.MouseEvent<HTMLElement>) => void;
}

const TimerButtonComponent: React.FC<TimerButtonProps> = ({
  pause,
  start,
  restart,
}: TimerButtonProps) => {
  return (
    <Container>
      <StyledButton onClick={pause}>Pause</StyledButton>
      <StyledButton onClick={start}>Start</StyledButton>
      <StyledButton onClick={restart}>Restart</StyledButton>
    </Container>
  );
};

export default TimerButtonComponent;
