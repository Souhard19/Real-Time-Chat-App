
import React, { useState } from 'react';

// Login Registration Pages Imports
import LoginPage from './pages/login.component';
import Navbar from './pages/navbar.component';
import RegisterPage from './pages/register.component';

// Login Registration Pages Imports
import ChatBoardComponent from './pages/chatBoard.component';

import './App.css';

const App = (props) => {
   const [logIn, setLogIn] = useState(true);

   return (
      <div id='app'>
         {/* <Navbar setPage={setLogIn} />
         <div className="wrap">
            <div id="front_img">
               <img src="https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </div>
            {
               (logIn == true) ?  <LoginPage />  :   <RegisterPage />
            }
         </div> */}
         <ChatBoardComponent />
      </div>
   );
}

export default App;