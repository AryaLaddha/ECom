import React from 'react'
import './Bestsellersgrid.css'
import image1 from '../../images/ezgif.com-gif-maker.jpg'

class Bestsellersgrid extends React.Component {
    render() {
        return (
            <div className="Gridmain">
                <div className="designmain">
                    <img src={image1} alt="productImage" className="productImage" />
                </div>
                <div className="designmain"></div>
                <div className="designmain"></div>
                <div className="designmain"></div>
            </div>
        )
    }
}

export default Bestsellersgrid;
