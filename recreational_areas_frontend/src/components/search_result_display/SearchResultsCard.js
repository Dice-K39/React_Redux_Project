import React from "react";
import { connect, useDispatch } from "react-redux";

import { saveFavorites } from "../../redux/actions/SaveFavorites";

const SearchResultsCard = (props) => 
{
    const dispatch = useDispatch();

    return (
        <div className="content has-background-light" key={props.id}>
            <h2>{props.area.FacilityName}<button className="favorite-btn button is-primary" onClick={() => dispatch(saveFavorites(props.area, props.currentUser))}>Favorite</button></h2>

            {/* cross-site scripting (XSS) danger */}
            <div dangerouslySetInnerHTML={{ __html: props.area.FacilityDescription}}></div>
        </div>
    )
}

export default connect(null, { saveFavorites })(SearchResultsCard);