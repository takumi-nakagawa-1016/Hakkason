import React, { useEffect, useState } from "react";
import axios from "axios";
import MilestoneCard from "./MilestoneCard";
import { Milestone } from "../../types/Milestone";
import parseMilestones from "../../parse/parseMilestones";
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Milestone2nd} from "../../types/2ndMilestone";
import parse2ndMilestones from "../../parse/parseMilestone2nd";
import {Milestone3rd} from "../../types/3rdMilestone";
import Milestone2ndList from "./Milestone2ndList";
import parse3rdMilestones from "../../parse/parseMilestone3rd";
import Milestone3rdCard from "./Milestone3rdCard";


const Milestone3rdList: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone3rd[]>([]);

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            const response = await axios.get("/api/grand_child_milestone/${id}");

            const data = response.data;
            const parsedMilestones = parse3rdMilestones(data);
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
                        <Milestone3rdCard {...milestone} />
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
