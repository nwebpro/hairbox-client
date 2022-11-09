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
import Blog from "../Pages/Blog/Blog";
import BlogDetails1 from "../Pages/Blog/BlogDetails1";
import BlogDetails2 from "../Pages/Blog/BlogDetails2";
import BlogDetails3 from "../Pages/Blog/BlogDetails3";
import BlogDetails4 from "../Pages/Blog/BlogDetails4";

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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/difference-between-sql-and-nosql',
                element: <BlogDetails1 />
            },
            {
                path: '/blog/what-is-jwt-and-how-dose-it-work',
                element: <BlogDetails2 />
            },
            {
                path: '/blog/what-is-the-difference-between-javascript-and-node-js',
                element: <BlogDetails3 />
            },
            {
                path: '/blog/how-does-node-js-handle-multiple-requests-at-the-same-time',
                element: <BlogDetails4 />
            },
            {
                path: '/service/:serviceId',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://haircat-salon.vercel.app/api/hairbox/service/${params?.serviceId}`)
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