/**
|--------------------------------------------------
| // TODO decide
| Sagas or Thunk? 
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