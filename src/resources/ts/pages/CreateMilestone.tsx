import React, {useState} from "react";
import CreateForm from "../components/1st_milestone_CRUD/CreateForm";
import {Milestone} from "../types/Milestone";
import {Box, Text} from "@chakra-ui/react";

const CreateMilestone: React.FC = () => {
    const [ milestone, setMilestone] = useState<Milestone>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: ''
    })
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    1st Milestones
                </Text>
            </Box>
            <CreateForm milestone={milestone} setMilestone={setMilestone}/>
        </>
    )
};

export default CreateMilestone;
