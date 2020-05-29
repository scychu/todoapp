import React from "react";
import {Link} from "react-router-dom";
import "../../style/sass/Dashboard.scss";
import FormAdd from "./FormAdd";
import TodoList from "./TodoList";
import {FaUserCircle} from "react-icons/fa";

class Homepage extends React.Component {
    state={
        newLists:[{
            id:0,
            completed:false,
            important:false,
            title:"Create mini project to-do app"
        }],
    }
    addNewList = data => {
        const len = this.state.newLists.length
        const newTodo = {
            id:len + 1,
            title:data,
            completed:false
        }
        // console.log(len)
        // console.log(newTodo)
        console.log(newTodo)
        this.setState({
            newLists:[...this.state.newLists, newTodo]
        })
    }
    delLists = (id) => {
        this.setState({
            newLists: this.state.newLists.filter(list => list.id !==id)
        })
        console.log(id)
    }
    render(){
        return(
            <div className="homepage-wrapper">
                <div className="header">
                    <div className="header-nav">
                    <Link to ="/sign-in" className="link" ><button>SIGN OUT</button></Link>
                    </div>
                </div>
                <div className="content">
                    <div className="left-nav">
                        <div className="user-profile">
                            <FaUserCircle className="user-image"/>
                            <div className="edit-profile">
                                <h3>User name</h3>  
                                <Link to="/" className="link">Edit profile</Link>
                            </div>
                        </div>
                        <div className="nav-menu">
                            <ul>
                                <li><Link to="/my-day" className="link myday-section" id="my-day">My Day</Link></li>
                                <li><Link to="/important" className="link important-section">Important</Link></li>
                                <li><Link to="/completed" className="link completed-section">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <FormAdd add={this.addNewList}/>
                        <div className="task-list">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>
                            <div className="todo-lists">
                                <TodoList todo={this.state.newLists} delLists={this.delLists} completed={this.state.completed}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;