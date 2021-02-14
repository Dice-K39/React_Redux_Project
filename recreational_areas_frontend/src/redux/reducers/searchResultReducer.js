const initialState =
{
    results: {}
};

export const searchResultReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "SEARCH_SUCCESS":
        {
            return {
                ...state,
                results: action.payload.results
            };
        }
        case "CLEAR_SEARCH":
        {
            return {
                ...state,
                results: {}
            };
        }
        default:
        {
            return state;
        }
    };
};