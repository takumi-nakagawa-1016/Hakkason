import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./rootes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import {QueryClientProvider} from "react-query";
import { queryClient } from "./queryClient";
import { AuthProvider } from "./hooks/AuthContext";


const App: React.FC = () => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Flex direction="column" minHeight="100vh">
                        <Header />
                        <Box flex="1" mt={10} mb={20} mr={20} ml={20}>
                            <RouterProvider router={router} />
                        </Box>
                        <Footer />
                    </Flex>
                </QueryClientProvider>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App
