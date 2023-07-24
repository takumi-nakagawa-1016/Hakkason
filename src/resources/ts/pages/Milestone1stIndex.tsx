import React from "react";
import MilestoneList from "../components/milestone/MilestoneList";
import {Box, Text} from "@chakra-ui/react";

const Milestone1stIndex: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    1st Milestones
                </Text>
            </Box>
            <MilestoneList />
        </>
    );
}
export default Milestone1stIndex;
