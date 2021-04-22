//ExercisesReducer
export const requestExercisesInfo = () => ({
  type: "REQUEST_EXERCISES_INFO",
});

export const receiveExercisesInfo = (exercises) => ({
  type: "RECEIVE_EXERCISES_INFO",
  exercises,
});

export const receiveExercisesInfoError = () => ({
  type: "RECEIVE_EXERCISES_INFO_ERROR",
});

//WarmUpReducer
export const requestExercisesTypeInfo = () => ({
  type: "REQUEST_EXERCISESTYPE_INFO",
});

export const receiveExercisesTypeInfo = (type) => ({
  type: "RECEIVE_EXERCISESTYPE_INFO",
  type,
});

export const receiveExercisesTypeInfoError = () => ({
  type: "RECEIVE_EXERCISESTYPE_INFO_ERROR",
});

export const removeItem = (exercise) => ({
  type: "REMOVE_ITEM",
  exercise,
});

export const removeMainItem = (exercise) => ({
  type: "REMOVE_ITEM_MAIN",
  exercise,
});

//USERS REDUCER

export const requestUsersInfo = () => ({
  type: "REQUEST_USERS_INFO",
});

export const receiveUsersInfo = (users) => ({
  type: "RECEIVE_USERS_INFO",
  users,
});

export const receiveUsersInfoError = () => ({
  type: "RECEIVE_USERS_INFO_ERROR",
});
