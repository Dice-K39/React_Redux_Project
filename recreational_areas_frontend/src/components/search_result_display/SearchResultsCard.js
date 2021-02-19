import React from "react";

const SearchResultsCard = (props) => 
{
    return (
        <div className="content has-background-light" key={props.id}>
            <h2>{props.area.FacilityName}<button className="favorite-btn button is-primary" onClick={props.save}>Favorite</button></h2>

            {/* cross-site scripting (XSS) danger */}
            <div dangerouslySetInnerHTML={{ __html: props.area.FacilityDescription}}></div>
        </div>
    )
}

export default SearchResultsCard;