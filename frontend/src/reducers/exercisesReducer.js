const initialState = {
  exercises: null,
  status: "hasen't loaded",
};

export default function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_EXERCISES_INFO": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_EXERCISES_INFO": {
      return {
        status: "idle",
        exercises: action.exercises.data,
      };
    }
    case "RECEIVE_EXERCISES_INFO_ERROR": {
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

export const getExercisesDataArray = (state) => state.exercises;
