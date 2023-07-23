import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {useAuthUser} from "./hooks/useAuth";
import CreateMilestone from "./pages/CreateMilestone";
import Milestone1stIndex from "./pages/Milestone1stIndex";
import Milestone2ndIndex from "./pages/Milestone2ndIndex";
import Milestone3rdIndex from "./pages/Milestone3rdIndex";
import Create3rdMilestone from "./pages/Create3rdMilestone";
import Create2ndMilestone from "./pages/Create2ndMilestone";

const guardLoader = async () => {
    const user = await useAuthUser()
    return user ? true : redirect('/login')
}

const guestLoader = async () => {
    const user = await useAuthUser()
    return user ? redirect('/'): true
}


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <CreateMilestone />,
    },
    {
        path: '/index/milestone1st',
        element: <Milestone1stIndex />,
    },
    {
        path: '/2nd',
        element: <Create2ndMilestone />,
    },
    {
        path: '/index/milestone2nd',
        element: <Milestone2ndIndex />,
    },
    {
        path: '/3rd',
        element: <Create3rdMilestone />,
    },
    {
        path: '/index/milestone3rd',
        element: <Milestone3rdIndex />,
    },
])
