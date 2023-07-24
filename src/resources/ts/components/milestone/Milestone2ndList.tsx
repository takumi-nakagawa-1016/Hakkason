import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Milestone2nd} from "../../types/2ndMilestone";
import parse2ndMilestones from "../../parse/parseMilestone2nd";
import Milestone2ndCard from "./Milestone2ndCard";


const Milestone2ndList: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone2nd[]>([]);

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            const response = await axios.get("/api/child_milestone/${id}");
            const data = response.data;
            const parsedMilestones = parse2ndMilestones(data);
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
                        <Milestone2ndCard {...milestone} />
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

export default Milestone2ndList;
