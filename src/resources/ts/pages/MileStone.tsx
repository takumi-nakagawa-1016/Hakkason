import React from 'react'
import {Modal} from "../components/modal/Modal";
import {useModal} from "../components/modal/useModal";
import {ModalPortal} from "../components/modal/reactPortal";

const MileStone: React.FC = () => {
    const { isOpen, onClose, onOpen } = useModal();
    return (
        <div className="App">
            <button onClick={onOpen} type="button" className="button openButton">
                Open Modal
            </button>
            {isOpen && (
                <ModalPortal>
                    <Modal onClose={onClose} />
                </ModalPortal>
            )}
        </div>
    )
}

export default MileStone
