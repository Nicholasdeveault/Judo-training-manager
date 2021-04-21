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
  const [searched, setSearched] = useState("");

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
        <AddBar />
        <Div>
          <SearchBar searched={searched} setSearched={setSearched} />
          {newExerciseArray?.map((exercise) => {
            return (
              <div>
                <H1>{exercise} /</H1>
                <DivExercises>
                  {exercisesData?.exercises?.map((Ex) => {
                    if (Ex.type === exercise) {
                      return (
                        <div>
                          <H2 name={Ex.name} searched={searched}>
                            {Ex.name}
                          </H2>
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
    <LoadingImg src="https://www.animatedimages.org/data/media/1289/animated-judo-image-0016.gif" />
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
  background-color: ${({ searched, name }) => {
    if (name === searched) {
      return "#ffca33";
    }
  }};
  box-shadow: ${({ searched, name }) => {
    if (name === searched) {
      return "2px 4px 8px 4px lightgray";
    }
  }};
  border-radius: ${({ searched, name }) => {
    if (name === searched) {
      return "5px";
    }
  }};
  padding-left: ${({ searched, name }) => {
    if (name === searched) {
      return "10px";
    }
  }};
  margin-right: ${({ searched, name }) => {
    if (name === searched) {
      return "10px";
    }
  }};
`;

const DivExercises = styled.div`
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 280px);
  width: 1500px;
  margin: 0 auto;
  margin-top: 100px;
`;

const LoadingImg = styled.img`
  width: 220px;
  height: 200px;
  margin-left: 950px;
`;

export default AllExercises;
