import { useSelector } from "react-redux";

const initialState = {
  warmUp: [],
  principalPart: [],
};

export default function typeReducer(state = initialState, action) {
  // console.log("HELLO", action);
  switch (action.type) {
    case "add_warmup_ex": {
      return { ...state, warmUp: [...state.warmUp, action.payload] };
    }
    case "add_mainpart_ex": {
      return {
        ...state,
        principalPart: [...state.principalPart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

export const getExercisesTypeData = (state) => state.name;
