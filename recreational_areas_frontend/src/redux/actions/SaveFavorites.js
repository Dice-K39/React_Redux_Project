export const saveFavorites = (areaData, currentUser) =>
{
    const URL = `http://localhost:3000/users/${currentUser.id}/recreational_areas`;

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
                dispatch(
                    {
                        type: "FAVORITE_SAVED",
                        payload:
                        {
                            favorite: data
                        }
                    }
                )
            })
        }
    );
}