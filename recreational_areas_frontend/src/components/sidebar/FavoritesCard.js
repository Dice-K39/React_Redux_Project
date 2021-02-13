import React from "react";
import { connect, useDispatch } from "react-redux";

import { deleteFavorites } from "../../redux/actions/Favorites";

export const FavoritesCard = (props) => 
{
    const dispatch = useDispatch();

    const handleOnClick = () =>
    {
        dispatch(deleteFavorites(props.area, props.currentUser))
    }

    return (
        <div className="content c-card has-background-light" key={props.id} id={props.id}>
            {props.area.facility_name}<button className="delete-btn button is-small is-danger" onClick={handleOnClick}>X</button>
        </div>
    )
}

export default connect(null, { deleteFavorites })(FavoritesCard);