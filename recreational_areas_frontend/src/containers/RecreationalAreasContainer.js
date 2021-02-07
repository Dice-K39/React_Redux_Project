import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRegisteration from "../components/user/UserRegisteration";

class RecreationalAreasContainer extends Component 
{
    render() 
    {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/register" component={UserRegisteration} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RecreationalAreasContainer;