import React from "react";
import { Milestone } from "../../types/Milestone";
import { Box, CircularProgress, Flex, Text, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";

interface MilestoneCardProps extends Milestone {}
const MilestoneCard: React.FC<MilestoneCardProps> = ({
                                                         id,
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
            <Flex justifyContent="space-between" mb="2">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                    {name}
                </Text>
                <Link to="/2nd" state={{id}}>
                    <Button colorScheme="orange.200" variant="outline" size="sm">
                        +
                    </Button>
                </Link>
            </Flex>
            <Text fontSize="sm" mb="4">
                {description}
            </Text>
            <Flex justifyContent="flex-end">
                <CircularProgress
                    value={status}
                    color={statusColor}
                    size="40px"
                    thickness="10px"
                    mr="auto"
                />
                <Text fontSize="md" alignSelf="flex-end">
                    {due_date}
                </Text>
            </Flex>
        </Box>
    );
};
export default MilestoneCard;

const getStatusColor = (status: number): string => {
    if (status <= 30) {
        return "red.400";
    } else if (status <= 70) {
        return "yellow.400";
    } else {
        return "green.400";
    }
};
