import React from 'react'

import "./WomenNavbar.css"

const WomenNavbar = () => {
  return (
    <div className='navbar-container' >
        <div className="navbar-item"> NEW ARRIVALS </div>
        <div className="navbar-item"> DESIGNERS </div>
        <div className="navbar-item"> CLOTHING </div>
        <div className="navbar-item"> SHOES </div>
        <div className="navbar-item"> ACCESSORIES & BAGS </div>
        <div className="navbar-item"> 8 BY YOOX </div>
        <div className="navbar-item"> YOOXGEN </div>
        <div className="navbar-item"> COLLABORATION </div>
        <div className="navbar-item"> BEST DEALS </div>
        <div id='gift-guide' className="navbar-item"> GIFT GUIDE </div>
    </div>
  )
}

export default WomenNavbar