import { useModal } from "../components/modal/useModal";
import { ModalPortal } from "../components/modal/reactPortal";
import CustomModal from "../components/modal/CustomModal";
import {Button, Heading} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {useState} from "react";
import { motion } from 'framer-motion';

const CreateMileStone: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2.5 } },
    };


    return (
        <motion.div
            className="App"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3}}
            >
                <Heading color="gray.500" size="xl">
                    Let's Start!!
                </Heading>
                <Button
                    onClick={handleOpen}
                    variant="outline"
                    colorScheme="black.500"
                    leftIcon={<AddIcon />}
                    mt="100px"
                    size="lg"
                    padding="10"
                >
                    New Mile_Stone
                </Button>
            </motion.div>
            {isOpen && (
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                    transition={{ duration: 3}}
                    animate={{ opacity: 1, y: 0 }}
                >
                        <CustomModal onClose={handleClose} />
                </motion.div>
            )}
        </motion.div>
    );
};

export default CreateMileStone;
