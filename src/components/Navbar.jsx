import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
        <div id="topnav">
         <h2 className="label">PEARL SHINE MOTORS</h2>
            
            <p className="label"><i className="fa fa-home fa-2x" aria-hidden="true"></i></p>
            <p className="label"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></p>
        </div>
        <div id="navigation">
            <p className="navlabel">HOME</p>
            <p className="navlabel">ABOUT</p>
            <p className="navlabel">CONTACT</p>
            <p className="navlabel">OUR STORE</p>
        </div>
        </div>
    )
}

export default Navbar