import React from 'react'
import "./Navbar.css"
import {MenuItems, MenuItems2} from './MenuItems'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <ul classname="nav-menu-left">
                    {MenuItems2.map((item, index) =>{
                        return (
                            <li key={index}><a href={item.url}   classname={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
                <h2>Ecommerce Website</h2>
                <ol classname="nav-menu-right">
                    <li classname="search-bar">
                        <div className="search-box">
                            <input type="text" className="input" placeholder="Search..." />
                            <a href="#">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </li>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}><a href={item.url} classname={item.cName}><i class={item.icon}></i></a></li>
                        )
                    })}
                </ol>
            </nav>
        )
    }
}

export default Navbar;
