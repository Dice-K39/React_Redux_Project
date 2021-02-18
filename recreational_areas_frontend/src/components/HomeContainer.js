import React, { Component } from "react";
import { connect } from "react-redux";

import UserHomeContainer from "./user/UserHomeContainer";
import Home from "./Home";

class HomeContainer extends Component 
{
    render() 
    {
        return (
            <>
                {this.props.isLoggedIn ? 
                    <UserHomeContainer /> 
                    : 
                    <Home />
                }
            </>
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

export default connect(mapStateToProps)(HomeContainer);