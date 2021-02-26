import { connect } from "react-redux";

import SearchResultsCard from "./SearchResultsCard";
import { saveFavorites } from "../../redux/actions/Favorites";

const SearchResults = (props) => 
{
    return (
        <div className="column is-offset-one-quarter" id="display-container">
            {
                (props.searchResults.length !== 0) ? 
                (
                    props.searchResults.map((area, i) => 
                        <SearchResultsCard 
                            area={area} 
                            key={i + 1} 
                            id={i + 1} 
                            currentUser={props.currentUser} 
                            save={() => (props.saveFavorites(area, props.currentUser))} 
                        />
                    )
                ) 
                : 
                ""
            }
        </div>
    )
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