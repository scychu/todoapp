import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import "../../style/sass/Dashboard.scss";
import axios from "axios";

const baseUrl = "https://team-g-miniproject.herokuapp.com/api/v1/tasks"
const FormAdd = ({add,todo})=> {
    const [name,setName] = useState("")
    const [completed,setCompleted] = useState(false)
    const [important, setImportant] = useState(false)
    
    const change = e => {
        setName(e.target.value)
    }
    
    const submit = e => {
        if(!name) {
            alert(`Please input your todo task!`)
        } else {
        e.preventDefault();
        // add(name,completed,important)
        setName("")
        createTask()
        }
    }

    const createTask = async () => {
        const token = localStorage.getItem('token')
        console.log(token)
        try {
            const res = await axios.post(`${baseUrl}`,{
                headers:{
                    Authorization :token,
                    'Content-Type':"application/json"
                },
                body:{
                    name: "coding",
                    description: "work on daily task",
                    due_date: "2020-10-06"
                }
            })
            console.log(res.data)
            this.setState({todo: res.data.data.tasks})
        }
        catch (err){
            console.log(err.message)
        }
    }


    return (
        <div className="add-todo">
            <form onSubmit={submit}>
                <input type="text" value={name} onChange={change} required/>
                <FaPlus className="add-icon icon" onClick={submit}/>
            </form>
        </div>
        )
}

export default FormAdd;
