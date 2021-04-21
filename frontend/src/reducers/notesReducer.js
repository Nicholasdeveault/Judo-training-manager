const initialState = {
  note: [],
};

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "add_note": {
      return { ...state, note: [...state.note, action.payload] };
    }
    default: {
      return state;
    }
  }
}

export const getNoteData = (state) => state.note;
