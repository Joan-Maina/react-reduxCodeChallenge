import { combineReducers } from "redux";
import DisplayReducer from './DisplayReducer'
import QuantityReducer from "./QuantityReducer";



const rootReducer = combineReducers({
    DisplayReducer ,
    QuantityReducer
})

export default rootReducer;