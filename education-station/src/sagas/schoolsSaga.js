import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_SCHOOLS_REQUEST } from '../redux/constants/schoolConstants';
import fetchSchools from '../containers/helpers/fetchSchools';
import { requestPath } from '../containers/api';

// worker Saga
function* getSchools() {
  console.log(':::SAGA');
  try {
    const schools = yield call(fetchSchools, requestPath);
    yield put({ type: 'USER_FETCH_SUCCESS', schools });
  } catch (e) {
    // simulating. May return to this later. // TODO
    yield put({ type: 'GET_SCHOOLS_FAIL', message: e.message });
  }
}

// Watcher Saga
function* schoolsSaga() {
  yield takeEvery(GET_SCHOOLS_REQUEST, getSchools);
}

export default schoolsSaga;
