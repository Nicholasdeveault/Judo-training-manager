import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getExercisesDataArray } from "./reducers/exercisesReducer";
import SearchBar from "./SearchBar";
import AddBar from "./addExerciseBar";
import { useMediaQuery } from "./useMediaQuery";

const AllExercises = ({ refresh }) => {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  const exercisesData = useSelector(getExercisesDataArray);
  const [searched, setSearched] = useState("");

  let newExerciseArray = [];

  if (exercisesData.exercises) {
    exercisesData.exercises.map((exercise) => {
      return newExerciseArray.push(exercise.type);
    });
  }
  newExerciseArray = newExerciseArray.filter((item, index) => {
    return newExerciseArray.indexOf(item) === index;
  });

  return isDesktop ? (
    <Container>
      {exercisesData ? (
        <>
          <AddBar refresh={refresh} />
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
      ) : (
        <Loading>読み込んでいます...</Loading>
      )}
    </Container>
  ) : (
    //Mobile part
    <MobileContainer>
      {exercisesData ? (
        <>
          <AddBar />
          <MobileDiv>
            <SearchBar searched={searched} setSearched={setSearched} />
            {newExerciseArray?.map((exercise) => {
              return (
                <div>
                  <MobileH1>{exercise} /</MobileH1>
                  <DivExercisesMobile>
                    {exercisesData?.exercises?.map((Ex) => {
                      if (Ex.type === exercise) {
                        return (
                          <div>
                            <MobileH2 name={Ex.name} searched={searched}>
                              {Ex.name}
                            </MobileH2>
                          </div>
                        );
                      }
                    })}
                  </DivExercisesMobile>
                </div>
              );
            })}
          </MobileDiv>
        </>
      ) : (
        <Loading>読み込んでいます...</Loading>
      )}
    </MobileContainer>
  );
};

//MOBILE STYLING

const MobileContainer = styled.div``;

const MobileDiv = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MobileH1 = styled.h1`
  font-size: 30px;
  border-top: 2px solid gray;
  padding-top: 60px;
`;

const MobileH2 = styled.h2`
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

const DivExercisesMobile = styled.div`
  padding-bottom: 20px;
`;

//DESTOP STYLING

const Container = styled.div``;

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

const Loading = styled.div`
  width: 220px;
  height: 200px;
  margin-left: 1000px;
`;

export default AllExercises;
