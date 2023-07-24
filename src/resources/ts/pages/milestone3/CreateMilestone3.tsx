import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {Milestone3} from "../../types/Milestone3";
import CreateMilestone1 from "../milestone1/CreateMilestone1";
import CreateMilestone3Form from "../../components/milestone3/CreateMilestone3Form";

const CreateMilestone3: React.FC = () => {
    const params = useParams()
    const [milestone, setMilestone] = useState<Milestone3>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: '',
        child_milestone_id: `${params.child_milestone_id}`
    });

    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    3rd Milestones Create
                </Text>
            </Box>
            <CreateMilestone3Form milestone={milestone} setMilestone={setMilestone} />
        </>
    );
};

export default CreateMilestone3;
