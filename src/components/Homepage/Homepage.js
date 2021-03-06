import React from "react";
import {Link} from "react-router-dom";
import "../../style/sass/Dashboard.scss";
import FormAdd from "./FormAdd";
import TodoList from "./TodoList";
import {FaUserCircle} from "react-icons/fa";
import NoContent from "./NoContent";
import axios from "axios";
import Spinner from "../helper/Spinner";

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/tasks/order"
class Homepage extends React.Component {
    state={
        newLists:[],
        username:"",
        image:"",
        isLoading:false,
        data:[]
    }
    getUser = async () => {
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
            this.setState({username:res.data.data.userData.Profile.name})
            // this.setState({image: res.data.data.userData})
        }
        catch (err){
<<<<<<< HEAD
            console.log(err)
            alert(`Please login first!`)
            this.props.history.push('/sign-in')
=======
            alert(err)
>>>>>>> c22f8d8e668206a3c9f9852a5ec280059d3b340b
        }
    }    

    getAllTask = async () => {
        this.setState({isLoading:true})
        const token = localStorage.getItem("token")
        try{
            const res = await axios.get(`${baseUrl}`, {
                headers: {
                    Authorization :token
                }
            })
            this.setState({data:res.data})
            this.setState({newLists: res.data.data.tasks})
            this.setState({isLoading:false})
            console.log(this.state.data)
        } catch(error){
<<<<<<< HEAD
            console.log(error)
=======
            alert(error)
>>>>>>> c22f8d8e668206a3c9f9852a5ec280059d3b340b
            this.setState({isLoading:false})
        }
    }
    getMoreData =  async (id)=>{
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get(`${baseUrl}?offset=10`, {
                headers: {
                    Authorization:token
                }
            })
            console.log(res)
            this.setState({isLoading:false})
        }catch (err){
            console.log(err)
        }
    }
    delLists = async (id) => {
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        try{
            const res = await axios.delete(`https://team-g-miniproject.herokuapp.com/api/v1/tasks/${id}`, {
                headers: {
                    Authorization :token
                }
            })
            console.log(res)
            this.getAllTask()
            this.setState({newLists: this.state.newLists.filter(list => list.id !==id)})
            this.setState({isLoading:false})
            console.log(id)
        }
        catch (err){
            console.log(err)
            this.setState({isLoading:false})
        }
    }
    
    logoutClick = e => {
        localStorage.removeItem('token');
        this.props.history.push("/sign-in")
    }
    
    componentDidMount(){
        this.getAllTask()
        this.getUser()
    }

    render(){
        return(
            <div className="homepage-wrapper">
                <div className="header">
                    <div className="header-nav">
                        <button onClick={()=> {this.logoutClick()}}>SIGN OUT</button>
                    </div>
                </div>
                <div className="content">
                    <div className="left-nav">
                        <div className="user-profile">
                            {!this.state.image ?<FaUserCircle className="user-image"/>: this.state.image}
                            <div className="edit-profile">
                                <h3>{this.state.username}</h3>  
                                <Link to="/edit-profile" className="link">Edit profile</Link>
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
                                {this.state.isLoading ? <Spinner/>: (!this.state.newLists.length ? <NoContent/> : <TodoList todo={this.state.newLists} getAll={this.getAllTask} delLists={this.delLists} more={this.getMoreData} info={this.state.data}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;