import React from "react";
import {FaFacebookF, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"
import {Link} from "react-router-dom";
import axios from "axios";
import "../../style/sass/RegisterForm.scss";

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/user/login"
class SignIn extends React.Component {
    state= {
        email:"",
        password:"",
        data:[],
        isLoading:false
    }
    handleChange = e =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    medsosClick = e => {
        alert(`this feature haven't been develop yet! Please login using your email`)
    }
    getData = async()=> {
        try{
            const res = await axios.post(`${baseUrl}`, {
                email:this.state.email,
                password:this.state.password
            })
            this.setState({isLoading:true})
            this.setState({data:res.data})
            // console.log(this.state.data)
            alert(`Success login`)
            // console.log(res.status)
            if(res.status === 201){
                localStorage.setItem('token',res.data.data.token)
                this.setState({isLoading:false, email:"", password:""})
                // window.location.href="http://localhost:3000/dashboard";
                this.props.history.push('/dashboard')
            }
        }
        catch (err){
            alert(err.response.data.message)
            this.setState({isLoading:false})
        }
    }
    loginClick = e => {
        this.setState({isLoading:true})
        e.preventDefault();
        this.getData()
    }

    render(){
        // console.log(this.props)
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
                            <li><Link to="#" onClick={()=>{this.medsosClick()}} className="media-icon fb" ><FaFacebookF size="2x"/></Link></li>
                            <li><Link to="#" onClick={()=>{this.medsosClick()}} className="media-icon gp" ><FaGooglePlusG size="2x"/></Link></li>
                            <li><Link to="#" onClick={()=>{this.medsosClick()}} className="media-icon li" ><FaLinkedinIn size="2x"/></Link></li>
                        </ul>
                    </div>
                    <p>or use your email for registation</p>
                    <div className="form">
                        <form onSubmit={this.loginClick}>
                            <input type="text"
                            id="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                            <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                            <button onClick={this.loginClick}>{this.state.isLoading ? "loading" : "SIGN IN"}</button>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
    }
}
export default SignIn;