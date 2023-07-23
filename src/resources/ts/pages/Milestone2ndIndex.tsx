import React from "react";
import MilestoneList from "../components/milestone/MilestoneList";
import {Box, Text} from "@chakra-ui/react";
import Milestone2ndList from "../components/milestone/Milestone2ndList";

const Milestone2ndIndex: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    2nd Milestones
                </Text>
            </Box>
            <Milestone2ndList />
        </>
    );
}
export default Milestone2ndIndex;
