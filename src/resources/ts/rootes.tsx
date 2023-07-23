import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {useAuthUser} from "./hooks/useAuth";
import Home from "./pages/Home";

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
        path: '/login',
        element: <LoginPage />,
        loader: guestLoader
    },
]);
