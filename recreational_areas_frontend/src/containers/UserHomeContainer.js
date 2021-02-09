import React, { Component } from "react";
import { connect } from "react-redux";

class UserHomeContainer extends Component 
{
    render() 
    {
        return (
            <div>
                {this.props.isLoggedIn}
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return (
        {
            isLoggedIn: state.authentication.loggedIn
        }
    )
}

export default connect(mapStateToProps)(UserHomeContainer);