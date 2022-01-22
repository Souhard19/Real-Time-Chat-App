
import React from "react";

import '../styles/navbar.css'

const Navbar = (props) => {

   return (
      <div className="navbar">
         <img src="logo512.png " alt="logo" />
         <div className="links">
            <p onClick={() => props.changeForm(true)}>Sign In</p>
            <p onClick={() => props.changeForm(false)}>Sign Up</p>
         </div>
      </div>
   )
}

export default Navbar;