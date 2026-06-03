import React from 'react'

import shoppingCart from '../images/shopping-cartt.png';
// import shoppingCart from '../images/cart.png';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Balflix</a>
                <div className="d-inline-flex justify-content-end align-items-right">
                    <a className="navbar-brand" href="#">Login</a>
                    <a className="navbar-brand" href="#">
                        {/* <a href="https://www.flaticon.com/free-icons/commerce-and-shopping" title="commerce and shopping icons">Commerce and shopping icons created by Fauzi Arts - Flaticon</a> */}
                        <image src={shoppingCart} alt="Shopping Cart" style={{ width: '16px', height: '16px' }} className="img-fluid"/>
                    </a>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar;