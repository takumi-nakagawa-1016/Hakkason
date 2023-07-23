import React, {useState} from "react";
import CreateForm from "../components/1st_milestone_CRUD/CreateForm";
import {Milestone} from "../types/Milestone";

const CreateMilestone: React.FC = () => {
    const [ milestone, setMilestone] = useState<Milestone>({
        name: '',
        description: null,
        status: 0,
        due_date: ''
    })
    return (
        <>
            <CreateForm milestone={milestone} setMilestone={setMilestone}/>
        </>
    )
};

export default CreateMilestone;
