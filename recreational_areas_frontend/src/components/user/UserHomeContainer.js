import React from "react";

import SideBarContainer from "../sidebar/SideBarContainer";
import SearchResults from "../search_result_display/SearchResults";
import "./UserHomeContainer.css";

const UserHomeContainer = () => 
{
    return (
        <div className="columns" id="user-home">
            <SideBarContainer />
            <SearchResults />
        </div>
    )
}

export default UserHomeContainer;