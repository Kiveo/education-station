import { GET_SCHOOLS_REQUEST, GET_SCHOOLS_SUCCESS } from '../constants/schoolConstants';

const initialState = {
  schools: [],
};

function rootReducer(state = initialState, action) {
  console.log('reducer::action, ', action.type);
  switch (action.type) {
    case GET_SCHOOLS_REQUEST: {
      return state;
    }

    case GET_SCHOOLS_SUCCESS: {
      return { ...state, schools: action.schools };
    }

    default:
      return state;
  }
}

export default rootReducer;
