import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import "../../style/sass/Dashboard.scss";
const FormAdd = ({add})=> {
    const [title,setTitle] = useState("")
    
    const change = e => {
        setTitle(e.target.value)
    }
    const submit = e => {
        if(!title) {
            alert(`Please input your todo task!`)
        } else {
        e.preventDefault();
        add(title)
        setTitle("")
        }
    }
    return (
        <div className="add-todo">
            <form onSubmit={submit}>
                <input type="text" value={title} onChange={change} required/>
                <FaPlus className="add-icon icon" onClick={submit}/>
            </form>
        </div>
        )
}
export default FormAdd;
