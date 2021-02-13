const initialState =
{
    favorites: []
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
        case "GET_FAVORITES":
        {
            return (
                {
                    favorites: [...action.payload]
                }
            );
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