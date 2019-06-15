import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import schoolsSaga from '../sagas/schoolsSaga';
import rootReducer from './reducers/rootReducer';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

// run the Saga MW
sagaMiddleware.run(schoolsSaga);

export default store;
