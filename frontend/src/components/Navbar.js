import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Mega</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;