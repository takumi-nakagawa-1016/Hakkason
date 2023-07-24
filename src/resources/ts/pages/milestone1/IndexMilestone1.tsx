import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Milestone1List from "../../components/milestone1/Milestone1List";

const IndexMilestone1: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    1st Milestones
                </Text>
            </Box>
            <Milestone1List />
        </>
    );
}
export default IndexMilestone1;
