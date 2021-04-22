import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "./useMediaQuery";

const PastTrainings = () => {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  const [oldTrainings, setOldTrainings] = useState();
  //Pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  useEffect(() => {
    // const fetchPosts = async () => {}
    fetch("/pastTrainings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        return setOldTrainings(data.data);
      });
  }, []);

  return isDesktop ? (
    <Container>
      {/* <SearchBar searched={searched} setSearched={setSearched} /> */}

      {oldTrainings ? (
        <>
          <div>
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
                            {training.completeTraining.warmUp.map(
                              (exercise) => {
                                console.log(exercise);
                                return (
                                  <>
                                    <P>{exercise.warmupType}</P>
                                  </>
                                );
                              }
                            )}
                          </TdWarmup>
                          <TdWarmup>
                            {training.completeTraining.warmUp.map(
                              (exercise) => {
                                return (
                                  <>
                                    <P>{exercise.warmupEx}</P>
                                  </>
                                );
                              }
                            )}
                          </TdWarmup>
                          <TdWarmup>
                            {training.completeTraining.warmUp.map(
                              (exercise) => {
                                return (
                                  <>
                                    <P>{exercise.exTime}</P>
                                  </>
                                );
                              }
                            )}
                          </TdWarmup>
                          <TdWarmup>
                            {training.completeTraining.warmUp.map(
                              (exercise) => {
                                return (
                                  <>
                                    <P>{exercise.beltColors}</P>
                                  </>
                                );
                              }
                            )}
                          </TdWarmup>
                          <TrHead>
                            <ThHead>Main exercise type</ThHead>
                            <ThHead>Main exercise name</ThHead>
                            <ThHead>Main exercise duration</ThHead>
                            <ThHead>Main exercise belt</ThHead>
                          </TrHead>
                          <TdMain>
                            {training.completeTraining.sequence.map(
                              (exercise) => {
                                console.log(exercise);
                                return (
                                  <>
                                    <P>{exercise.trainingType} </P>
                                  </>
                                );
                              }
                            )}
                          </TdMain>
                          <TdMain>
                            {training.completeTraining.sequence.map(
                              (exercise) => {
                                console.log(exercise);
                                return (
                                  <>
                                    <P>{exercise.trainingEx} </P>
                                  </>
                                );
                              }
                            )}
                          </TdMain>
                          <TdMain>
                            {training.completeTraining.sequence.map(
                              (exercise) => {
                                console.log(exercise);
                                return (
                                  <>
                                    <P>{exercise.mainExTime}</P>
                                  </>
                                );
                              }
                            )}
                          </TdMain>
                          <TdMain>
                            {training.completeTraining.sequence.map(
                              (exercise) => {
                                return (
                                  <>
                                    <P>{exercise.mainBeltColors}</P>
                                  </>
                                );
                              }
                            )}
                          </TdMain>
                        </PDiv>
                      </TrBody>
                    </PastTraining>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        <LoadingImg src="https://www.animatedimages.org/data/media/1289/animated-judo-image-0016.gif" />
      )}
    </Container>
  ) : (
    //Mobile version
    <MobileContainer>
      {oldTrainings ? (
        <div>
          {oldTrainings &&
            oldTrainings.map((training) => {
              console.log(training);
              return (
                <>
                  <Date>{training.noteTime}</Date>
                  <MobileDivAge>
                    {" "}
                    <MobilePAge>Age group: </MobilePAge>{" "}
                    <Span>{training.class}</Span>
                  </MobileDivAge>
                  <MobileDivNote>
                    <MobilePNote>Note: </MobilePNote>
                    <MobileSpan>{training.noteType}</MobileSpan>
                  </MobileDivNote>
                  <MobilePastTraining>
                    <MobileTrBody>
                      <MobilePDiv>
                        <MobileTrHead>
                          <MobileThHead>Warm up type</MobileThHead>
                          <MobileThHead>Warm up name</MobileThHead>
                          <MobileThHead>Warm up exercise duration</MobileThHead>
                          <MobileThHead>Warm up exercise belt</MobileThHead>
                        </MobileTrHead>

                        <MobileTdWarmup>
                          {training.completeTraining.warmUp.map((exercise) => {
                            console.log(exercise);
                            return (
                              <>
                                <MobileP>{exercise.warmupType} |</MobileP>
                              </>
                            );
                          })}
                        </MobileTdWarmup>
                        <MobileTdWarmup>
                          {training.completeTraining.warmUp.map((exercise) => {
                            return (
                              <>
                                <MobileP>{exercise.warmupEx} |</MobileP>
                              </>
                            );
                          })}
                        </MobileTdWarmup>
                        <MobileTdWarmup>
                          {training.completeTraining.warmUp.map((exercise) => {
                            return (
                              <>
                                <MobileP>{exercise.exTime}</MobileP>
                              </>
                            );
                          })}
                        </MobileTdWarmup>
                        <MobileTdWarmup>
                          {training.completeTraining.warmUp.map((exercise) => {
                            return (
                              <>
                                <MobileP>{exercise.beltColors}</MobileP>
                              </>
                            );
                          })}
                        </MobileTdWarmup>
                        <MobileTrHead>
                          <MobileThHead>Main exercise type</MobileThHead>
                          <MobileThHead>Main exercise name</MobileThHead>
                          <MobileThHead>Main exercise duration</MobileThHead>
                          <MobileThHead>Main exercise belt</MobileThHead>
                        </MobileTrHead>
                        <MobileTdMain>
                          {training.completeTraining.sequence.map(
                            (exercise) => {
                              console.log(exercise);
                              return (
                                <>
                                  <MobileP>{exercise.trainingType} |</MobileP>
                                </>
                              );
                            }
                          )}
                        </MobileTdMain>
                        <MobileTdMain>
                          {training.completeTraining.sequence.map(
                            (exercise) => {
                              console.log(exercise);
                              return (
                                <>
                                  <MobileP>{exercise.trainingEx} |</MobileP>
                                </>
                              );
                            }
                          )}
                        </MobileTdMain>
                        <MobileTdMain>
                          {training.completeTraining.sequence.map(
                            (exercise) => {
                              console.log(exercise);
                              return (
                                <>
                                  <MobileP>{exercise.mainExTime}</MobileP>
                                </>
                              );
                            }
                          )}
                        </MobileTdMain>
                        <MobileTdMain>
                          {training.completeTraining.sequence.map(
                            (exercise) => {
                              return (
                                <>
                                  <MobileP>{exercise.mainBeltColors}</MobileP>
                                </>
                              );
                            }
                          )}
                        </MobileTdMain>
                      </MobilePDiv>
                    </MobileTrBody>
                  </MobilePastTraining>
                </>
              );
            })}
        </div>
      ) : (
        <LoadingImg src="https://www.animatedimages.org/data/media/1289/animated-judo-image-0016.gif" />
      )}
    </MobileContainer>
  );
};

