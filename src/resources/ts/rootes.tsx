import {createBrowserRouter, RouteProps, redirect, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreateMileStone from "./pages/CreateMileStone";
import Milestone from "./pages";
import BoxGrid from "./pages";
import LoginPage from "./pages/LoginPage";
import {useUser} from "./queries/AuthQuery";
import {useAuth} from "./hooks/AuthContext";
import {useEffect} from "react";

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





export const router = createBrowserRouter([
        {
            path: '/',
            element: <CreateMileStone />,
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
            path: '/login',
            element: <LoginPage />,
        },
]);
