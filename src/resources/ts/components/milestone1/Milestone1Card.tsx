import React from "react";
import {Box, CircularProgress, Flex, Text, Button, ListIcon} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Milestone1} from "../../types/Milestone1";
import {AddIcon, HamburgerIcon, Icon, LinkIcon} from "@chakra-ui/icons";

interface MilestoneCardProps extends Milestone1 {}
const Milestone1Card: React.FC<MilestoneCardProps> = ({
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
                <div>
                    <Link to={`/create/milestone2/${id}`}>
                        <Button colorScheme="orange.200" variant="outline" size="sm">
                            <Icon as={AddIcon} />
                        </Button>
                    </Link>
                    <Link to={`/index/milestone2/${id}`}>
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
export default Milestone1Card;

const getStatusColor = (status: number): string => {
    if (status <= 30) {
        return "red.400";
    } else if (status <= 70) {
        return "yellow.400";
    } else {
        return "green.400";
    }
};
