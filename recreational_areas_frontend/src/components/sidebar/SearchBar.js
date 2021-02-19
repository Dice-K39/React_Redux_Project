import React, { Component } from "react";
import { connect } from "react-redux";

import { searchQuery, clearSearch } from "../../redux/actions/Search";
import { sortFavorites } from "../../redux/actions/Favorites";

class SearchBar extends Component 
{
    state = 
    {
        keyword: "",
        activity: "",
        state: ""
    }

    handleOnChange = (event) =>
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    };

    handleOnClick = (event) =>
    {
        if (event.target.id === "submit")
        {
            event.preventDefault();

            this.props.searchQuery(this.state);
        }
        else if (event.target.id === "reset")
        {
            event.preventDefault();

            this.setState(
                {
                    keyword: "",
                    activity: "",
                    state: ""
                }
            )
            
            this.props.clearSearch();
        }
        else if (event.target.id === "sort")
        {
            event.preventDefault();

            this.props.sortFavorites();
        }
    }

    render() 
    {
        return (
            <div>
                <form className="search-form">
                    <label className="label">Search for Recreational Areas:</label>

                    <br />

                    <label className="label">Keyword Search:</label>
                    <div className="control">
                        <input className="input" type="text" name="keyword" placeholder="Input Keyword" value={this.state.keyword} onChange={this.handleOnChange} />
                    </div>

                    <br />

                    <label className="label">Activity Search:</label>
                    <div className="control">
                        <input className="input" type="text" name="activity" placeholder="Input Activity" value={this.state.activity} onChange={this.handleOnChange} />
                    </div>

                    <br />

                    <label className="label">State:</label>
                    <div className="control">
                        <select name="state" onChange={this.handleOnChange}>
                            <option value="">None</option> 
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

                    <br />

                    <div className="buttons">
                        <button className="button is-primary" id="submit" onClick={this.handleOnClick}>Submit</button>
                        <button className="button is-danger" type="reset" id="reset" onClick={this.handleOnClick}>Reset</button>
                        <button className="button is-warning" id="sort" onClick={this.handleOnClick}>Sort Favorites</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { searchQuery, clearSearch, sortFavorites })(SearchBar);