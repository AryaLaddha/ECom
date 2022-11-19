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
                            <li key={index}><a href={item.url} classname={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
                Ecommerce Website
                <ol classname="nav-menu-right">
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
