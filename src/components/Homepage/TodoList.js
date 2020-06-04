import React from 'react';
import { FaStar, FaTrash, FaPencilAlt} from "react-icons/fa";
import "../../style/sass/variable.scss"
import axios from "axios";

class TodoList extends React.Component {
    state ={
        importance:"",
        completed:"",
        isLoading:false,
        isChecked:false
    }

    checkBox = async(id,importance,completed) => {
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        const complete = {
            completed:"true"
        }
        const incomplete = {
            completed:"false"
        }
        try{
            const res = await axios.put(`https://team-g-miniproject.herokuapp.com/api/v1/tasks/${id}`,completed ? complete : incomplete, {
                headers: {
                    Authorization :token,
                }
            })
            console.log(res)
            this.props.getAll()
            this.setState({isLoading:false})
        }
        catch (err){
            console.log(err)
            this.setState({isLoading:false})
        }
        
        // if(document.getElementById('box').checked){
        //     console.log("finished")
        //     return check = "completed:true"
        // } else {
        //     this.setState({completed:false})
        //     console.log("unfinished")
        // }
        // console.log(check)
    }
    checking = (completed) => {
        if(document.getElementById('box').checked && completed) {
            console.log("completed")
        }else if (document.getElementById('box'.checked) || completed){
            this.setState({completed:true})
            // console.log("tes")
            console.log(this.state.completed)
        }
    }
    updateImportant = async(id,importance,completed) => {
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        const starTask = {
            importance: "true"
        }
        const unStarTask = {
            importance: "false"
        }
        try{
            const res = await axios.put(`https://team-g-miniproject.herokuapp.com/api/v1/tasks/${id}`, importance ? unStarTask : starTask, {
                headers: {
                    Authorization :token,
                }
            })
            console.log(res)
            this.props.getAll()
            this.setState({isLoading:false})
        }
        catch (err){
            console.log(err)
            this.setState({isLoading:false})
        }
    }

    result = this.props.todo.map(item=>
        <div key={item.id} className="todo-list">
            <form>
                <input id="box" type="checkbox" checked={this.isChecked} onClick={()=>{this.checking(item.completed)}}/>
                <p className={item.completed ? "completed": "not-complete"}>{item.name}</p>
                <FaStar className={item.importance ? "important icon" : "not-important icon"} onClick={()=> {this.updateImportant(item.id,item.importance,item.completed)}}/>
                <FaPencilAlt className="edit icon" onClick={()=>{
            console.log(`id:${item.id},important :${item.importance},completed: ${item.completed}`)}}/>
                <FaTrash className="delete icon" onClick={()=>{this.props.delLists(item.id)}}/>
            </form>
        </div>
        )
    render(){
        
        return(
            <div>
                {this.result}
            </div>

        )
    }
}
export default TodoList;
