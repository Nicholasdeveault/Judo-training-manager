import { combineReducers } from "redux";

import exercises from "./exercisesReducer";
import type from "./warmUpReducer";


//Add the reducers in here
export default combineReducers({ exercises, type });