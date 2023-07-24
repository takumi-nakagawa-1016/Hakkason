import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {useAuthUser} from "./hooks/useAuth";
import Home from "./pages/Home";
import CreateMilestone1 from "./pages/milestone1/CreateMilestone1";
import IndexMilestone1 from "./pages/milestone1/IndexMilestone1";
import CreateMilestone2 from "./pages/milestone2/CreateMilestone2";
import IndexMilestone2 from "./pages/milestone2/IndexMilestone2";

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
        element: <Home />,
    },
    {
        path: '/create/milestone1',
        element: <CreateMilestone1 />,
    },
    {
        path: '/index/milestone1',
        element: <IndexMilestone1 />,
    },
    {
        path: '/create/milestone2/:milestone_id',
        element: <CreateMilestone2 />,
    },
    {
        path: '/index/milestone2/:milestone_id',
        element: <IndexMilestone2 />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        loader: guestLoader
    },
]);
