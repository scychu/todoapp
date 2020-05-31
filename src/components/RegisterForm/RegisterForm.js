import React from 'react'
import "../../style/sass/RegisterForm.scss";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
// import { Redirect } from 'react-router';
import axios from "axios";
import FormRegister from './FormRegister';

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/register"
class RegisterForm extends React.Component{
    state = {
        name : "",
        email: "",
        password:"",
        data:[]
    }
    getServer = async(nama,surel,sandi)=> {
        try {
            const res = await axios.post(`${baseUrl}`, {
                name:nama,
                email:surel,
                password:sandi
            })
            this.setState({data:res.data})
            console.log(this.state.data)
            console.log(this.state.data.status)
            alert(`Account has been register`)
            if(this.state.data.status === "success"){
                window.location.href="http://localhost:3000/dashboard";
            }
            }catch (err) {
                console.log(err)
                alert(`Account register failed`)
            }

        }
        // await axios.post(`${baseUrl}`, {
        //     name:nama,
        //     email:surel,
        //     password:sandi
        // })
        // .try(res => {
        //     this.setState({data:res.data})
        //     console.log(this.state.data)
        //     alert(`Account has been register`)
        //     if(res.status === "success"){
        //         window.location.href="http://localhost:300/dashboard";
        //     }
        // })
        // .catch(
        //     alert(`Account register failed`))
        // }
    

    // componentDidMount(){
    //     this.getServer()
    // }

    // addUser = async () => {
    //     const res = await axios.post(`${baseUrl}`, {
    //         email:this.state.email,
    //         password:this.state.password
    //     })
    //     this.setState({
    //         name: [res.data, ...this.state.name],
    //         email:"",
    //         password:""
    //     })
    // }

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
                        <FormRegister add={this.getServer}/>
                    </div>
                    {/* <Link to ="/dashboard" className="link" ><button>SIGN UP</button></Link> */}
                    {/* <button type="submit" onClick={this.getServer}>SIGN UP</button> */}
                </div>
            </div>
        </div>
    )
    }
}

export default RegisterForm;
