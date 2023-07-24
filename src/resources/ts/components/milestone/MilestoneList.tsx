import React, { useEffect, useState } from "react";
import axios from "axios";
import MilestoneCard from "./MilestoneCard";
import { Milestone } from "../../types/Milestone";
import parseMilestones from "../../parse/parseMilestones";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";


const MilestoneList: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([]);

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            const response = await axios.get("/api/milestone/index");
            const data = response.data;
            const parsedMilestones = parseMilestones(data);
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
                        <MilestoneCard {...milestone} />
                    </Box>
                ))}
            </Flex>
            <Flex justifyContent="flex-end" mt="4">
                <Link to="/">
                    <Button colorScheme="orange.200" variant="outline">
                        マイルストーン作成
                    </Button>
                </Link>
            </Flex>
        </>
    );
};

export default MilestoneList;
