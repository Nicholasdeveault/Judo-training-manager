import { useSelector } from "react-redux";

const initialState = {
  trainings: [],
};

export default function trainingsReducer(state = initialState, action) {
  switch (action.type) {
    case "add_trainings": {
      return { ...state, trainings: [...state.trainings, action.payload] };
    }
    default: {
      return state;
    }
  }
}

export const getTrainingData = (state) => state.state;
