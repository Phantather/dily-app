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

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/accessories' element={<Accessories/>}/>
                <Route path='shops' element={<Shops/>}/>
                <Route path='charity' element={<Charity/>}/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/confirm' element={<Confirm/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;