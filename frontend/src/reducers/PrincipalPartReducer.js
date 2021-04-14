// const initialState = {
//     type: {},
//     status: "idle",
//   };
  
//   export default function typeReducer(state = initialState, action) {
//     // console.log("HELLO", action);
//     switch (action.type) {
//       case "REQUEST_EXERCISESTYPE_INFO": {
//         console.log("REQUEST_EXERCISESTYPE_INFO", action);
//         return {
//           ...state,
//           status: "loading",
//         };
//       }
//       case "RECEIVE_EXERCISESTYPE_INFO": {
//         console.log("RECEIVE_EXERCISESTYPE_INFO", action);
//         return {
//           status: "idle",
//           type: action.type.data,
//         };
//       }
//       case "RECEIVE_EXERCISESTYPE_INFO_ERROR": {
//         console.log("RECEIVE_EXERCISESTYPE_INFO_ERROR", action);
//         return {
//           ...state,
//           status: "error",
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   }
  
//   export const getExercisesTypeData = (state) =>state.type;