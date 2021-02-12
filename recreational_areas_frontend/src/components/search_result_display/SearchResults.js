import React, { Component } from "react";
import { connect } from "react-redux";

import SearchResultsCard from "./SearchResultsCard";

class SearchResults extends Component 
{
    render() 
    {
        return (
            <div className="column is-offset-one-quarter" id="display-container">
                {
                    (Object.entries(this.props.searchResults).length !== 0) ? 
                    (
                        this.props.searchResults.map((area, i) => 
                            <SearchResultsCard area={area} key={i + 1} id={i + 1} currentUser={this.props.currentUser} />
                        )
                    ) 
                    : 
                    ""
                }
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return (
        {
            searchResults: state.search.results,
            currentUser: state.auth.currentUser
        }
    )
}

export default connect(mapStateToProps)(SearchResults);