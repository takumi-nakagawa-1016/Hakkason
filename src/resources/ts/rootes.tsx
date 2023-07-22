import {createBrowserRouter, RouteProps, redirect, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreateMileStone from "./pages/CreateMileStone";
import Milestone from "./pages";
import BoxGrid from "./pages";
import LoginPage from "./pages/LoginPage";
import {useUser} from "./queries/AuthQuery";
import {useAuth} from "./hooks/AuthContext";
import {useEffect} from "react";
import {useAuthUser} from "./hooks/useAuth";

// const { isAuth, setIsAuth } = useAuth()
// const {isLoading, data: authUser } = useUser()
// useEffect(()=>{
//     if (useUser().data) {
//         useAuth().setIsAuth(true)
//     }
// },[useUser().data])



// const GuardRoute =async () => {
//     if (!useAuth().isAuth) return redirect('/login')
// }
//
// const LoginRoute = async () => {
//     if (useAuth().isAuth) return redirect('/')
// }

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
