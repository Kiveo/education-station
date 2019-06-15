import { GET_SCHOOLS } from "../constants/actionConstants";

export function getSchools(payload) {
  return { type: GET_SCHOOLS, payload }
};