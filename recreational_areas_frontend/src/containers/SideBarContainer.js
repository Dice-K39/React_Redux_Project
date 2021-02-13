import React from "react";

import SearchBar from "../components/sidebar/SearchBar";
import FavoritesBar from "../components/sidebar/FavoritesBar";
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