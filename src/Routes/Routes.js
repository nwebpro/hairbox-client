import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Share/ServiceDetails/ServiceDetails";
import MyReview from "../Pages/MyReview/MyReview";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ReviewEdit from "../Pages/MyReview/ReviewEdit";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/service/:serviceId',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/api/online-basket/service/${params?.serviceId}`)
            },
            {
                path: '/service/add',
                element: (
                    <PrivateRoute>
                        <AddService />
                    </PrivateRoute>
                )
            },
            {
                path: '/my-review',
                element: (
                    <PrivateRoute>
                        <MyReview />
                    </PrivateRoute>
                )
                
            },
            {
                path: '/review/edit/:reviewId',
                element: (
                    <PrivateRoute>
                        <ReviewEdit />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])