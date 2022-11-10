import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;