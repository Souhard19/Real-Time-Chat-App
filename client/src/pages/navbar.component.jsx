
import React from "react";

import '../styles/navbar.css'

const Navbar = (props) => {

   return (
      <div className="navbar">
         <img src="logo512.png " alt="logo" />
         <div className="links">
            <p onClick={() => props.setPage(true)}>Sign In</p>
            <p onClick={() => props.setPage(false)}>Sign Up</p>
         </div>
      </div>
   )
}

export default Navbar;