import { useState } from 'react';
import BoxGrid from "../components/box/BoxGrid";
import {Box, Center, Heading} from "@chakra-ui/react";

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

    return (
        <div>
            <Box mb={100}　mt={20}>

            </Box>
            <BoxGrid jsonData={jsonData}/>
        </div>
    );
};

export default ParentComponent;
