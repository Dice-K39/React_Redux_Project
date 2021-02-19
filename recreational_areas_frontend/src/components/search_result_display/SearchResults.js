import React, { Component } from "react";
import { connect } from "react-redux";

import SearchResultsCard from "./SearchResultsCard";
import { saveFavorites } from "../../redux/actions/Favorites";

class SearchResults extends Component 
{
    render() 
    {
        return (
            <div className="column is-offset-one-quarter" id="display-container">
                {
                    (this.props.searchResults.length !== 0) ? 
                    (
                        this.props.searchResults.map((area, i) => 
                            <SearchResultsCard area={area} key={i + 1} id={i + 1} currentUser={this.props.currentUser} save={() => (this.props.saveFavorites(area, this.props.currentUser))} />
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

export default connect(mapStateToProps, { saveFavorites })(SearchResults);