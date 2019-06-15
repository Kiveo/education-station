/**
|--------------------------------------------------
| SAGA will fire this helper function.
| It could be used stand alone with async/await if store is not globally needed.
| Designed to be passed request url to allot for cross helper api setup
|--------------------------------------------------
*/

export const requestOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetchSchools = (requestPath, requestOptions) => {
  fetch(requestPath, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((jsonResponse) => {
      console.log(jsonResponse.Schools);
      return jsonResponse.Schools;
    });
};

export default fetchSchools;
