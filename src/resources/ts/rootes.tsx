import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    }, {
        path: 'about',
        element: <AboutPage />
    }
])
