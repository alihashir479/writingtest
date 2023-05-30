import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="/services">Services</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/contact">Contact </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/about-us">About </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/blog">Blog </Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/order"}>Place Order</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;