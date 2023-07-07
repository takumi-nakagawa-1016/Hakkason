import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./rootes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";


const App: React.FC = () => {
    return (
        <>
            <ChakraProvider>
                <Header />
                    <RouterProvider router={router} />
                <Footer />
            </ChakraProvider>
        </>
    )
}

export default App
