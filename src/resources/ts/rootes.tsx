import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MileStone from "./pages/MileStone";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MileStone />
    }, {
        path: 'milestone',
        element: <MileStone />
    }
])
