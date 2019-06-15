import store from "./store/index";
import { getSchools } from "./actions/index";

window.store = store;
window.getSchools = getSchools;