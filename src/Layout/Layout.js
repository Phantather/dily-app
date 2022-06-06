import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home";
import Accessories from "../pages/Accessories/Accessories";
import Shops from "../pages/Shops/Shops";
import Charity from "../pages/Charity/Charity";
import Auth from "../pages/Auth/Auth";
import Confirm from "../pages/Auth/Confirm/Confirm";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";

const Layout = () => {
    return (
        <div>
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;