import React, { Component } from "react";
import { connect } from "react-redux";

import UserHomeContainer from './UserHomeContainer'

class IndexContainer extends Component 
{
    render() 
    {
        return (
            <div>
                {this.props.isLoggedIn ? <UserHomeContainer /> : ""}
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