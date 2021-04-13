import React, { useEffect } from "react";
import moment from "moment";
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

let newExerciseArray = [];

if (exercisesData.exercises) {
  exercisesData.exercises.map((exercise) => {
    newExerciseArray.push(exercise.type);
  })
}
newExerciseArray = newExerciseArray.filter((item, index) => {
  return newExerciseArray.indexOf(item) === index;
});

return exercisesData ? (
  <Wrapper>
    <>
    {/* {exercisesData.exercises && exercisesData.exercises.map((exercise) => { */}
        {/* return  */}
        <div>
          {/* <H1>{exercise.type}</H1> */}
          {/* <H2>{exercise.name}</H2> */}
                {newExerciseArray?.map((exercise) => {
                  return <div>
                    <H1>{exercise}</H1>
                    <DivExercises>
                    {exercisesData?.exercises?.map((Ex) => {
                      if(Ex.type === exercise) {
                      return <div>
                      <H2>- {Ex.name}</H2>
                      </div>
                    }
                    })}
                    </DivExercises>
                    </div>
        })}</div>
        
      {/* })} */}
      </>
  </Wrapper>
) : (
  <div>Loading...</div>
)
}

const Wrapper = styled.div`

`;

const H1 = styled.h1`
font-size: 30px;
`;

const H2 = styled.h2`
font-size: 18px;

`;

const DivExercises = styled.div``;

export default AllExercises;