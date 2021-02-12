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
            )
        }
        default:
        {
            return state;
        }
    }
}