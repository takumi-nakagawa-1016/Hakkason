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
import React, {useState} from "react";
import {CloseIcon} from "@chakra-ui/icons";

// @ts-ignore
const ModalComponent = ({ onClose }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [deadline, setDeadline] = useState('');

    // @ts-ignore
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // @ts-ignore
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    // @ts-ignore
    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value);
    };

    const handleSubmit = async () => {
        const requestBody = {
            name: name,
            content: content,
            deadline: deadline,
        };

        try {
            const response = await fetch('/api/milestone/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log('miss');
        }
    };

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
                    <FormControl id="name">
                        <FormLabel>名前:</FormLabel>
                        <Input type="text" value={name} onChange={handleNameChange} />
                    </FormControl>

                    <FormControl id="content">
                        <FormLabel>内容:</FormLabel>
                        <Textarea rows={4} value={content} onChange={handleContentChange} />
                    </FormControl>

                    <FormControl id="deadline">
                        <FormLabel>期日:</FormLabel>
                        <Input type="date" value={deadline} onChange={handleDeadlineChange} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="teal" onClick={handleSubmit}>Create</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;
