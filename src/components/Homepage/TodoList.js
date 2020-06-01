import React from 'react';
import { FaStar, FaTrash, FaPencilAlt} from "react-icons/fa";

const TodoList = ({todo,delLists}) => {
    const important = ()=> {
        let senku = document.getElementById("senku");
        senku.classList.toggle("importanted")
        console.log("yeah")
    }

    const result = todo.map(item=>
        <div key={item.id} className="todo-list">
            <form>
                <input className="checkbox" type="checkbox" required/>
                <p className={item.completed ? "merah" : "biru"}>{item.title}</p>
                <FaStar id="senku"className="important icon" onClick={important}/>
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
