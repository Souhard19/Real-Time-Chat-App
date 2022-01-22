

import React from 'react';

import '../styles/register.css'
import '../styles/login.css'

const register = (props) => {
   return (
      <div className="container">
         <div className={"form"+props.hide} id='signUp_form'>
            <form action="">
               <h3>Register</h3>
               <input type="text" name="Name" placeholder='Name' class="formTextFeild" />
               <br />
               <input type="text" name="userName" placeholder='User Name' class="formTextFeild" />
               <br />
               <input type="password" name="password" placeholder='Password' class="formTextFeild" id="password" />
               <br/>
               {/* <input type="text" name="userName" placeholder='User Name' class="textFeild" />
               <br />
               <input type="text" name="userName" placeholder='User Name' class="textFeild" />
               <br/> */}
               <input id='submit' type="submit" value="Register" />
            </form>
         </div>
      </div>
   );
}

export default register;