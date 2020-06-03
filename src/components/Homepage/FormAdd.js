import React from "react";
import { FaPlus } from "react-icons/fa";
import "../../style/sass/Dashboard.scss";
import axios from "axios";

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/tasks"
class FormAdd extends React.Component {
    state = {
        name: "",
        completed:"",
        importance:"",
        isLoading:false
    }
    change = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addTask = async (e) => {
        this.setState({isLoading:true})
        let token = localStorage.getItem('token')
        if(!this.state.name) {
            alert(`Please input your todo task!`)
        } else {
        e.preventDefault();
        }
        const newTodo = {
            name:this.state.name,
        }
        try {
            await axios.post(`${baseUrl}`, newTodo,{
                headers:{
                    Authorization: token
                }
            })
            this.setState({name:""})
            this.props.getAll()
        }
        catch (err){
            console.log(err)
        }
    }
    render(){
        return (
            <div className="add-todo">
                <form onSubmit={this.addTask}>
                    <input type="text" name="name" value={this.state.name} onChange={this.change} required/>
                    <FaPlus className="add-icon icon" onClick={this.addTask}/>
                </form>
            </div>
            )
    }
}
export default FormAdd;
