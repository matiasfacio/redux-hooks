import React, { FC } from "react";
import styled from "styled-components";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, visible, onClose }) => {
  return (
    <StyledModal visible={visible}>
      <ModalContent>
        <ModalTitle>Information</ModalTitle>
        <Message>{children}</Message>
        <Footer>
          <Button onClick={onClose}>Ok</Button>
        </Footer>
      </ModalContent>
    </StyledModal>
  );
};

const StyledModal = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "grid" : "none")};
  place-content: center;
`;

const ModalContent = styled.div`
  height: 200px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--white);
  position: relative;
`;

const ModalTitle = styled.div`
  border-bottom: 1px var(--light-blue) solid;
  padding: 10px;
  font-size: 0.9rem;
`;

const Message = styled.div`
  padding: 10px;
  font-size: 0.9rem;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top: 1px var(--light-blue) solid;
`;
const Button = styled.button``;
