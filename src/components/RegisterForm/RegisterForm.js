import React from 'react'
import "../../style/sass/RegisterForm.scss";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";

const RegisterForm=()=> {
    
    return (
        <div className="register-wrapper">
            <div className="left-div">
                <div className="left-wrapper">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info
                        <Link to ="/sign-in" className="link" ><button>SIGN IN</button></Link>
                    </p>
                </div>
            </div>
            <div className="right-div">
                <div className="right-div_wrapper">
                    <h1>Created Account</h1>
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
                        placeholder="Name"
                        />
                        <input
                        placeholder="Email"
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                    <Link to ="/dashboard" className="link" ><button>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
