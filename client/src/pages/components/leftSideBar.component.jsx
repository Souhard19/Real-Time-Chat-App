import React from 'react';

import './styles/leftSideBar.css'

const LeftSideBar = (props) => {
   return (
      <div id='leftSideBar'>
         <input type="search" id="search" placeholder='Search' />
      </div>
   );
}

export default LeftSideBar;