import { combineReducers } from "redux";

import exercises from "./exercisesReducer";
import selectedWorkout from "./warmUpReducer";


//Add the reducers in here
export default combineReducers({ exercises, selectedWorkout });