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

  return oldTrainings ? (
    <>
      {/* <SearchBar searched={searched} setSearched={setSearched} /> */}
      <Container>
        {oldTrainings &&
          oldTrainings.map((training) => {
            return (
              <>
                <Date>{training.payload.noteTime}</Date>
                <PastTraining>
                  <FirstHalf>
                    <PDiv>
                      <PName>Warm up type:</PName>
                      <P> {training.payload.warmupType}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Warm up name: </PName>
                      <P>{training.payload.warmupEx}</P>
                    </PDiv>
                    <PDiv>
                      <PName> Main exercise type: </PName>
                      <P>{training.payload.trainingType}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Main exercise name: </PName>
                      <P>{training.payload.trainingEx}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Note: </PName>
                      <P>{training.payload.noteType}</P>
                    </PDiv>
                  </FirstHalf>
                  <SecondHalf>
                    <PDiv>
                      <PName>Main exercise duration: </PName>
                      <P>{training.payload.mainExTime}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Warm up exercise duration:</PName>{" "}
                      <P>{training.payload.exTime}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Main exercise belt: </PName>
                      <P>{training.payload.mainBeltColors}</P>
                    </PDiv>
                    <PDiv>
                      <PName> Warm up exercise belt:</PName>
                      <P>{training.payload.beltColors}</P>
                    </PDiv>
                    <PDiv>
                      <PName>Age group: </PName>
                      <P>{training.payload.class}</P>
                    </PDiv>
                  </SecondHalf>
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

const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const SecondHalf = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: -30px;
`;

const Container = styled.div`
  border: 2px solid gray;
  margin-left: 50px;
  width: 1200px;
  height: 980px;
  overflow-y: scroll;
  margin-left: 550px;
`;

const PastTraining = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
  margin: 40px;
  padding-bottom: 40px;
`;

const PDiv = styled.div`
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

const P = styled.p`
  line-height: 1.8;
  font-weight: bolder;
`;

const LoadingImg = styled.img`
  width: 220px;
  height: 200px;
  margin-left: 950px;
`;

export default PastTrainings;
