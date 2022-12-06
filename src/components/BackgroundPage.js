import React from 'react'
import "./BackgroundPage.css"
import logo from '../images/frontPage.jpg'

class BackgroundPage extends React.Component {
    render () {
        return (
            <img src={logo} alt="logo" className="background" />
        )
    }
}

export default BackgroundPage;
