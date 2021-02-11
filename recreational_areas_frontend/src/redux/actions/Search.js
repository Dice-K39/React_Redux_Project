export const searchQuery = (queries) =>
{
    const url = new URL("http://localhost:3000/search");
    
    url.search = new URLSearchParams(queries);

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));

//     const { keyword, activity, state } = queries;
//     const URL = `https://ridb.recreation.gov/api/v1/facilities?query=${keyword}&limit=50&offset=0&state=${state}&activity=${activity}`;
//     const key = process.env.REACT_APP_API_KEY;
// debugger
//     return (dispatch =>
//     {
//         fetch(URL,
//         {
//             method: "GET",
//             headers: 
//             {
//                 "access-control-allow-origin": '*',
//                 "content-type": "application/json",
//                 "accept": "application/json",
//                 "apikey": key
//             }
//         })
//             .then(res => res.json())
//             .then(data => 
//             {console.log(data)
//                 dispatch(
//                     {
//                         type: "SEARCH_SUCCESS",
//                         paylod:
//                         {
//                             results: data.results
//                         }
//                     }
//                 )
//             })
//             .catch(err => console.log(err))
//     })

    

}