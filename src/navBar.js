import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/cookies">Cookies</NavLink>
            <NavLink exact to="/drinks">Drinks</NavLink>
        </nav>
    )
}
export default Navbar
