import React, { Component } from "react";
import { connect } from "react-redux";

import FavoritesCard from "./FavoritesCard";

class FavoritesBar extends Component
{
    render()
    {
        return (
            <div>
                {
                    this.props.favorites.map((area, i) => <FavoritesCard area={area} key={i + 1} id={i + 1} currentUser={this.props.currentUser} />)
                }
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return (
        {
            favorites: state.favorites.favorites,
            currentUser: state.auth.currentUser
        }
    )
}

export default connect(mapStateToProps)(FavoritesBar);