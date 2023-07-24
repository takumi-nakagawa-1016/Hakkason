import React, {useState} from "react";
import CreateForm from "../components/1st_milestone_CRUD/CreateForm";
import {Milestone} from "../types/Milestone";
import {Milestone3rd} from "../types/3rdMilestone";
import Create3rdForm from "../components/3rd_milestone_CRUD/Create3rdForm";
import {Box, Text} from "@chakra-ui/react";

const Create3rdMilestone: React.FC = () => {
    const [ milestone, setMilestone] = useState<Milestone3rd>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: '',
        child_milestone_id: '',
    })
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    3rd Milestone Create
                </Text>
            </Box>
            <Create3rdForm milestone={milestone} setMilestone={setMilestone}/>
        </>
    )
};

export default Create3rdMilestone;
