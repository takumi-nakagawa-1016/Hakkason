import React, {FC} from "react";


interface ModalProps {
    showFlag: boolean;
    setShowModal:;
}
const Modal: FC<ModalProps> = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
    };
    return(
        <>
            {props.showFlag ? (
                <div id="overlay">
                    <div id="modalContent">
                        <p>This is ModalContent</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            ): (
               <></>
            )}
        </>
    );
};

export default Modal;
