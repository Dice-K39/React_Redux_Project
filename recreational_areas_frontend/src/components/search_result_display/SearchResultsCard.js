import React from "react";

export const SearchResultsCard = (props) => 
{
    return (
        <div className="content has-background-light" key={props.id}>
            <h2>{props.area.FacilityName}<button className="favorite-btn button is-primary">Favorite</button></h2>

            {/* cross-site scripting (XSS) danger */}
            <div dangerouslySetInnerHTML={{ __html: props.area.FacilityDescription}}></div>
        </div>
    )
}

export default SearchResultsCard;