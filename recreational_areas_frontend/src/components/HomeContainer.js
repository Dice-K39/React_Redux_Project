import React from "react";
import { connect } from "react-redux";

import UserHomeContainer from "./user/UserHomeContainer";
import Home from "./Home";

const HomeContainer = (props) =>  
{
    return (
        <>
            {props.isLoggedIn ? 
                <UserHomeContainer /> 
                : 
                <Home />
            }
        </>
    )
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