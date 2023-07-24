import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Milestone2List from "../../components/milestone2/Milestone2List";

const IndexMilestone2: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    2nd Milestones
                </Text>
            </Box>
            <Milestone2List />
        </>
    );
}
export default IndexMilestone2;
