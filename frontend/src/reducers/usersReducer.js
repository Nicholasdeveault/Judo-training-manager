const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "add_user": {
      return { ...state, users: [...state.users, action.payload] };
    }
    default: {
      return state;
    }
  }
}

export const getUsersData = (state) => state.users;
