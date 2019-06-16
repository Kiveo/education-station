import { GET_SCHOOLS_REQUEST, GET_SCHOOLS_SUCCESS, GET_SCHOOLS_FAILURE } from '../constants/schoolConstants';


export function getSchoolsRequest() {
  return { type: GET_SCHOOLS_REQUEST };
}

export function getSchoolsSuccess(schools) {
  return { type: GET_SCHOOLS_SUCCESS, schools };
}

export function getSchoolsFailure(message) {
  return { type: GET_SCHOOLS_FAILURE, message };
}
