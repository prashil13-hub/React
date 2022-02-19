import { combineReducers } from "redux";
import BallReducer from "./ballReducer";
import BatReducer from "./batReducer";

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer,
})

export default rootReducer;