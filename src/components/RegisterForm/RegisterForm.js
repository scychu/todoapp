import React from 'react'
import "../../style/sass/RegisterForm.scss";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
import axios from "axios";

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/register"
class RegisterForm extends React.Component{
    state = {
        name : [],
        email: "scajaboleh@gmail.com",
        password:"12345"
    }

    getData = async () => {
        const res = await axios.get(baseUrl)
        console.log(res)
    }
    componentDidMount(){
        this.getData()
    }

    addUser = async () => {
        const res = await axios.post(`${baseUrl}`, {
            email:this.state.email,
            password:this.state.password
        })
        this.setState({
            name: [res.data, ...this.state.name],
            email:"",
            password:""
        })
    }

    render () {
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
                        value={this.state.name}
                        />
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
                    {/* <Link to ="/dashboard" className="link" ><button>SIGN UP</button></Link> */}
                    <button type="submit" onClick={this.getData}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
    }
}

export default RegisterForm;
