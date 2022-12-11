import React from 'react'
import './Bestsellers.css'

class Bestsellers extends React.Component {
    render() {
        return (
            <div className="bestsellers-intro">
                <div className="bestsellers-title">
                    Our best Sellers.
                </div>
                <div className="bestsellers-link">
                    <button>Shop best-sellers</button>
                </div>
            </div>
        )
    }
}

export default Bestsellers;
