import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
        
            {/* <p className="navlabel">HOME</p>
            <p className="navlabel">ABOUT</p>
            <p className="navlabel">CONTACT</p>
            <p className="navlabel">OUR STORE</p> */}
            

            <ul className="nav-links" >

            <h2 className="label">PEARL SHINE MOTORS</h2>
                <Link   to="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>

                <Link  to="/cart"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></Link>

                <Link  to="/about"><li  >ABOUT US</li></Link>
                {/* <Search/> */}
            </ul>
            
        
        </div>
    )
}

export default Navbar