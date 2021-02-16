import React from "react";

import SearchBar from "./SearchBar";
import FavoritesBar from "./FavoritesBar";
import "./SideBarContainer.css";

const SideBarContainer = () => 
{
    return (
        <div className="column side-bar has-background-light is-one-quarter">
            <SearchBar />
            
            <label className="label">Favorites:</label>
            <FavoritesBar />
        </div>
    )
}

export default SideBarContainer;