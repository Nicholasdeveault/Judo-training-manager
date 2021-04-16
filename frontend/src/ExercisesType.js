// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";
// import {
//   requestExercisesInfo,
//   receiveExercisesInfo,
//   receiveExercisesInfoError,
// } from "./actions";
// import { getExercisesDataArray } from "./reducers/exercisesReducer";

// const ExercisesType = () => {
//   const { type } = useParams();
// const dispatch = useDispatch();
// const state = useSelector((state) => state);
// const exercisesData = useSelector(getExercisesDataArray);

// useEffect(() => {
//     dispatch(requestExercisesInfo());

//     fetch(`/Exercises/${type}`)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(receiveExercisesInfo(json));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(receiveExercisesInfoError());
//       });
//   }, [dispatch]);
// // console.log(exercisesData);

//   return exercisesData ? (
//     <Wrapper>
//       {exercisesData?.exercises?.map((exercise) => {
//         return <p>{exercise.name}</p>
// })}
//     </Wrapper>
//   ) : (
//     <div>Loading...</div>
//   )
// }

// const Wrapper = styled.div``;

// export default ExercisesType;
