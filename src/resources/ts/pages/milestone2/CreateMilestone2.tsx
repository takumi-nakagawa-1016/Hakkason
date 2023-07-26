import React, { useState } from "react";
import { Milestone2 } from "../../types/Milestone2";
import { Box, Text } from "@chakra-ui/react";
import CreateMilestone2Form from "../../components/milestone2/CreateMilestone2Form";
import {useParams} from "react-router-dom";

const CreateMilestone2: React.FC = () => {
    const params = useParams()
    const [milestone, setMilestone] = useState<Milestone2>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: '',
        milestone_id: `${params.milestone_id}`,
    });


    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    2nd Milestones Create
                </Text>
            </Box>
            <CreateMilestone2Form milestone={milestone} setMilestone={setMilestone} />
        </>
    );
};

export default CreateMilestone2;
