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