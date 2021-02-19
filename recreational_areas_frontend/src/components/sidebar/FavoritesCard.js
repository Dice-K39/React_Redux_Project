import React from "react";

const FavoritesCard = (props) => 
{
    return (
        <div className="content c-card has-background-light" key={props.id} id={props.id}>
            {props.area.facility_name}<button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button>
        </div>
    )
}

export default FavoritesCard;