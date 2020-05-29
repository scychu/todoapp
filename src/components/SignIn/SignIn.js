import React from "react";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
import "../../style/sass/RegisterForm.scss";

class SignIn extends React.Component {
    state = {
        name : "stacey",
        email: "scajaboleh@gmail.com",
        password:"12345"
    }
    getData = async () => {
        const res = await fetch("https://team-g-miniproject.herokuapp.com/api/v1/register")
        const data = await res.json()
        console.log(data)
    }
    componentDidMount(){
        this.getData()
    }

    render(){
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
                        <input type="text"
                        placeholder="Email"
                        value={this.state.email}
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        />
                    </div>
                    {/* <Link to ="/dashboard" className="link" ><button>SIGN IN</button></Link> */}
                    <button type="submit" onClick={this.getData}>SIGN IN</button>
                </div>
            </div>

            
        </div>
    )
    }
}

export default SignIn;