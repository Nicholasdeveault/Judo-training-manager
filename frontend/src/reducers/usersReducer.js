const initialState = {
  currentUser: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "authentification_user": {
      return { ...state, currentUser: [...state.currentUsers, action.payload] };
    }
    default: {
      return state;
    }
  }
}

export const getUsersData = (state) => state.currentUser;
