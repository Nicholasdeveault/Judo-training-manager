import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const PastTrainings = () => {
  const [oldTrainings, setOldTrainings] = useState();
  const [searched, setSearched] = useState("");

  useEffect(() => {
    fetch("/pastTrainings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        return setOldTrainings(data.data);
      });
  }, []);
  console.log(oldTrainings);
  return oldTrainings ? (
    <>
      {/* <SearchBar searched={searched} setSearched={setSearched} /> */}
      <Container>
        {oldTrainings &&
          oldTrainings.map((training) => {
            console.log(training);
            return (
              <>
                <Date>{training.noteTime}</Date>
                <DivAge>
                  <PAge>Age group: </PAge>
                  <Span>{training.class}</Span>
                </DivAge>
                <DivNote>
                  <PNote>Note: </PNote>
                  <Span>{training.noteType}</Span>
                </DivNote>
                <PastTraining>
                  <TrBody>
                    <PDiv>
                      <TrHead>
                        <ThHead>Warm up type</ThHead>
                        <ThHead>Warm up name</ThHead>
                        <ThHead>Warm up exercise duration</ThHead>
                        <ThHead>Warm up exercise belt</ThHead>
                      </TrHead>

                      <TdWarmup>
                        {/* <PName>Warm up type:</PName> */}
                        {training.completeTraining.warmUp.map((exercise) => {
                          console.log(exercise);
                          return (
                            <>
                              <P>{exercise.warmupType}</P>
                            </>
                          );
                        })}
                      </TdWarmup>
                      <TdWarmup>
                        {/* <PName>Warm up name: </PName> */}
                        {training.completeTraining.warmUp.map((exercise) => {
                          return (
                            <>
                              <P>{exercise.warmupEx}</P>
                            </>
                          );
                        })}
                      </TdWarmup>
                      <TdWarmup>
                        {/* <PName>Warm up exercise duration:</PName> */}
                        {training.completeTraining.warmUp.map((exercise) => {
                          return (
                            <>
                              <P>{exercise.exTime}</P>
                            </>
                          );
                        })}
                      </TdWarmup>
                      <TdWarmup>
                        {/* <PName> Warm up exercise belt:</PName> */}
                        {training.completeTraining.warmUp.map((exercise) => {
                          return (
                            <>
                              <P>{exercise.beltColors}</P>
                            </>
                          );
                        })}
                      </TdWarmup>
                      <TrHead>
                        <ThHead>Main exercise type</ThHead>
                        <ThHead>Main exercise name</ThHead>
                        <ThHead>Main exercise duration</ThHead>
                        <ThHead>Main exercise belt</ThHead>
                      </TrHead>
                      <TdMain>
                        {/* <PName> Main exercise type: </PName> */}
                        {training.completeTraining.sequence.map((exercise) => {
                          console.log(exercise);
                          return (
                            <>
                              <P>{exercise.trainingType} </P>
                            </>
                          );
                        })}
                      </TdMain>
                      <TdMain>
                        {/* <PName>Main exercise name: </PName> */}
                        {training.completeTraining.sequence.map((exercise) => {
                          console.log(exercise);
                          return (
                            <>
                              <P>{exercise.trainingEx} </P>
                            </>
                          );
                        })}
                      </TdMain>
                      <TdMain>
                        {/* <PName>Main exercise duration: </PName> */}
                        {training.completeTraining.sequence.map((exercise) => {
                          console.log(exercise);
                          return (
                            <>
                              <P>{exercise.mainExTime}</P>
                            </>
                          );
                        })}
                      </TdMain>
                      <TdMain>
                        {/* <PName>Main exercise belt: </PName> */}
                        {training.completeTraining.sequence.map((exercise) => {
                          return (
                            <>
                              <P>{exercise.mainBeltColors}</P>
                            </>
                          );
                        })}
                      </TdMain>
                    </PDiv>
                  </TrBody>
                </PastTraining>
              </>
            );
          })}
      </Container>
    </>
  ) : (
    <>
      <LoadingImg src="https://www.animatedimages.org/data/media/1289/animated-judo-image-0016.gif" />
    </>
  );
};

const ThHead = styled.th`
  font-size: 20px;
  width: 100%;
`;

const TrHead = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TrBody = styled.tr``;

const TdWarmup = styled.td`
  width: 17vw;
  padding: 20px 0;
  text-align: center;
  background-color: #ededed;
`;

const TdMain = styled.td`
  width: 17vw;
  padding: 20px 0;
  text-align: center;
`;

const Container = styled.div`
  border: 2px solid gray;
  width: 70vw;
  height: 980px;
  overflow-y: scroll;
  margin-left: 380px;
`;

const PastTraining = styled.div`
  border-bottom: 2px solid gray;
  margin: 40px;
  padding-bottom: 40px;
`;

const PDiv = styled.div`
  width: 66vw;
`;

const DivAge = styled.div`
  display: flex;
  align-items: center;
`;

const DivNote = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.p`
  font-weight: bolder;
  font-size: 25px;
  margin: 20px 40px;
  padding-left: 5px;
  background-color: #d6d6d6;
`;

const PName = styled.p`
  line-height: 1.8;
  font-weight: bolder;
  font-size: 19px;
  margin-right: 10px;
`;

const PAge = styled.p`
  line-height: 1.8;
  font-weight: bolder;
  font-size: 19px;
  margin-left: 40px;
`;

const PNote = styled.p`
  line-height: 1.8;
  font-weight: bolder;
  font-size: 19px;
  margin-left: 40px;
`;

const P = styled.p`
  padding-right: 5px;
  line-height: 2;
  font-weight: bolder;
`;

const Span = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const LoadingImg = styled.img`
  width: 220px;
  height: 200px;
  margin-left: 950px;
`;

export default PastTrainings;
