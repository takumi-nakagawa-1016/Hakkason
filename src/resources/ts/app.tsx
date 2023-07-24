import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./rootes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import {QueryClientProvider} from "react-query";
import { queryClient } from "./queryClient";
import { AuthProvider } from "./hooks/AuthContext";


const App: React.FC = () => {

    return (
        <>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider>
                        <Header />
                            <RouterProvider router={router} />
                        <Footer />
                    </ChakraProvider>
                </QueryClientProvider>
            </AuthProvider>
        </>
    )
}

export default App
