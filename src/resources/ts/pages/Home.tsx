import {Button, Center, VStack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    return (
        <Center h="100vh">
            <VStack spacing={10}>
                <Text textAlign="center" fontSize={40} mb={20}>
                    『Milestone』はあなたの目標達成をサポートします
                </Text>
                <Text textAlign="center" fontSize={20}>早速達成したい目標を作成しましょう！！</Text>
                <Link to="/create/milestone1">
                    <Button colorScheme="orange.200" variant="outline">
                        Create New Milestone!!
                    </Button>
                </Link>
            </VStack>
        </Center>
    );
};

export default Home;
