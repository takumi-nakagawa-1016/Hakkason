import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./rootes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "react-query";


const App: React.FC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }

    })
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <Header />
                    <RouterProvider router={router} />
                    <Footer />
                </ChakraProvider>
            </QueryClientProvider>
        </>
    )
}

export default App
