import React, {useState} from 'react';
import { FaStar, FaTrash, FaPencilAlt} from "react-icons/fa";
const TodoList = ({todo,delLists}) => {
    const [important, setImportant] = useState("")
    const change = e => {
       setImportant("true")
       console.log(important)
   }
    const result = todo.map(item=>
        <div key={item.id} className="todo-list">
            <form>
            <input className="checkbox" type="checkbox" required onChange={change}/>
            <p className={item.completed ? "merah" : "biru"}>{item.title}</p>
            <FaStar className="important icon" onClick={()=>console.log("important")}/>
            <FaPencilAlt className="edit icon"/>
            <FaTrash className="delete icon" onClick={()=>{delLists(item.id)}}/>
            </form>
        </div>
        )
    return (
        <div>
            {result}
        </div>
    )
}

export default TodoList;
