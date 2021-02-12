import React from "react";

import SearchBar from "../components/sidebar/SearchBar";
import FavoritesBar from "../components/sidebar/FavoritesBar";

const SideBarContainer = () => 
{
    return (
        <div className="column side-bar has-background-light is-one-quarter">
            <SearchBar />
            <FavoritesBar />
        </div>
    )
}

export default SideBarContainer;