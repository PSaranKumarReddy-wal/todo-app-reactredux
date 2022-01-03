import reducer from "./todo/todoReducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;