import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import parseMilestone3 from "./perseMilestone3";
import Milestone3Card from "./Milestone3Card";
import {Milestone3} from "../../types/Milestone3";



const Milestone3List: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone3[]>([]);
    const params = useParams()

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            console.log("/api/grant-child-milestone/"+params.child_milestone_id)
            const response = await axios.get("/api/grant-child-milestone/"+params.child_milestone_id);
            const data = response.data;
            console.log(data)
            const parsedMilestones = parseMilestone3(data);
            setMilestones(parsedMilestones);
        } catch (error) {
            console.error("Error occurred while fetching milestones:", error);
        }
    };

    return (
        <>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
                {milestones.map((milestone) => (
                    <Box key={milestone.id} m="2">
                        <Milestone3Card {...milestone} />
                    </Box>
                ))}
            </Flex>
            <Flex justifyContent="flex-end" mt="4">
                <Link to={`/create/milestone3/${params.child_milestone_id}`}>
                    <Button colorScheme="orange.200" variant="outline">
                        マイルストーン作成
                    </Button>
                </Link>
            </Flex>
        </>
    );
};

export default Milestone3List;
