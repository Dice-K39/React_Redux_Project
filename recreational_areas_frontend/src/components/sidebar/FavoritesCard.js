import React, { useState } from "react";

const FavoritesCard = (props) => 
{
    const [likes, setLikes] = useState(0) // [0, f(){}]

    return (
        <div className="content c-card has-background-light" key={props.id} id={props.id}>
            {props.area.facility_name}<button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button>
            <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>Like</button>
            {likes}
        </div>
    )
}

export default FavoritesCard;