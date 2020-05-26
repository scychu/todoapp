import React from "react";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
import "../../style/sass/RegisterForm.scss";

const SignIn = ()=> {
    return (
        <div className="sign-in_wrapper">
            <div className="left-div">
                <div className="left-wrapper">
                    <h2>Hello, Friend!</h2>
                    <p>Enter your personal details and start your journey with us
                    <Link to ="/" className="link" ><button>SIGN UP</button></Link>
                    </p>
                    
                </div>
            </div>
            <div className="right-div">
                <div className="right-div_wrapper">
                    <h1>Sign in to Task Manager</h1>
                    <div className="icons-container">
                        <ul>
                            <li><Link to="/register-form" className="media-icon fb"><FaFacebookF size="2x"/></Link></li>
                            <li><Link to="/register-form" className="media-icon gp"><FaGooglePlusG size="2x"/></Link></li>
                            <li><Link to="/register-form" className="media-icon li"><FaLinkedinIn size="2x"/></Link></li>
                        </ul>
                    </div>
                    <p>or use your email for registation</p>
                    <div className="form">
                        <input
                        placeholder="Email"
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                    <Link to ="/dashboard" className="link" ><button>SIGN IN</button></Link>
                </div>
            </div>

            
        </div>
    )
}

export default SignIn;