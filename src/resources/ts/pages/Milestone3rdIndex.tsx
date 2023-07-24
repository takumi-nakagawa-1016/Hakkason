import React from "react";
import MilestoneList from "../components/milestone/MilestoneList";
import {Box, Text} from "@chakra-ui/react";
import Milestone3rdList from "../components/milestone/Milestone3rdList";

const Milestone3rdIndex: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    3rd Milestones
                </Text>
            </Box>
            <Milestone3rdList />
        </>
    );
}
export default Milestone3rdIndex;
