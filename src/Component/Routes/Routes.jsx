import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EstateDetails from "../Estates/EstateDetails";
import UserProfile from "../UserProfile/UserProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Gallery from "../Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=>fetch('/data.json'),
            },
            {
                path : '/login',
                element : <Login></Login>,
            },
            {
                path : '/register',
                element : <Register></Register>,
            },
            {
                path : '/data/:id',
                element : <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader : ()=> fetch('/data.json')
            },
            {
                path : '/userprofile',
                element : <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            },
            {
                path : '/updateprofile',
                element : <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path : '/gallery',
                element : <Gallery></Gallery>,
            },
        ]
        
    },
]);

export default router;