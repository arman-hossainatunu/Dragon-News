import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;