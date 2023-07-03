import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./rootes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


const App: React.FC = () => {
    return (
        <>
            <Header />
                <RouterProvider router={router} />
            <Footer />
        </>
    )
}

export default App
