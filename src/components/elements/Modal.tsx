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
        <CloseModalButton onClick={onClose}>X</CloseModalButton>
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
  width: clamp(300px, 35vw, 600px);
  background-color: var(--container-bg-color);
  border-radius: 10px;
  box-shadow: var(--container-shadow);
  position: relative;
`;

const CloseModalButton = styled.div`
  position: absolute;
  content: "X";
  top: -10px;
  right: -10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  border-bottom: 1px var(--main-color) solid;
  padding: 10px;
  font-size: 0.9rem;
  color: white;
`;

const Message = styled.div`
  padding: 10px;
  font-size: 0.9rem;
  color: white;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top: 1px var(--main-color) solid;
`;
const Button = styled.button``;
