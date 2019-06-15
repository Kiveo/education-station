/**
|--------------------------------------------------
| Normally I'd do an asynchronous request here in response to an action, such as Thunk or SAGA.
| Since we are using a non-async set of dummy data, I am skipping the Redux/Actions type setup. 
| Also, I am not getting paid for this, so gotta be frugal with my time too ;)
|--------------------------------------------------
*/
const requestPath = '/SchoolsTeachersStudents.json';
const requestOptions = {
  headers : { 
    'Content-Type': 'application/json',
   }
}

const fetchSchools = () => {
  fetch(requestPath, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  .then((jsonResponse) => {
    console.log(jsonResponse.Schools)
    return jsonResponse.Schools;
  })
};

export default fetchSchools;