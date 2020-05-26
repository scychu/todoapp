import React from "react";
import {Link} from "react-router-dom";
import "../../style/sass/RegisterForm.scss";
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserCircle} from "react-icons/fa";

class MyDay extends React.Component {

    render(){
        return(
            <div className="my-day_wrapper">
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
                            <div className="todo-lists">
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                                <div className="todo-list">
                                    <input
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <p>Reading a book</p>
                                    <FaStar className="important icon" onClick={()=>console.log("important")}/>
                                    <FaPencilAlt className="edit icon"/>
                                    <FaTrash className="delete icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyDay;