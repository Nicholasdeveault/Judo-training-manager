const initialState = {
  warmUp: [],
  sequence: [],
};

export default function typeReducer(state = initialState, action) {
  switch (action.type) {
    case "add_warmup_ex": {
      return { ...state, warmUp: [...state.warmUp, action.payload] };
    }
    case "add_mainpart_ex": {
      return {
        ...state,
        sequence: [...state.sequence, action.payload],
      };
    }
    case "REMOVE_ITEM": {
      const foundIndex = state.warmUp.findIndex((exercise) => {
        return exercise.warmupEx === action.exercise.warmupEx;
      });
      const stateCopy = { ...state };
      const warmUpCopy = [...state.warmUp];
      warmUpCopy.splice(foundIndex, 1);
      stateCopy.warmUp = warmUpCopy;
      return stateCopy;
    }
    case "REMOVE_ITEM_MAIN": {
      const findIndex = state.sequence.findIndex((exercise) => {
        return exercise.trainingEx === action.exercise.trainingEx;
      });
      const stateCopy = { ...state };
      const sequenceCopy = [...state.sequence];
      sequenceCopy.splice(findIndex, 1);
      stateCopy.sequence = sequenceCopy;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
}

export const getExercisesTypeData = (state) => state.state;
