const initialState =
{
    favorites: [],
    message: ""
}

export const favoritesReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "SAVE_FAVORITE":
        {
            return (
                {
                    favorites: [...state.favorites, action.payload.favorite],
                    message: ""
                }
            );
        }
        case "DO_NOT_SAVE_FAVORITE":
        {
            return (
                {
                    favorites: [...state.favorites],
                    message: action.payload.message
                }
            )
        }
        case "GET_FAVORITES":
        {
            return (
                {
                    favorites: [...action.payload],
                    message: ""
                }
            );
        }
        case "CLEAR_FAVORITES":
        {
            return (
                {
                    favorites: [],
                    message: ""
                }
            )
        }
        case "DELETE_FAVORITE":
        {
            const newFavoritesArray = state.favorites.filter(area => area.id !== action.payload.id)

            return (
                {
                    favorites: [...newFavoritesArray],
                    message: ""
                }
            );
        }
        default:
        {
            return state;
        }
    }
}