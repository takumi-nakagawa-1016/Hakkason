import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
    const isLoggedIn = false; // 仮のログイン状態（true: ログイン中, false: ログアウト中）

    const handleLogout = () => {
        // ログアウトの処理を記述
    };

    return (
        <Box bg="white" borderBottom="1px solid #ccc" px={20} py={4}>
            <Flex justify="space-between" alignItems="center">
                <Heading as="h1" size="lg">
                    <img src={'/img/LOGO.png'} alt="User Icon" style={{ width: '200px', height: '100px'}} />
                </Heading>
                {isLoggedIn ? (
                    <Flex alignItems="center">
                        <Button colorScheme="orange.200" variant="outline" mr={20}>
                            マイルストーン作成
                        </Button>
                        <Box w="40px" h="40px" bg="gray.200" borderRadius="full" />
                    </Flex>
                ) : (
                    <Flex>
                        <Button colorScheme="orange" variant="outline" mr={10}>
                            新規登録
                        </Button>
                        <Button colorScheme="blue">ログイン</Button>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Header;
