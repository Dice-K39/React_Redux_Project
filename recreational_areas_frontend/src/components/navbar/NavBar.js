import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NavBar extends Component
{
    routeChange = (event) =>
    {
        const path = event.target.name;
        
        this.props.history.push(path);
    }

    render()
    {
        return (
            <div>
                <nav className="navbar is-fixed-top is-warning">
                    <div className="signup-login-button is-flex navbar-end">
                        {
                            this.props.isLoggedIn ?
                            (
                                <div>
                                    <button className="button is-danger" name="/logout" onClick={this.routeChange}>Log Out</button>
                                </div>
                            ) :
                            (
                                <div>
                                    <button className="button is-primary" name="/login" onClick={this.routeChange}>Log In</button>
                                    <button className="button is-info" name="/signup" onClick={this.routeChange}>Sign Up</button>
                                </div>
                            )
                        }
                    </div>
                </nav>
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

export default withRouter(connect(mapStateToProps)(NavBar));