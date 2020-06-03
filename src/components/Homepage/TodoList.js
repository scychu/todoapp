import React, {useState} from 'react';
import { FaStar, FaTrash, FaPencilAlt} from "react-icons/fa";
import "../../style/sass/variable.scss"
import axios from "axios";

const TodoList = ({todo,delLists}) => {
   const [completed,setCompleted] = useState(false)
   const [importance, setImportance] = useState(false)
   
   const checkImportant = async(id,importance,completed) => {
        const token = localStorage.getItem('token')
        console.log(token)
        try{
            const res = await axios.put(`https://team-g-miniproject.herokuapp.com/api/v1/tasks/${id}`, {
                headers: {
                    Authorization :token
                }
            })
            console.log(res)
            // this.setState({newLists: this.state.newLists.filter(list => list.id !==id)
            setImportance(true)
            
            console.log(id)
        }
        catch (err){
            console.log(err)
        }
       console.log(id)
       console.log(importance)
       console.log(completed)
//     if(important){
//         setImportant(false)
//         console.log("unimportant")
//     } else {
//         setImportant(true)
//         console.log("important")
//     }
   }
   const checkBox = () => {
        if(document.getElementById("box").checked){
           setCompleted(true)
           console.log("checked")
        } else {
           console.log("not checked")
        }
    }
    const checkId =id => {
        console.log(id)
    }

    const result = todo.map(item=>
        <div key={item.id} className="todo-list">
            <form>
                <input id="box" className="checkbox" onClick={checkBox}type="checkbox" required/>
                <p className={item.completed ? "merah" : "biru"}>{item.name}</p>
                <FaStar className={importance ? "important icon" : "not-important icon"} onClick={()=> {checkImportant(item.id,item.importance,item.completed)}}/>
                <FaPencilAlt className="edit icon" onClick={()=>{
            console.log(`id:${item.id},important :${item.importance},completed: ${item.completed}`)}}/>
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
