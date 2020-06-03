import React, {useState} from "react";
import {connect} from "react-redux";
import { addTodo, delTodo } from "../../store/actions/todoAction";
import { FaStar, FaTrash, FaPencilAlt,FaPlus} from "react-icons/fa";
import "../../style/sass/NewTodoApp.scss";

const NewTodoApp= ({ todos, addTodo, delTodo}) => {
    const [title,setTitle] = useState("")
    // const [completed,setCompleted] = useState(false)
   const [important, setImportant] = useState(false)
    const change = e => {
        setTitle(e.target.value)
    }
    const submit = e => {
        if(!title) {
            alert(`Please input your todo task!`)
        } else {
        e.preventDefault();
        addTodo(title)
        setTitle("")
        }
    }
    const checkImportant = () => {
        if(important){
            setImportant(false)
            console.log("unimportant")
        } else {
            setImportant(true)
            console.log("important")
        }
       }
    // const addNewTodo = () => {
    // const data = {
    //   id:3,
    //   title: "This is three",
    //   complete: false
    // }
    // addTodo(data)
//   }
const result = todos.map(item=>
    <div key={item.id} className="todo-list">
        <form>
            <input id="senku" className="checkbox" type="checkbox" required/>
            <p className={item.completed ? "merah" : "biru"}>{item.title}</p>
            <FaStar className={important ? "important icon" : "not-important icon"} onClick={()=> {checkImportant()}}/>
            <FaPencilAlt className="edit icon"/>
            <FaTrash className="delete icon" onClick={()=>{delTodo(item.id)}}/>
        </form>
    </div>
    )
  return(
    <div className="main-content">
        <div className="add-todo">
            <form onSubmit={submit}>
                <input type="text" value={todos.title} onChange={change} required/>
                <FaPlus className="add-icon icon" onClick={submit}/>
            </form>
        </div>
        <div className="task-list">
            <div className="todo-title">
                <h6>Task</h6>
                <h6>Important</h6>
            </div>
            <div className="todo-lists">
               {result}
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})
export default connect(mapStateToProps,{addTodo, delTodo})(NewTodoApp);