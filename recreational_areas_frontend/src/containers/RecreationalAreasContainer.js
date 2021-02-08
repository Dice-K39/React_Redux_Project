import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserSignUp from "../components/user/UserSignUp";
import UserLogIn from "../components/user/UserLogIn";

class RecreationalAreasContainer extends Component 
{
    render() 
    {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/signup" component={UserSignUp} />
                        <Route path="/login" component={UserLogIn} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RecreationalAreasContainer;