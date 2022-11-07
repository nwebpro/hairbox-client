import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Share/ServiceDetails/ServiceDetails";

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
                path: '/services',
                element: <Services />
            },
            {
                path: '/service/:serviceId',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/api/online-basket/service/${params.serviceId}`)
            },
            {
                path: '/service/add',
                element: <AddService />
            }
        ]
    }
])