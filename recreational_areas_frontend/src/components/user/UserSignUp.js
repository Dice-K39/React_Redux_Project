import React, { Component } from "react";
import { connect } from "react-redux";

import { userRegister } from "../../actions/UserAuthentication";

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

        this.props.userRegister(this.state);
    }

    render() 
    {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label className="label">Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <label className="label">Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <label className="label">Re-enter Password:</label>
                    <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <button className="button is-primary" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { userRegister })(UserSignUp);