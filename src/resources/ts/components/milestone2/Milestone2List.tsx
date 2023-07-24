import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import {Milestone2} from "../../types/Milestone2";
import Milestone2Card from "./Milestone2Card";
import parseMilestone2 from "./perseMilestone2";



const Milestone2List: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone2[]>([]);
    const params = useParams()

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            console.log("/api/child-milestone/"+params.milestone_id)
            const response = await axios.get("/api/child-milestone/"+params.milestone_id);
            const data = response.data;
            const parsedMilestones = parseMilestone2(data);
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
                        <Milestone2Card {...milestone} />
                    </Box>
                ))}
            </Flex>
            <Flex justifyContent="flex-end" mt="4">
                <Link to={`/create/milestone2/${params.milestone_id}`}>
                    <Button colorScheme="orange.200" variant="outline">
                        マイルストーン作成
                    </Button>
                </Link>
            </Flex>
        </>
    );
};

export default Milestone2List;
