import { combineReducers } from "redux";

import exercises from "./exercisesReducer";
import selectedWorkout from "./selectedWorkoutReducer";
import notesReducer from "./notesReducer";
import trainingsReducer from "./trainingsReducer";
import agesReducer from "./agesReducer";

//Add the reducers in here
export default combineReducers({
  exercises,
  selectedWorkout,
  notesReducer,
  trainingsReducer,
  agesReducer,
});
