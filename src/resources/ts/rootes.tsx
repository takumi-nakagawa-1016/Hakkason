import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreateMileStone from "./pages/CreateMileStone";
import Milestone from "./pages";
import BoxGrid from "./pages";
import LoginPage from "./pages/LoginPage";
import {useUser} from "./queries/AuthQuery";
import {useAuth} from "./hooks/AuthContext";
import {useEffect} from "react";



useEffect(()=>{
    if (useUser().data) {
        useAuth().setIsAuth(true)
    }
},[useUser().data])

const GuardRoute = () => {

}

export const router = createBrowserRouter([

    {
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: '/',
                element:(
                    <RequireAutrh>
                        <CreateMileStone />
                    </RequireAutrh>
                )
            },
            {
                path: 'milestone',
                element: <CreateMileStone />
            },
            {
                path: 'milestones/index',
                element: <BoxGrid />
            },
        ]
    }
])
