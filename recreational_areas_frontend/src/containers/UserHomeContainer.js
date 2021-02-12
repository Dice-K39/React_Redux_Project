import React from "react";

import SideBarContainer from "./SideBarContainer";
import SearchResults from "../components/search_result_display/SearchResults";
import "./UserHomeContainer.css";

const UserHomeContainer = () => 
{
    return (
        <div className="columns is-mobile" id="user-home">
            <SideBarContainer />
            <SearchResults />
        </div>
    )
}

export default UserHomeContainer;