const initialState =
{
    loggedIn: false,
    currentUser: {}
}

export const authReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "AUTH_SUCCESS":
            return (
                {
                    ...state,
                    loggedIn: action.payload.loggedIn,
                    currentUser: action.payload.currentUser
                }
            );

        case "LOGOUT":
            return (
                {
                    ...state,
                    loggedIn: false,
                    currentUser: {}
                }
            );

        default:
        {
            return state;
        }
    }
}