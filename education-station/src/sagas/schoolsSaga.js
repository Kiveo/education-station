import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_SCHOOLS_REQUEST, GET_SCHOOLS_SUCCESS } from '../redux/constants/schoolConstants';
import fetchSchools from '../containers/helpers/fetchSchools';
import { requestPath } from '../containers/api';

// worker Saga
function* getSchools() {
  try {
    const response = yield call(fetchSchools, requestPath);
    if (!response) {
      throw new Error('Failed to fetch schools');
    }
    yield put({ type: GET_SCHOOLS_SUCCESS, response });
  } catch (e) {
    console.log(':::e', e.message);
    yield put({ type: 'GET_SCHOOLS_FAIL', message: e.message });
  }
}

// Watcher Saga
function* schoolsSaga() {
  yield takeEvery(GET_SCHOOLS_REQUEST, getSchools);
}

export default schoolsSaga;
