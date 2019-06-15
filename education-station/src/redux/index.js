import store from './store/index';
import { getSchools } from './actions/schoolActions';

window.store = store;
window.getSchools = getSchools;
