import { useState } from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const BoxGrid = ({ jsonData }) => {
    // 各グリッドの状態を個別に管理するためのステート
    const [showDetails, setShowDetails] = useState(Array(jsonData.length).fill(false));

    // グリッドのトグルボタンがクリックされたときのハンドラ
    const handleToggle = (index) => {
        const newShowDetails = [...showDetails];
        newShowDetails[index] = !newShowDetails[index];
        setShowDetails(newShowDetails);
    };

    return (
        <Flex justify="center" align="center" h="100%">
            <Flex justify="center" align="center" wrap="wrap" maxW="1600px" w="100%">
                {jsonData.map((task, index) => (
                    <Flex direction="column" key={index}>
                        <Box
                            w="80%"
                            h="15%"
                            bg={"moccasin"} // グリッドの中身は白抜き
                            border="1px solid green.500" // 枠は緑
                            borderRadius="xl"
                            mb={10}
                            mr={10}
                            p={4}
                        >
                            <Heading as="h2" size="lg" mb={4}>
                                {task.name}
                            </Heading>
                            {/* トグルで詳細表示 */}
                            <Text color="black" mb={150} onClick={() => handleToggle(index)}>
                                {showDetails[index] ? task.description : '▶︎'}
                            </Text>
                            {/* 期限とステータスの表示 */}
                            <Flex justify="space-between">
                                <Text color="black">Due Time: {task.due_time}</Text>
                                <Text color="white" bg="gray" px={2} borderRadius="md">
                                    Status: {task.status}
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default BoxGrid;
