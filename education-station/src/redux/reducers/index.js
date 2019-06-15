import { GET_SCHOOLS } from '../constants/actionConstants';

const initialState = {
  schools: [],
};

function rootReducer(state = initialState, action) {
  console.log('reducer::action, ', action);
  switch (action.type) {
    case GET_SCHOOLS: {
      return { ...state, schools: action.schools };
    }

    default:
      return state;
  }
}

export default rootReducer;
