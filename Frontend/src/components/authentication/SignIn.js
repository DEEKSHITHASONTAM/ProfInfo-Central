import React, { useState } from 'react'
import './styl.css'


function SignIn() {
    const [loginData, setLoginData] = useState({
      email: "",
      password:""
    })
    const [emailData, setEmail] = useState("");
    const [passwordData, setPassword] = useState("");
    

    function handleChange(e){
    const {name, value} = e.target;
    setLoginData((prev) => {
      return {...prev,
         [name] :value
        }
    })
   
    }

    function storeData(){
      setEmail(loginData.email);
      setPassword(loginData.password);
      
      setLoginData({
        email: "",
        password:""
      })
  
    }

  return (
    <div className='login-position'>
    <div className='login-box'>
        <div className='login-heading'>Login</div>
        <div className='cont2'>
        <div className='input-field' >
          <input value={loginData.email}  onChange={handleChange} name='email' type="text" required spellcheck="false" />
          <label>Enter email</label>
         </div>
        <div className='input-field'>
          <input value={loginData.password} onChange={handleChange} name='password' type="password" required spellcheck="false" /> 
          <label>Password</label>
         </div>
        </div>
        <p className='forgot'>Forgot Password?</p> 
        <div onClick={storeData} className='btn'>Login</div> 
        <div className='btm'>New Student? <span>Sign up</span></div>
        <div className='btm'>New Faculty? <span>Sign up</span></div>
        
    </div>
    </div>
  )
}

export default SignIn;