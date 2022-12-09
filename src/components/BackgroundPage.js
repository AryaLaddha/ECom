import React from 'react'
import "./BackgroundPage.css"
import logo from '../images/frontPage.jpg'

class BackgroundPage extends React.Component {
    render () {
        return (
            <div className="backgroundPage">
                <img src={logo} alt="logo" className="background" />
                <div className="text_in_image">
                    <h1>Background Page, Background Page</h1>
                    <h2>Background Page, Background Page2</h2>
                </div>
            </div>
        )
    }
}

export default BackgroundPage;
