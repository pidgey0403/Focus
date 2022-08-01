import React from "react";
import { Background, StyledModal } from "./PageModal.styles";

export interface PageModalProps {
  children: React.ReactNode;
}

const PageModal: React.FC<PageModalProps> = ({ children }: PageModalProps) => {
  return (
    <Background>
      <StyledModal>{children}</StyledModal>
    </Background>
  );
};

export default PageModal;
