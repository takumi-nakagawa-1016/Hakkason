import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Milestone1} from "../../types/Milestone1";
import Milestone1Card from "./Milestone1Card";
import parseMilestone1 from "./perseMilestone1";


const Milestone1List: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone1[]>([]);

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            const response = await axios.get("/api/milestone/index");
            const data = response.data;
            const parsedMilestones = parseMilestone1(data);
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
                        <Milestone1Card {...milestone} />
                    </Box>
                ))}
            </Flex>
            <Flex justifyContent="flex-end" mt="4">
                <Link to="/create/milestone1">
                    <Button colorScheme="orange.200" variant="outline">
                        マイルストーン作成
                    </Button>
                </Link>
            </Flex>
        </>
    );
};

export default Milestone1List;
