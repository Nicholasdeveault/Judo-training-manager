import { combineReducers } from "redux";

import exercises from "./exercisesReducer";
import selectedWorkout from "./selectedWorkoutReducer";

//Add the reducers in here
export default combineReducers({ exercises, selectedWorkout });
