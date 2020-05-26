import React from "react";
// import SignUp from "../components/SignUp/SignUp";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {Route} from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Homepage from "../components/Homepage/Homepage";
import MyDay from "../components/Homepage/MyDay";

const Routes = ()=> {
    return(
        <div>
            <Route path="/" exact>
                <RegisterForm/>
            </Route>
            <Route path="/sign-in" component={SignIn} exact/>
            <Route path="/dashboard" component={Homepage} exact/>
            <Route path="/my-day" component={MyDay} exact/>
        </div>
    )
}
export default Routes;
