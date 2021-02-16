const BASE_URL = "http://localhost:3000/users"

export const saveFavorites = (areaData, currentUser) =>
{
    const URL = BASE_URL + `/${currentUser.id}/recreational_areas`;

    return (
        dispatch =>
        {
            fetch(URL,
            {
                method:"POST",
                headers:
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    { 
                        recreational_area: 
                        {
                            facility_name: areaData.FacilityName,
                            facility_description: areaData.FacilityDescription,
                            facility_id: areaData.FacilityID,
                            facility_directions: areaData.FacilityDirections,
                            facility_email: areaData.FacilityEmail,
                            facility_phone: areaData.FacilityPhone,
                        }   
                    })
            })
            .then(res => res.json())
            .then(data => 
            {
                if (data.status >= 400)
                {
                    dispatch(
                        {
                            type: "FAVORITE_NOT_SAVED",
                            payload: data
                        }
                    )
                }
                else
                {    
                    dispatch(
                        {
                            type: "FAVORITE_SAVED",
                            payload:
                            {
                                favorite: data
                            }
                        }
                    )
                }
            })
        }
    );
}

export const getFavorites = currentUser =>
{
    const URL = BASE_URL + `/${currentUser.id}/recreational_areas`

    return (
        dispatch =>
        fetch(URL)
            .then(res => res.json())
            .then(data =>
            {
                dispatch(
                    {
                        type: "GET_FAVORITES",
                        payload: data
                    }
                )
            })
    );
}

export const deleteFavorites = (areaData, currentUser) =>
{
    const URL = BASE_URL + `/${currentUser.id}/recreational_areas/${areaData.id}`

    return (
        dispatch =>
            fetch(URL,
            {
                method: "DELETE",
                headers:
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(res => res.json())
                .then(data =>
                    {
                        dispatch(
                            {
                                type: "FAVORITE_DELETED",
                                payload: areaData
                            }
                        )
                    }
                )
                .catch(err => console.log(err.message))
    )
}