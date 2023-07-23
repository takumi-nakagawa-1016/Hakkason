import {Milestone} from "../../types/Milestone";
import {Box, CircularProgress, Flex, Text} from "@chakra-ui/react";
import React from "react";

interface MilestoneCardProps extends Milestone {}
const MilestoneCard: React.FC<MilestoneCardProps> = ({
        name,
        description,
        status,
        due_date,
}) => {
    const statusColor = getStatusColor(status);

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            my="4"
            width="300px"
            boxShadow="md"
            bg="rgba(255, 235, 59, 0.2)"
            borderColor="black"
        >
            <Text fontSize="xl" fontWeight="bold" mb="2">
                {name}
            </Text>
            <Text fontSize="sm" mb="4">
                {description}
            </Text>
            <Flex justifyContent="flex-end">
                <CircularProgress
                    value={status}
                    color={statusColor}
                    size="40px"
                    thickness="10px"
                    mr="2"
                >
                    <Text fontSize="md">{status}%</Text>
                </CircularProgress>
                <Text fontSize="md" alignSelf="flex-end">
                    Deadline: {due_date}
                </Text>
            </Flex>
        </Box>
    );
}
export default MilestoneCard
const getStatusColor = (status: number): string => {
    if (status <= 30) {
        return "red.400";
    } else if (status <= 70) {
        return "yellow.400";
    } else {
        return "green.400";
    }
};
