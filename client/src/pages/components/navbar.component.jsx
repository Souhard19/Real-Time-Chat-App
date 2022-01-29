import React from 'react';

import './styles/navbar.css'

const Navbar = (props) => {
   return (
      <div id='navbar_chat'>
         <div id="logo"><img src="logo512.png" alt="" /></div>
         <div id="settings"><img src="assets/settings.png" alt="" /></div>
      </div>
   );
}

export default Navbar;