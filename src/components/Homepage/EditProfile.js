import React from "react";
import {Link} from "react-router-dom";
import "../../style/sass/Dashboard.scss";
import FormAdd from "./FormAdd";
import TodoList from "./TodoList";
import {FaUserCircle} from "react-icons/fa";
import NoContent from "./NoContent";
import axios from "axios";
import Spinner from "../helper/Spinner";

class EditProfile extends React.Component {
    state={
        newLists:[],
        username:"",
        id:"",
        image:"",
        isLoading:false,
        data:[]
    }
    getUserProfile = async () => {
        const token = localStorage.getItem("token")
        try{
            const res = await axios.get("https://team-g-miniproject.herokuapp.com/api/v1/user", {
                headers: {
                    Authorization :token
                }
            })
            // console.log(res)
            // console.log(res.data)
            // console.log(res.data.userData)
            // console.log(res.data.data.userData.Profile.name)
            // console.log(res.data.data.userData.Profile.id)
            this.setState({username:res.data.data.userData.Profile.name})
            this.setState({id:res.data.data.userData.Profile.id})
            // this.setState({image: res.data.data.userData})
        }
        catch (err){
            alert(err)
        }
    }    
    updateProfile = async (id)=> {
        const token = localStorage.getItem("token")
        const changes = {
            name: "indah",
            image:""
        }
        try{
            const res = await axios.put(`https://team-g-miniproject.herokuapp.com/api/v1/user/${id}`, changes, {
                headers: {
                    Authorization :token
                }
            })
            this.setState({data:res.data})
            // console.log(this.state.data)
            // console.log(res.data)
            // console.log(res.data.userData)
            // console.log(res.data.data.userData.Profile.name)
            this.getUserProfile()
            this.setState({username:res.data.data.userData.Profile.name})
            this.setState({image: res.data.data.userData})
        }
        catch (err){
            alert(err)
        }
    }

    logoutClick = e => {
        localStorage.removeItem('token');
        this.props.history.push("/sign-in")
    }
    
    componentDidMount(){
        this.getUserProfile()
    }

    render(){
        return(
            <div className="homepage-wrapper">
                <div className="header">
                    <div className="header-nav">
                        <button onClick={()=> {this.logoutClick()}}>{this.state.isLoading ? "loading..." : "SIGN OUT" }</button>
                    </div>
                </div>
                <div className="edit-profile_section">
                    <div className="edit">
                        <div className="user-profile">
                            {!this.state.image ?<FaUserCircle className="user-image"/>: this.state.image}
                            <h3>{this.state.username}</h3>  
                        </div>
                        <button onClick={()=> {this.updateProfile(this.state.id)}}>Save changes</button>
                    </div>
                </div>
                {/* <div className="content">
                    <div className="left-nav">
                        <div className="user-profile">
                            {!this.state.image ?<FaUserCircle className="user-image"/>: this.state.image}
                            <div className="edit-profile">
                                <h3>{this.state.username}</h3>  
                                <Link to="/" className="link">Edit profile</Link>
                            </div>
                        </div>
                        <div className="nav-menu">
                            <ul>
                                <li><Link to="/my-day" className="link myday-section">My Day</Link></li>
                                <li><Link to="/important" className="link important-section">Important</Link></li>
                                <li><Link to="/completed" className="link completed-section">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <FormAdd todo={this.state.newLists} getAll={this.getAllTask}/>
                        <div className="task-list">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>
                            <div className="todo-lists">
                                {this.state.isLoading ? <Spinner/>: (!this.state.newLists.length ? <NoContent/> : <TodoList todo={this.state.newLists} getAll={this.getAllTask} delLists={this.delLists}/>)}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default EditProfile;