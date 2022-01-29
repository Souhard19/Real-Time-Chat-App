
import React from 'react';

import '../styles/login.css'
import '../styles/register.css'

const Login = (props) => {
   return (
      <div className="container">
         <div className="form" id='signIn_form'>
            <form action="">
               <h3>Sign In</h3>
               <label htmlFor="userName">User Name</label>
               <input type="text" name="userName" placeholder='User Name' className="formTextFeild" />
               <br />
               <label htmlFor="password"></label>
               <input type="password" name="password" placeholder='Password' className="formTextFeild" />
               <br/>
               <input id='submit' type="submit" value="Log In" className='button' />
            </form>
         </div>
      </div>
   );
}

export default Login;