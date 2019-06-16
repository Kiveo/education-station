import { GET_SCHOOLS_REQUEST, GET_SCHOOLS_SUCCESS, GET_SCHOOLS_FAILURE } from '../constants/schoolConstants';

const initialState = {
  schools: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHOOLS_REQUEST: {
      return state;
    }

    case GET_SCHOOLS_SUCCESS: {
      return { ...state, schools: action.response.Schools };
    }

    case GET_SCHOOLS_FAILURE: {
      return { ...state, error: action.message };
    }

    default:
      return state;
  }
}

export default rootReducer;
