import { GET_SCHOOLS } from '../constants/actionConstants';

const initialState = {
  schools: []
};

function rootReducer(state = initialState, action) {
  console.log('reducer::action, ', action)
  if (action.type === GET_SCHOOLS) {
    return Object.assign({}, state, {
      schools: state.schools.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;