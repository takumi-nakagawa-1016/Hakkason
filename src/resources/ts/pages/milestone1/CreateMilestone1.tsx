import React, { useState } from "react";
import { Milestone1 } from "../../types/Milestone1";
import { Box, Text } from "@chakra-ui/react";
import CreateMilestone1Form from "../../components/milestone1/CreateMilestone1Form";

const CreateMilestone1: React.FC = () => {
    const [milestone, setMilestone] = useState<Milestone1>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: '',
    });

    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    1st Milestones Create
                </Text>
            </Box>
            <CreateMilestone1Form milestone={milestone} setMilestone={setMilestone} />
        </>
    );
};

export default CreateMilestone1;
