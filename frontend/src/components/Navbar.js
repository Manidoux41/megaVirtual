import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo_Mega" />
            <ul>
                <li>
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "item__active" : "") }>La Compagnie</NavLink>
                </li>
                <li>
                    <NavLink to="/test" className={ ({isActive}) => (isActive ? "item__active" : "") }>La Flotte</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "item__active" : "") }>L'equipage</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "item__active" : "") }>Espace Candidat</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "item__active" : "") }>Espace Intranet</NavLink>
                </li>   
                
            </ul>
        </div>
    );
};

export default Navbar;