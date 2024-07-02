import React, { useState } from 'react'
import "./Loginpopup.css"
import { assets } from '../../frontend_assets/assets'

const Loginpopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                <input type='email' placeholder='Your email' required/>
                <input type="password" placeholder="Password" reqired/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign uo")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>    
  )
}

export default Loginpopup