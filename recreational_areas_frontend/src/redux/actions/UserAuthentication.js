const BASE_URL = "http://localhost:3000";

export const userSignUp = (user, history) => 
{
    return (
        dispatch =>
        {
            fetch(BASE_URL + "/users",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ user: user })
            })
                .then(res => res.json())
                .then(data =>
                    {
                        if (data.status === 500)
                        {
                            console.log(data.message);
                        }
                        else
                        {
                            dispatch(
                                {
                                    type: "AUTH_SUCCESS",
                                    payload: 
                                    {
                                        loggedIn: data.logged_in, 
                                        currentUser: data.user
                                    }
                                }
                            );

                            history.push("/")
                        }
                    })
        }
    );
}

export const userLogIn = (user, history) =>
{
    return dispatch =>
    {
        fetch(BASE_URL + "/sessions",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: user })
        })
            .then(res => res.json())
            .then(data =>
                {
                    dispatch(
                        {
                            type: "AUTH_SUCCESS",
                            payload:
                            {
                                loggedIn: data.logged_in,
                                currentUser: data.user
                            }
                        }
                    );

                    history.push("/");
                })
    };
}

export const userLogOut = (history) =>
{
    return dispatch =>
    {
        fetch(BASE_URL + "/logout",
        {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data =>
            {
                dispatch(
                {
                    type: "LOGOUT"
                });

                history.push("/");
            });
    };
}