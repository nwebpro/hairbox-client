import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Header from '../Pages/Share/Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;