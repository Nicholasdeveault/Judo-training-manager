const initialState = {
  class: [],
};

export default function agesReducer(state = initialState, action) {
  switch (action.type) {
    case "add_classes": {
      return { ...state, class: [...state.class, action.payload] };
    }
    default: {
      return state;
    }
  }
}

export const getClassesData = (state) => state.state;
