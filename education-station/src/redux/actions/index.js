import { GET_SCHOOLS } from '../constants/actionConstants';


export function getSchools(schools) {
  return { type: GET_SCHOOLS, schools };
}
