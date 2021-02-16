const initialState =
{
    favorites: [],
    message: ""
}

export const favoritesReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "FAVORITE_SAVED":
        {
            return (
                {
                    favorites: [...state.favorites, action.payload.favorite]
                }
            );
        }
        case "FAVORITE_NOT_SAVED":
        {debugger
            return (
                {
                    favorites: [...state],
                    message: action.payload.message
                }
            )
        }
        case "GET_FAVORITES":
        {
            return (
                {
                    favorites: [...action.payload]
                }
            );
        }
        case "CLEAR_FAVORITES":
        {
            return (
                {
                    favorites: []
                }
            )
        }
        case "FAVORITE_DELETED":
        {
            const newFavoritesArray = state.favorites.filter(area => area.id !== action.payload.id)

            return (
                {
                    favorites: [...newFavoritesArray]
                }
            );
        }
        default:
        {
            return state;
        }
    }
}