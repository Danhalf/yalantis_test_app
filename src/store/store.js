import employeesReducer from "./employeesReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore( employeesReducer, composeWithDevTools(applyMiddleware()) )

export default store