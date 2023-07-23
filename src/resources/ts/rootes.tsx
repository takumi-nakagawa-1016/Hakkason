import {createBrowserRouter, redirect} from 'react-router-dom'
import BoxGrid from "./pages";
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
            path: 'index/first',
            element: <Milestone1stIndex />,
        },
        {
            path: 'index/second/{id}',
            loader: guardLoader
        },
        {
            path: 'index/third/{id}',
            loader: guardLoader
        },
        {
            path: '/login',
            element: <LoginPage />,
            loader: guestLoader
        },
]);
