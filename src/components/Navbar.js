import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <ul classname="nav-menu-left">
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Kids</a></li>
                </ul>
                <h3 classname="navbar-logo">Ecommerce</h3>
                <ul classname="nav-menu-right">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-user"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
