import React from 'react';
import { FaStar, FaTrash, FaPencilAlt, FaCheck, FaSquare} from "react-icons/fa";
import "../../style/sass/variable.scss"
import axios from "axios";

class TodoList extends React.Component {
    state ={
        importance:"",
        completed:"",
        isLoading:false,
        isChecked:false
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
    updateComplete = async (id, completed)=> {
        const token = localStorage.getItem('token')
        const toCompleted = {
            completed: "true"
        }
        const toUncompleted = {
            completed :"false"
        }
        try {
            const res = await axios.put (`https://team-g-miniproject.herokuapp.com/api/v1/tasks/${id}`, completed ? toUncompleted : toCompleted,{
                headers:{
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
    getMoreData =  async (id)=>{
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get(`https://team-g-miniproject.herokuapp.com/api/v1/tasks/order?offset=10`, {
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
    
    result = this.props.todo.map(item=>
        <div key={item.id} className="todo-list">
            <form>
                {/* <input id="box" type="checkbox" className={item.completed ? "completed" :"not-completed"}onClick={()=>{this.checkBox(item.id,item.importance,item.completed)}}/> */}
                {item.completed ? <FaCheck className="completed" onClick={()=>this.updateComplete(item.id,item.completed)}/> : <FaSquare className="not-completed" onClick={()=>this.updateComplete(item.id,item.completed)}/>}
                <p className={item.completed ? "complete": "not-complete"}>{item.name}</p>
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
                <div>
                    <button onClick={()=> this.props.more()}>more...</button>
                </div>
            </div>

        )
    }
}
export default TodoList;
