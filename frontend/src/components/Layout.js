import React from 'react';
import Footer from './Footer';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
                <Routes>
                        <Route path="/" element={<Home />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Layout;