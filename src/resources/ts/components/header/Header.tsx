import React, {useEffect} from 'react';
import {Box, Button, Flex, Heading} from '@chakra-ui/react';
import { useUser } from "../../queries/AuthQuery";
import { useLogout } from "../../hooks/useAuth";
import { useAuth} from "../../hooks/AuthContext";



const Header: React.FC = () => {
    const { isAuth,setIsAuth} = useAuth()
    const { isLoading, data: authUser } = useUser()


    useEffect(()=> {
        if (authUser){
            setIsAuth(true)
        }
    },[authUser])


    const isLoggedIn = isAuth; // 仮のログイン状態（true: ログイン中, false: ログアウト中）


    const logout = useLogout()

    return (
        <Box bg="white" borderBottom="1px solid #ccc" px={20} py={4}>
            <Flex justify="space-between" alignItems="center">
                <Heading as="h1" size="lg">
                    <img src={'/img/LOGO.png'} alt="User Icon" style={{ width: '200px', height: '100px'}} />
                </Heading>
                {isLoggedIn ? (
                    <Flex alignItems="center">
                        <Button colorScheme="orange.200" variant="outline" mr={10}>
                                マイルストーン作成
                        </Button>
                        <Button colorScheme="blue" onClick={() => logout.mutate()} mr={10}>ログアウト</Button>
                        <Box w="40px" h="40px" bg="gray.200" borderRadius="full" />
                    </Flex>
                ) : (
                    <Flex>
                        <Button colorScheme="orange" variant="outline" mr={10}>
                            新規登録
                        </Button>
                        <Button colorScheme="blue"><a href={"/login"} >ログイン</a></Button>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Header;
