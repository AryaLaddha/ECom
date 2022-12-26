import React from 'react'
import './Bestsellersgrid.css'
import image1 from '../../images/ezgif.com-gif-maker.jpg'
import Bestsellerscard from './Bestsellerscard'

class Bestsellersgrid extends React.Component {
    render() {
        return (
            <div className="Bestsellers-grid">
                <Bestsellerscard />
                {/* <div className="Bestsellers-card">
                    <div className="Bestsellers-card-imagebox">
                        <img src={image1} alt="productImage" />
                    </div>
                    <div className="Bestsellers-card-contentbox">
                        <h2>Nike Hoodie</h2>
                        <div className="Bestsellers-card-size">
                            <h3>Size:</h3>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>XXL</span>
                        </div>
                        <div className="Bestsellers-card-color">
                            <h3>Color:</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">Buy now</a>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Bestsellersgrid;
