
import React, { useState } from 'react';

import './App.css';
import LoginPage from './components/login.component';
import Navbar from './components/navbar.component';
import RegisterPage from './components/register.component';

const App = (props) => {
   const [logIn, setLogIn] = useState(true)

   let logIn_hide = '';
   let register_hide = '';
   const changeForm = (bool) => {
      setLogIn(bool);

      if (bool) {
         logIn_hide = '';
         register_hide = ' hide';
      } else {
         logIn_hide = ' hide';
         register_hide = '';
      }
   }

   return (
      <div id='app'>
         <Navbar changeForm={changeForm} />
         <div className="wrap">
            <div id="front_img">
               <img src="https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </div>
            {
               (logIn == true) ?
               <LoginPage hide={logIn_hide} />
               :
               <RegisterPage hide={register_hide} />
            }
         </div>
      </div>
   );
}

export default App;