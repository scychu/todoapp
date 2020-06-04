import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {Route, Switch} from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Homepage from "../components/Homepage/Homepage";
import MyDay from "../components/Homepage/MyDay";
import NotFound from "../components/SignIn/NotFound";
import EditProfile from "../components/Homepage/EditProfile";
import ByImportance from "../components/Homepage/ByImportance";
import ByCompleted from "../components/Homepage/ByCompleted";

const Routes = ()=> {
    return(
        <Switch>
            <Route path="/" component={RegisterForm} exact/>
            <Route path="/sign-in" component={SignIn} exact/>
            <Route path="/dashboard" component={Homepage} exact/>
            <Route path="/edit-profile" component={EditProfile} exact/>
            <Route path="/my-day" component={MyDay} exact/> */}
            <Route path="/important" component={ByImportance} exact/>
            <Route path="/completed" component={ByCompleted} exact/>
            <Route component={NotFound} />
        </Switch>
    )
}
export default Routes;
