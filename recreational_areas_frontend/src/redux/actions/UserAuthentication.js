const URL = "http://localhost:3001";

export const userSignUp = (user, history) => 
{debugger
    return (
        dispatch =>
        {
            fetch(URL + "/users",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                credentials: "include",
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
{debugger
    return dispatch =>
    {
        fetch(URL + "/sessions",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
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
        fetch(URL + "/logout",
        {
            method: "DELETE",
            credentials: "include"
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