//MOBILE STYLING

const MobileDivNote = styled.div`
  display: flex;
  align-items: center;
`;

const MobileTdWarmup = styled.td`
  width: 20%;
  padding: 20px 20px 20px 0;
  text-align: center;
  background-color: #ededed;
`;

const MobileTdMain = styled.td`
  width: 20%;
  padding: 20px 20px 20px 0;
  text-align: center;
`;

const MobileContainer = styled.div`
  border: 2px solid gray;
  height: 980px;
  overflow-y: scroll;
`;

const MobileDivAge = styled.div`
  display: flex;
  align-items: center;
`;

const MobileThHead = styled.th`
  font-size: 20px;
  width: 100%;
  margin: 10px;
`;

const MobilePAge = styled.p`
  line-height: 1.8;
  font-weight: bolder;
  font-size: 19px;
  margin-left: 40px;
`;

const MobilePNote = styled.p`
  line-height: 1.8;
  font-weight: bolder;
  font-size: 19px;
  margin-left: 40px;
`;

const MobileP = styled.p`
  padding-right: 5px;
  line-height: 2;
  font-weight: bolder;
`;

const MobileSpan = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const MobileTrHead = styled.tr`
  display: flex;
  margin-bottom: 10px;
`;

const MobilePDiv = styled.div`
  margin-right: 40px;
`;

const MobilePastTraining = styled.div`
  border-bottom: 2px solid gray;
  margin-top: 40px;
  padding-bottom: 40px;
`;

const MobileTrBody = styled.tr`
  display: flex;
`;

//DESKTOP STYLING

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
  margin-left: 750px;
`;

export default PastTrainings;
