import React from 'react';
import { Background, StyledModal } from './PageModal.styles';

export interface PageModalProps {
    children: React.ReactNode
};

const PageModal: React.FC<PageModalProps> = ({
    children
}: PageModalProps) => {
    return (
        <Background>
            <StyledModal>
                <h1><u>&#127822; Focus &#x23F0;</u></h1>
                {children}
            </StyledModal>
        </Background>
    );
}

export default PageModal;