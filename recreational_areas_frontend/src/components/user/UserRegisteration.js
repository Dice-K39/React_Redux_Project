import React, { Component } from "react";

class UserRegisteration extends Component 
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

                    <abel className="label">Re-enter Password:</abel>
                    <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <button className="button is-primary" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default UserRegisteration;