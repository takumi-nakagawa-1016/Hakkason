import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Milestone3List from "../../components/milestone3/Milestone3List";

const IndexMilestone3: React.FC = () => {
    return (
        <>
            <Box textAlign="center" my="10">
                <Text fontSize="40px" fontWeight="bold">
                    3rd Milestones
                </Text>
            </Box>
            <Milestone3List />
        </>
    );
}
export default IndexMilestone3;
