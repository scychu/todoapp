import React from "react";
// import SignUp from "../components/SignUp/SignUp";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {Route} from "react-router-dom";

const Routes = ()=> {
    return(
        <div>
            <Route path="/" component={RegisterForm} exact/>
            {/* <Route path="/" component={SignUp} exact/> */}
        </div>
    )
}
export default Routes;
