import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {useAuthUser} from "./hooks/useAuth";
import CreateMilestone from "./pages/CreateMilestone";
import Milestone1stIndex from "./pages/Milestone1stIndex";

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
        path: '/',
        element: <CreateMilestone />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/index/Milestone1st',
        element: <Milestone1stIndex />,
    },
])
