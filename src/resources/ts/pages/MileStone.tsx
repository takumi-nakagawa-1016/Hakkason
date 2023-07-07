import { useModal } from "../components/modal/useModal";
import { ModalPortal } from "../components/modal/reactPortal";
import CustomModal from "../components/modal/CustomModal";
import {Button, Heading} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const MileStone: React.FC = () => {
    const { isOpen, onClose, onOpen } = useModal();
    return (
        <div
            className="App"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Heading color="green.500" size="xl">
                    さぁ、冒険を始めよう
                </Heading>
                <Button
                    onClick={onOpen}
                    variant="outline"
                    colorScheme="green"
                    leftIcon={<AddIcon />}
                    mt="10px"
                >
                    New Mile_Stone
                </Button>
            </div>
            {isOpen && (
                <ModalPortal>
                    <CustomModal onClose={onClose} />
                </ModalPortal>
            )}
        </div>
    );
};

export default MileStone;
