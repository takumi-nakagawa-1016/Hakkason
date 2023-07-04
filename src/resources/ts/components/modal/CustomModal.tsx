import {
    Box,
    Button,
    CloseButton, Flex, FormControl, FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Textarea
} from "@chakra-ui/react";
import React from "react";
import {CloseIcon} from "@chakra-ui/icons";

const ModalComponent = ({ onClose }) => {
    return (
        <Modal isOpen={true} onClose={onClose} size="sm">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Flex align="center" justify="space-between">
                        <Heading as="h2" fontSize="xl">
                            マイルストーンを作成
                        </Heading>
                        <Button onClick={onClose} variant="ghost" colorScheme="red">
                            <CloseIcon boxSize={4} />
                        </Button>
                    </Flex>

                </ModalHeader>
                <ModalBody>
                    {/* マイルストーンの名前 */}
                    <FormControl id="name">
                        <FormLabel>名前:</FormLabel>
                        <Input type="text" />
                    </FormControl>

                    {/* マイルストーンの内容 */}
                    <FormControl id="content">
                        <FormLabel>内容:</FormLabel>
                        <Textarea rows={4} />
                    </FormControl>

                    {/* マイルストーンの期日 */}
                    <FormControl id="deadline">
                        <FormLabel>期日:</FormLabel>
                        <Input type="date" />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="teal">Create</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;
