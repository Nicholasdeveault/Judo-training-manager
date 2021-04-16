import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getExercisesDataArray } from "./reducers/exercisesReducer";
import SearchBar from "./SearchBar";
import AddBar from "./addExerciseBar";

const AllExercises = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const exercisesData = useSelector(getExercisesDataArray);
  const [highlight, setHighlight] = useState(undefined);

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
        {/* <AddBar /> */}
        <Div>
          <SearchBar
          // onClick={(suggestion) => {
          //  style={{
          //    background:
          //      suggestion.name === highlight
          //        ? "hsla(247, 0%, 69%, 0.26)"
          //        : "transparent",
          // }}}}
          />
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
  width: 1500px;
  margin: 0 auto;
  margin-top: 250px;
`;

export default AllExercises;
