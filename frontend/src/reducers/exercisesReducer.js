const initialState = {
  exercises: null,
  status: "hasen't loaded",
};

export default function exercisesReducer(state = initialState, action) {
  // console.log("HELLO", action);
  switch (action.type) {
    case "REQUEST_EXERCISES_INFO": {
      console.log("REQUEST_EXERCISES_INFO", action);
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_EXERCISES_INFO": {
      console.log("RECEIVE_EXERCISES_INFO", action);
      return {
        status: "idle",
        exercises: action.exercises.data,
      };
    }
    case "RECEIVE_EXERCISES_INFO_ERROR": {
      console.log("RECEIVE_EXERCISES_INFO_ERROR", action);
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}

export const getExercisesDataArray = (state) =>state.exercises;