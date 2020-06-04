import React from "react";

class ModalTask extends React.Component {
    
    render(){
    return(
        <div clasName="edit-task">
            <form>
            <input type="text"/>
            <button>edit</button>
            </form>
        </div>
    )
    }
}
export default ModalTask;