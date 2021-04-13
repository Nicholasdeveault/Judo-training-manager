
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