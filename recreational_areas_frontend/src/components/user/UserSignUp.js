import React, { Component } from "react";
import { connect } from "react-redux";

import { userSignUp } from "../../redux/actions/UserAuthentication";

class UserSignUp extends Component 
{
    state =
    {
        email: "",
        password: "",
        password_confirmation: ""
    };

    handleOnChange = event =>
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    };

    handleOnSubmit = event =>
    {
        event.preventDefault();

        this.props.userSignUp(this.state, this.props.history);
    }

    render() 
    {
        return (
            <div className="sign-up">
                <form onSubmit={this.handleOnSubmit}>
                    <label className="label">Email:</label>
                    <input className="input" type="text" name="email" value={this.state.email} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <label className="label">Password:</label>
                    <input className="input" type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <label className="label">Re-enter Password:</label>
                    <input className="input" type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <button className="button is-link" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { userSignUp })(UserSignUp);