import React from "react";

const handleOnClick = props =>
{
    debugger
}

export const SearchResultsCard = (props) => 
{
    return (
        <div className="content has-background-light" key={props.id}>
            <h2>{props.area.FacilityName}<button className="favorite-btn button is-primary" onClick={() => handleOnClick(props.area)}>Favorite</button></h2>

            {/* cross-site scripting (XSS) danger */}
            <div dangerouslySetInnerHTML={{ __html: props.area.FacilityDescription}}></div>
        </div>
    )
}

export default SearchResultsCard;