import {createBrowserRouter, redirect} from 'react-router-dom'
import CreateMileStone from "./pages/CreateMileStone";
import BoxGrid from "./pages";
import LoginPage from "./pages/LoginPage";
import {useAuthUser} from "./hooks/useAuth";

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
            element: <CreateMileStone />,
            loader: guardLoader
        },
        {
            path: 'milestone',
            element: <CreateMileStone />,
            loader: guardLoader
        },
        {
            path: 'milestones/index',
            element: <BoxGrid />,
            loader: guardLoader
        },
        {
            path: '/login',
            element: <LoginPage />,
            loader: guestLoader
        },
]);
