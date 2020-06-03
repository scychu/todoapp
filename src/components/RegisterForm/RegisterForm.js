import React from 'react'
import "../../style/sass/RegisterForm.scss";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
import axios from "axios";
import FormRegister from './FormRegister';

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/user/register"
class RegisterForm extends React.Component{
    state = {
        name : "",
        email: "",
        password:"",
        data:[],
        isLoading:false
    }
    getServer = async(nama,surel,sandi)=> {
        try {
            const res = await axios.post(`${baseUrl}`, {
                name:nama,
                email:surel,
                password:sandi
            })
            this.setState({isLoading:true})
            this.setState({data:res.data})
            console.log(this.state.data)
            console.log(this.state.data.status)
            console.log(this.state.data.data.token)
            localStorage.setItem('token', this.state.data.data.token)
            alert(`Account has been register`)
            if(this.state.data.status === "success"){
                localStorage.setItem('token',res.data.data.token)
                // window.location.href="http://localhost:3000/dashboard";
                this.props.history.push('/dashboard')
            }
        }
        catch (err) {
            // alert(err.response.data.message)
            console.log(err)
            // this.setState({isLoading:false})
        }
    }
    // componentDidMount(){
    //     this.getServer()
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
                        <FormRegister add={this.getServer} info={this.state}/>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default RegisterForm;
