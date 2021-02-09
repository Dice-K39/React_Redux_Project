import React, { Component } from "react";
import { connect } from "react-redux";

class HomeContainer extends Component 
{
    render() 
    {
        return (
            <div>
                HomeContainer
                {this.props.isLoggedIn ? "Logged In" : "Not Logged In"}
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

export default connect(mapStateToProps)(HomeContainer);