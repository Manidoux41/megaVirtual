import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Mega</h1>
            <ul>
                <li>
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "item__active" : "") }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/test" className={ ({isActive}) => (isActive ? "item__active" : "") }>Test</NavLink>
                </li>   
                
            </ul>
        </div>
    );
};

export default Navbar;