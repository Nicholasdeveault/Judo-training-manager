import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getExercisesDataArray } from "./reducers/exercisesReducer";
import SearchBar from "./SearchBar";

const AllExercises = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const exercisesData = useSelector(getExercisesDataArray);

  // console.log(exercisesData);

  let newExerciseArray = [];

  if (exercisesData.exercises) {
    exercisesData.exercises.map((exercise) => {
      newExerciseArray.push(exercise.type);
    });
  }
  newExerciseArray = newExerciseArray.filter((item, index) => {
    return newExerciseArray.indexOf(item) === index;
  });

  return exercisesData ? (
    <Wrapper>
      <>
        {/* {exercisesData.exercises && exercisesData.exercises.map((exercise) => { */}
        {/* return  */}
        <Div>
          {/* <H1>{exercise.type}</H1> */}
          {/* <H2>{exercise.name}</H2> */}
          {/* <SearchBar /> */}
          {newExerciseArray?.map((exercise) => {
            return (
              <div>
                <H1>{exercise} /</H1>
                <DivExercises>
                  {exercisesData?.exercises?.map((Ex) => {
                    if (Ex.type === exercise) {
                      return (
                        <div>
                          <H2>{Ex.name}</H2>
                        </div>
                      );
                    }
                  })}
                </DivExercises>
              </div>
            );
          })}
        </Div>

        {/* })} */}
      </>
    </Wrapper>
  ) : (
    <div>Loading...</div>
  );
};

const Wrapper = styled.div``;

const H1 = styled.h1`
  font-size: 30px;
  border-top: 2px solid gray;
  padding-top: 20px;
`;

const H2 = styled.h2`
  font-size: 18px;
  line-height: 1.8;
`;

const DivExercises = styled.div`
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 280px);
  width: 1600px;
  margin: 0 auto;
  margin-top: 250px;
  /* align-items: center; */
`;

export default AllExercises;

//Add the logic for the .post(/newExercise, addNewExercise);
