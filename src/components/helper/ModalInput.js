import React from "react";
import axios from "axios";
import "../../style/sass/Dashboard.scss";

class ModalInput extends React.Component {
    state={
        username:"",
        id:"",
        image:"",
        isLoading:false,
        isModalOpen:true,
        data:[]
    }
    
    getUserProfile = async () => {
        const token = localStorage.getItem("token")
        try{
            const res = await axios.get("https://team-g-miniproject.herokuapp.com/api/v1/user", {
                headers: {
                    Authorization :token
                }
            })
            // console.log(res)
            // console.log(res.data)
            // console.log(res.data.userData)
            // console.log(res.data.data.userData.Profile.name)
            // console.log(res.data.data.userData.Profile.id)
            this.setState({username:res.data.data.userData.Profile.name})
            this.setState({id:res.data.data.userData.Profile.id})
            // this.setState({image: res.data.data.userData})
        }
        catch (err){
            alert(err)
        }
    }    
    handleChange = e =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.username)
    }
    componentDidMount() {
        this.getUserProfile()
    }
   
    handleSubmit = e => {
        e.preventDefault();
    }

    updateProfile = async (id)=> {
        const token = localStorage.getItem("token")
        const changes = {
            name: this.state.username,
            image:""
        }
        try{
            const res = await axios.put(`https://team-g-miniproject.herokuapp.com/api/v1/user/${id}`, changes, {
                headers: {
                    Authorization :token
                }
            })
            alert(`Username update success!`)
            this.setState({data:res.data})
            this.setState({image: res.data.data.userData})
            this.props.back()
        }
        catch (err){
            alert(err)
        }
    }

    render(){
        return(
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-inner">
                        <form onSubmit={()=>this.updateProfile(this.state.id)}>
                            <p>Username:</p>
                            <input type="text"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                        </form>
                        <button onClick={()=>this.updateProfile(this.state.id)} >save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalInput;