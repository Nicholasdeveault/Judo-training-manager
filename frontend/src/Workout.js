import React, { useEffect, useState, useReducer } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeMainItem } from "./actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from "./useMediaQuery";

const Workout = () => {
  // let ifPageSize = useMediaQuery("(min-width: 900px)"); <-- Too make it mobile responsive

  const dispatch = useDispatch();

  const exerciseSelection = useSelector((state) => {
    console.log(state);
    return state.selectedWorkout.warmUp;
  });
  const mainExerciseSelection = useSelector((state) => {
    return state.selectedWorkout.sequence;
  });
  const printNote = useSelector((state) => {
    return state.notesReducer.note;
  });
  const classesSelection = useSelector((state) => {
    return state.agesReducer.class;
  });

  const completeTraining = useSelector((state) => {
    return state.selectedWorkout;
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [warmUp, setWarmup] = useState("none");
  const [name, setName] = useState("none");
  const [name2, setName2] = useState("none");
  const [sequence, setSequence] = useState("none");
  const [warmupTime, setWarmupTime] = useState();
  const [time, setTime] = useState();
  const [warmupBeltColor, setWarmupBeltColor] = useState();
  const [mainBeltColor, setMainBeltColor] = useState();
  const [groupAge, setGroupeAge] = useState();

  //This is going to be for the total duration of the training (Counter)

  const exercises = useSelector((state) => state.exercises);

  let types = exercises?.exercises?.map((exercise) => {
    return exercise.type;
  });

  let filteredTypes = types?.filter((item, index) => {
    return types?.indexOf(item) === index;
  });

  let names = exercises?.exercises?.map((exercise) => {
    return exercise.name;
  });

  const cardioExercises = exercises?.exercises?.filter((exercise) => {
    return exercise.type === "Cardio";
  });

  return exercises.status === "idle" ? (
    <>
      <BigForm>
        {/* In the big form create a groupAgeReducer */}
        <Container>
          {/* Form for WarmUp portion */}
          <FormWarmUp>
            <H1>Warm up: </H1>
            <Select
              name="WarmUp"
              value={warmUp}
              onChange={(event) => {
                setWarmup(event.target.value);
              }}
            >
              <Option value="none">Select a type</Option>
              {filteredTypes?.map((type) => {
                return <Option value={type}>{type}</Option>;
              })}
            </Select>
            <Select
              name="WarmUp"
              value={name}
              onChange={(event) => setName(event.target.value)}
            >
              {warmUp === "none" ? (
                <Option value="none">First select a workout type</Option>
              ) : (
                <Option value="none">Select an exercise</Option>
              )}
              {names?.map((name) => {
                return <Option value={name}>{name}</Option>;
              })}
            </Select>
            <Div>
              <Label for="Duration">Exercise duration: </Label>

              {/*for time --> useState/setState && value={} */}
              <Input
                type="text"
                value={warmupTime}
                name="Duration"
                rows="1"
                cols="2"
                onChange={(event) => setWarmupTime(event.target.value)}
              />
              <LabelBelts for="Duration">Belts: </LabelBelts>
              <Input
                type="text"
                value={warmupBeltColor}
                name="Duration"
                rows="1"
                cols="2"
                onChange={(event) => setWarmupBeltColor(event.target.value)}
              />
            </Div>
            <Button
              onClick={() => {
                const exerciseInfo = {
                  type: "add_warmup_ex",
                  payload: {
                    warmupType: warmUp,
                    warmupEx: name,
                    exTime: warmupTime,
                    beltColors: warmupBeltColor,
                  },
                };
                dispatch(exerciseInfo);
              }}
            >
              Add to today's training
            </Button>
          </FormWarmUp>

          {/* Form for sequences */}
          <FormMainTraining>
            <H1>Main Training: </H1>
            <Select
              name="Sequences"
              value={sequence}
              onChange={(event) => setSequence(event.target.value)}
            >
              <Option value="none">Select a sequence</Option>
              {filteredTypes?.map((type) => {
                return <Option value={type}>{type}</Option>;
              })}
            </Select>
            <Select
              name="Sequences"
              value={name2}
              onChange={(event) => setName2(event.target.value)}
            >
              {warmUp === "none" ? (
                <Option value="none">First select a sequence</Option>
              ) : (
                <Option value="none">Select an exercise</Option>
              )}
              {names?.map((name) => {
                return <Option value={name}>{name}</Option>;
              })}
            </Select>
            <Div>
              <Label for="Duration">Exercise duration: </Label>
              <Input
                type="text"
                value={time}
                name="Duration"
                rows="1"
                cols="2"
                onChange={(event) => setTime(event.target.value)}
              />
              <LabelBelts for="Duration">Belts: </LabelBelts>
              <Input
                type="text"
                value={mainBeltColor}
                name="Duration"
                rows="1"
                cols="2"
                onChange={(event) => setMainBeltColor(event.target.value)}
              />
            </Div>
            <Button
              onClick={() => {
                const exerciseInfo = {
                  type: "add_mainpart_ex",
                  payload: {
                    trainingType: sequence,
                    trainingEx: name2,
                    mainExTime: time,
                    mainBeltColors: mainBeltColor,
                  },
                };
                dispatch(exerciseInfo);
              }}
            >
              Add to today's training
            </Button>
          </FormMainTraining>
        </Container>
        <Display>
          {/* Exercises Info render */}
          <TitleDiv>
            <H2>Today's training</H2>
            {/* {classesSelection.map((age) => { */}
            <DateDiv>
              <DatePicker
                placeholderText="Select Training Day"
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mmaa"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
              />
            </DateDiv>
            <AgeDiv>
              <LabelAge for="Duration">Age group: </LabelAge>
              <InputAge
                type="text"
                value={groupAge}
                name="Classes"
                rows="1"
                cols="2"
                onChange={(event) => setGroupeAge(event.target.value)}
              />
            </AgeDiv>
          </TitleDiv>
          <TableWarmup>
            <TrHead>
              <ThHead>Type</ThHead>
              <ThHead>Name</ThHead>
              <ThHead>Time / Belts</ThHead>
            </TrHead>
            <TrBody>
              <Span>Warm up :</Span>
              {exerciseSelection.map((exercise) => {
                return (
                  <>
                    <DivTd>
                      <Xbutton
                        onClick={() => {
                          console.log(exercise);
                          const removeExercise = {
                            type: "REMOVE_ITEM",
                          };
                          dispatch(removeItem(exercise));
                        }}
                      >
                        X
                      </Xbutton>
                      <TdWarmup>
                        <Span>{exercise.warmupType}</Span>
                      </TdWarmup>
                      <TdWarmup>
                        <Span>{exercise.warmupEx}</Span>
                      </TdWarmup>
                      <TdWarmup>
                        <Span>{exercise.exTime}</Span>
                        <Span> {exercise.beltColors}</Span>
                      </TdWarmup>
                    </DivTd>
                  </>
                );
              })}
            </TrBody>
          </TableWarmup>
          {/* Render for the main exercises section */}
          <TableMainpart>
            <TrBody>
              <Span>Main part :</Span>
              {mainExerciseSelection.map((exercise) => {
                return (
                  <>
                    <DivTd>
                      <Xbutton1
                        onClick={() => {
                          console.log(exercise);
                          const removeExercise = {
                            type: "REMOVE_ITEM_MAIN",
                          };
                          dispatch(removeMainItem(exercise));
                        }}
                      >
                        X
                      </Xbutton1>

                      <TdMain>
                        <Span>{exercise.trainingType}</Span>
                      </TdMain>
                      <TdMain>
                        <Span>{exercise.trainingEx}</Span>
                      </TdMain>
                      <TdMain>
                        <Span>{exercise.mainExTime}</Span>
                        <Span> {exercise.mainBeltColors}</Span>
                      </TdMain>
                    </DivTd>
                  </>
                );
              })}
            </TrBody>
          </TableMainpart>
        </Display>

        <Form>
          <NoteDiv>
            <NoteInput
              name="note"
              value={newNote}
              placeholder=" Add a reminder"
              type="text"
              onChange={(event) => setNewNote(event.target.value)}
            />
            <NoteButton
              type="submit"
              onClick={() => {
                console.log(newNote);
                const noteInfo = {
                  type: "add_note",
                  payload: {
                    noteType: newNote,
                    noteTime: moment(newNote.timestamp).format(
                      "h:mm a • MMMM Do YYYY"
                    ),
                  },
                };
                dispatch(noteInfo);
              }}
            >
              Add reminder
            </NoteButton>
            {printNote.map((note) => {
              return (
                <>
                  <DivTdNote>
                    <TdNote>
                      <Span> - {note.noteType}</Span>
                    </TdNote>
                    <TdNoteTime>
                      <Span>{note.noteTime}</Span>
                    </TdNoteTime>
                  </DivTdNote>
                </>
              );
            })}
          </NoteDiv>
          <ConfirmationButton
            type="submit"
            onClick={() => {
              const newTraining = {
                completeTraining,
                noteType: newNote,
                noteTime: moment(newNote.timestamp).format(
                  "h:mm a • MMMM Do YYYY"
                ),
              };
              fetch("/Trainings", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newTraining),
              }).then((res) => res.json());
              // dispatch(newTraining);
            }}
          >
            Confirm today's training
          </ConfirmationButton>
        </Form>
      </BigForm>
    </>
  ) : (
    <LoadingImg src="https://www.animatedimages.org/data/media/1289/animated-judo-image-0016.gif" />
  );
};

// Training Section styling beginning

const Xbutton = styled.button`
  border: none;
  font-weight: bold;
`;

const Xbutton1 = styled.button`
  border: none;
  font-weight: bold;
  background-color: white;
`;

const TrHead = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ThHead = styled.th`
  font-size: 20px;
  width: 100%;
`;

const DivTd = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrBody = styled.tr`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TableWarmup = styled.table`
  display: flex;
  flex-direction: column;
`;

const TableMainpart = styled.table`
  display: flex;
  flex-direction: column;
`;

const TdWarmup = styled.td`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #ededed;
`;

const TdMain = styled.td`
  width: 100%;
  padding: 20px 0;
  text-align: center;
`;

// Training Section styling End

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 35px;
  /* background-color: #d6d6d6; //<-- Maybe new color palette */
  background-color: gray;
`;

const BigForm = styled.div`
  display: flex;
  flex-direction: row;
`;

const Display = styled.div`
  border: 2px solid gray;
  margin-left: 50px;
  width: 1200px;
  height: 980px;
  overflow-y: scroll;
`;

const DateDiv = styled.div`
  padding-top: 5px;
`;

// Training selection

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 1000px;
  margin-left: 60px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid gray;
`;

const LabelBelts = styled.label`
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid gray;
  margin-left: 50px;
`;

const Input = styled.input`
  margin-left: 15px;
  width: 40px;
`;

const AgeDiv = styled.div``;

const InputAge = styled.input`
  width: 100px;
  height: 30px;
  margin-left: 30px;
`;

const LabelAge = styled.label`
  color: white;
  border-bottom: 2px solid white;
  font-size: 20px;
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
`;

const Button = styled.button`
  height: 25px;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  font-weight: bold;

  &:hover {
    background-color: #ffca33;
    transition: 300ms;
  }
`;

const FormWarmUp = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  padding-bottom: 100px;
  border-bottom: 2px solid gray;
`;

const FormMainTraining = styled.div``;

const Option = styled.option``;

const Select = styled.select`
  width: 450px;
  margin-bottom: 30px;
  height: 30px;
  border: 2px solid gray;
  border-radius: 5px;

  &:hover {
    background-color: gray;
    color: white;
    transition: 300ms;
  }
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
`;

//End of Training selection

const H2 = styled.h2`
  margin-right: 60px;
  border-bottom: 2px solid white;
  font-size: 25px;
  color: white;
`;

const Span = styled.span`
  font-weight: bold;
`;

const ConfirmationButton = styled.button`
  position: relative;
  top: 900px;
  right: 340px;
  height: 35px;
  width: 180px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #ffca33;
    transition: 300ms;
  }
`;

//Note Styling

const Form = styled.div`
  height: 110px;
  display: flex;
  justify-content: column;
`;

const NoteInput = styled.input`
  margin-left: 80px;
  margin-right: 20px;
  margin-top: 40px;
  height: 30px;
  width: 200px;
  border: 2px solid gray;
  border-radius: 5px;

  &:hover {
    border: 2px solid black;
  }
`;

const NoteButton = styled.button`
  width: 110px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: white;

  &:hover {
    background-color: #ffca33;
    transition: 300ms;
  }
`;

const NoteDiv = styled.div`
  height: 850px;
  width: 500px;
  background-color: #ededed;
  overflow-y: scroll;
`;

const TdNote = styled.td`
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 5px;
`;

const TdNoteTime = styled.td`
  margin-left: 30px;
  margin-bottom: 10px;
`;

const DivTdNote = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid white;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

const LoadingImg = styled.img`
  width: 220px;
  height: 200px;
  margin-left: 950px;
`;

export default Workout;
