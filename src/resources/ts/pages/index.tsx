import { useState } from 'react';
import {Box, Button, Center, Heading} from "@chakra-ui/react";
import CustomModal from "../components/modal/CustomModal";
import {AddIcon} from "@chakra-ui/icons";

const ParentComponent = () => {
    // JSONデータの例（仮にstateで管理しているとします）
    const [jsonData, setJsonData] = useState([
        {
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },
        {
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },{
            name: 'Task 1',
            description: 'This is task 1',
            due_time: '2023-07-31',
            status: 'In Progress',
        },
        {
            name: 'Task 2',
            description: 'This is task 2',
            due_time: '2023-08-15',
            status: 'Not Started',
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(false);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Box mb={100}　mt={20}>
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
                <CustomModal onClose={handleClose} />
            </Box>
        </div>
    );
};

export default ParentComponent;
