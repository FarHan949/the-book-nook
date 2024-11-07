import React from 'react';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Home></Home>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;