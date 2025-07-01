import { createStore } from "redux";
import reducer from "./reducers/laptops";

const store = createStore(reducer);

export default store;