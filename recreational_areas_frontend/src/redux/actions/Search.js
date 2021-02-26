export const searchQuery = (queries) =>
{
    const url = new URL("http://localhost:3000/search");
    
    url.search = new URLSearchParams(queries);

    return (
        dispatch =>
        {
            fetch(url)
                .then(res => res.json())
                .then(data => 
                {
                    dispatch(
                        {
                            type: "SEARCH_SUCCESS",
                            payload:
                            {
                                results: data.RECDATA
                            }
                        }
                    )
                });
        }
    );
}

export const clearSearch = () =>
{
    return (
        dispatch =>
        {
            dispatch(
                {
                    type: "CLEAR_SEARCH"
                }
            )
        }
    );
}