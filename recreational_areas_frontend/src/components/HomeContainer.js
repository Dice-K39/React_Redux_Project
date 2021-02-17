import React, { Component } from "react";
import { connect } from "react-redux";

import UserHomeContainer from "./user/UserHomeContainer";
import Home from "./Home";

class IndexContainer extends Component 
{
    render() 
    {
        return (
            <div>
                {this.props.isLoggedIn ? 
                    <UserHomeContainer /> 
                    : 
                    <Home />
                }
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return (
        {
            isLoggedIn: state.auth.loggedIn
        }
    )
}

export default connect(mapStateToProps)(IndexContainer);