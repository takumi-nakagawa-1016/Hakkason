import React, {useState} from "react";
import {Milestone2nd} from "../types/2ndMilestone";
import Create2ndForm from "../components/2nd_milstone_CRUD/Create2ndForm";
import {Box, Text} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

interface State {
    id: string;
}
const Create2ndMilestone: React.FC = () => {
    const location = useLocation();
    const {id} = location.state as State;

    const [ milestone, setMilestone] = useState<Milestone2nd>({
        id: 0,
        name: '',
        description: null,
        status: 0,
        due_date: '',
        milestone_id: {id}.id,
    })
    console.log(milestone)
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    2nd Milestone Create
                </Text>
            </Box>
            <Create2ndForm milestone={milestone} setMilestone={setMilestone}/>
        </>
    )
};

export default Create2ndMilestone;
