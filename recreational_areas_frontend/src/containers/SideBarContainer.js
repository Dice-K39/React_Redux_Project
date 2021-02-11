import React from "react";

import SearchBar from "../components/sidebar/SearchBar";
import FavoritesBar from "../components/sidebar/FavoritesBar";

const SideBarContainer = () => 
{
    return (
        <div className="columns">
            <div className="side-bar column has-background-light is-one-fifth is-narrow">
                <SearchBar />
                <FavoritesBar />
            </div>
        </div>
    )
}

export default SideBarContainer;