const initialState =
{
    recreationalAreas: [],
    thisIsState: "This is application state."
}

export const reducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        default:
        {
            return state;
        }
    }
}