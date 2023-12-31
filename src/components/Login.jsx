import React from 'react'
import fb from '../assets/img/fb.webp'
import google from '../assets/img/google.webp'
const Login = () => {
    const GoogleOAuth =()=>{
   window.open("http://localhost:4000/auth/google","_Self");
    }
    const HandleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className='Login_pages'>
        <div className="login">
        <div className="logo">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pinterest-round-color-icon.png" alt="" />
            <small>hey Buddy</small>
            <h3>Welcome to Pinterest</h3>
        </div>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='' required/>
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder='' required/>
            <span>Forget your Password?</span>
            <button type='submit'>Login</button>
            <center><h4>or</h4></center>
        </form>
        <div className="other_options">
            <button><img src={fb} alt="" /></button>
            <button onClick={GoogleOAuth}><img src={google} alt="" /></button>
        </div>
        <div className="terms">
            <p>By continuing you agree to Pinterest's <strong>Terms of Service</strong>and acknowlegde
            you've read our<strong>Privacy Policy</strong></p>
            <hr />
            <h4>Not on Pinterest yet?<strong>Sign Up</strong></h4>
        </div>
        </div>
        </div>
    )
}

export default Login
