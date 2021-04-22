import { combineReducers } from "redux";

import exercises from "./exercisesReducer";
import selectedWorkout from "./selectedWorkoutReducer";
import notesReducer from "./notesReducer";
import usersReducer from "./usersReducer";
import agesReducer from "./agesReducer";

//Add the reducers in here
export default combineReducers({
  exercises,
  selectedWorkout,
  notesReducer,
  usersReducer,
  agesReducer,
});
