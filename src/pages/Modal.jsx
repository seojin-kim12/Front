import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 4px;
`;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalWrapper>
            <ModalContent>
                {children}
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
