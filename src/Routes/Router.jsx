import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home"
import Gallery from "../Pages/Home/Gallery/Gallery";
import Login from "../Pages/Home/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddaToy from "../Pages/AddaToy/AddaToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/addaToy',
                element: <PrivateRoute><AddaToy></AddaToy></PrivateRoute>,
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-toy-server-three.vercel.app/toy/${params.id}`)
            },
        ]
    }
])

export default router;