import React from "react";
import { Box, CircularProgress, Flex, Text, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Milestone1} from "../../types/Milestone1";
import {Milestone2} from "../../types/Milestone2";
import {AddIcon, ArrowUpIcon, HamburgerIcon, Icon} from "@chakra-ui/icons";

interface MilestoneCardProps extends Milestone2 {}
const Milestone2Card: React.FC<MilestoneCardProps> = ({
                                                         id,
                                                         name,
                                                         description,
                                                         status,
                                                         due_date,
                                                         milestone_id,
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
                <div>
                    <Link to={`/index/milestone1/`}>
                        <Button colorScheme="orange.200" variant="outline" size="sm">
                            <Icon as={ArrowUpIcon} />
                        </Button>
                    </Link>
                    <Link to={`/create/milestone3/${milestone_id}`}>
                        <Button colorScheme="orange.200" variant="outline" size="sm">
                            <Icon as={AddIcon} />
                        </Button>
                    </Link>
                    <Link to={`/index/milestone3/${milestone_id}`}>
                        <Button colorScheme="orange.200" variant="outline" size="sm">
                            <Icon as={HamburgerIcon} />
                        </Button>
                    </Link>
                </div>
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
export default Milestone2Card;

const getStatusColor = (status: number): string => {
    if (status <= 30) {
        return "red.400";
    } else if (status <= 70) {
        return "yellow.400";
    } else {
        return "green.400";
    }
};
