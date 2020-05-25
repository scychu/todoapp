import React from "react";
import {Link} from "react-router-dom";
import "../../style/sass/RegisterForm.scss";
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserCircle} from "react-icons/fa";

class Homepage extends React.Component {

    render(){
        return(
            <div className="homepage-wrapper">
                <div className="header">
                    <div className="header-nav">
                        <button>Sign Out</button>
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
                                <li><Link to="/" className="link">My Day</Link></li>
                                <li><Link to="/" className="link">Important</Link></li>
                                <li><Link to="/" className="link">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="add-todo">
                            <input
                            type="text"
                            placeholder="add task..."
                            />
                            <FaPlus className="add-icon icon"/>
                        </div>
                        <div className="task-list">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>
                            <div className="todo-list">
                                <input
                                className="checkbox"
                                type="checkbox"
                                />
                                <p>Reading a book</p>
                                <FaStar className="important icon"/>
                                <FaPencilAlt className="edit icon"/>
                                <FaTrash className="delete icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;