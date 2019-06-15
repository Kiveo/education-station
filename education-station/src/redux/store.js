import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import schoolsSaga from '../sagas/schoolsSaga';
import rootReducer from './reducers/rootReducer';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// run the Saga MW
sagaMiddleware.run(schoolsSaga);

export default store;
