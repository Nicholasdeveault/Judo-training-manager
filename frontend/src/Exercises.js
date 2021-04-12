import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  requestExercisesInfo,
  receiveExercisesInfo,
  receiveExercisesInfoError,
} from "./actions";
import { getExercisesDataArray } from "./reducers/exercisesReducer";

const AllExercises = () => {
const dispatch = useDispatch();
const state = useSelector((state) => state);
const exercisesData = useSelector(getExercisesDataArray);

useEffect(() => {
    dispatch(requestExercisesInfo());
    fetch("/Exercises")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveExercisesInfo(json));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveExercisesInfoError());
      });
  }, [dispatch]);
// console.log(exercisesData);
return exercisesData ? (
  <Wrapper>
      <div>{exercisesData.exercises && exercisesData.exercises.map((exercise) => {
        return <div>
          <p>{exercise.type}</p>
          <p>{exercise.name}</p>
        </div>
      })}</div>
  </Wrapper>
) : (
  <div>Loading...</div>
)
}

const Wrapper = styled.div``;

export default AllExercises;