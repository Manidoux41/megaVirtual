import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
                <Routes>
                        <Route path="/" element={<Home />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Layout;