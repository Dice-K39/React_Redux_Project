const initialState =
{
    loggedIn: false,
    currentUser: {},
    message: ""
}

export const authReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "AUTH_SUCCESS":
        {
            return (
                {
                    ...state,
                    loggedIn: action.payload.loggedIn,
                    currentUser: action.payload.currentUser,
                    message: ""
                }
            );
        }
        case "AUTH_FAIL":
        {debugger
            return (
                {
                    ...state,
                    loggedIn: false,
                    currentUser: {},
                    message: action.payload.message
                }
            );
        }
        case "LOGOUT":
        {
            return (
                {
                    ...state,
                    loggedIn: false,
                    currentUser: {},
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