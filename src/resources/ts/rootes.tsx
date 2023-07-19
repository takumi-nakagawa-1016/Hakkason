import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreateMileStone from "./pages/CreateMileStone";
import Milestone from "./pages";
import BoxGrid from "./pages";
import LoginPage from "./pages/LoginPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateMileStone />
    },
    {
        path: 'milestone',
        element: <CreateMileStone />
    },
    {
        path: 'milestones/index',
        element: <BoxGrid />
    },
    {
        path: 'login',
        element: <LoginPage />
    }
])
