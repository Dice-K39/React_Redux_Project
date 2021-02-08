import React, { Component } from "react";

class SearchBar extends Component 
{
    render() 
    {
        return (
            <div>
                <label className="label">Search for Recreational Areas:</label>

                <br />

                <label className="label">Keyword Search:</label>
                <div className="control">
                    <input className="input" type="text" id="keyword_query" placeholder="Input Keyword" />
                </div>
            </div>
        )
    }
}

export default SearchBar;