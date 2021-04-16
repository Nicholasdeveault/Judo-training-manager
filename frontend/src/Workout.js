import React, { useEffect, useState, useReducer } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  requestExercisesTypeInfo,
  receiveExercisesTypeInfo,
  receiveExercisesTypeInfoError,
} from "./actions";
import { getExercisesTypeData } from "./reducers/selectedWorkoutReducer";

const Workout = () => {
  const dispatch = useDispatch();
  const exerciseSelection = useSelector((state) => state);
  //Removed "none" from the states.
  const [warmUp, setWarmup] = useState("none");
  const [name, setName] = useState("none");
  const [name2, setName2] = useState("none");
  const [sequence, setSequence] = useState("none");
  const [warmupTime, setWarmupTime] = useState(0);
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(time + 0);
  const [date, setDate] = useState("");

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

  // const handleSubmit = (event) => {
  //   return event.target.submit;
  // };
  // console.log(warmUp);
  return exercises.status === "idle" ? (
    <>
      {/* <BigForm> */}
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
            <Button
              onClick={() => {
                const exerciseInfo = {
                  type: "add_warmup_ex",
                  payload: {
                    warmupType: warmUp,
                    warmupEx: name,
                    exTime: warmupTime,
                  },
                };
                dispatch(exerciseInfo);
              }}
            >
              Add to today's training
            </Button>
          </Div>
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
            <Button
              onClick={() => {
                const exerciseInfo = {
                  type: "add_mainpart_ex",
                  payload: {
                    trainingType: sequence,
                    trainingEx: name,
                    exTime: time,
                  },
                };
                dispatch(exerciseInfo);
              }}
            >
              Add to today's training
            </Button>
          </Div>
        </FormMainTraining>
      </Container>
      {/* </BigForm> */}
    </>
  ) : (
    <div>Loading...</div>
  );
};

{
  /* const BigForm = styled.div`
  border: 2px solid red;
`; */
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 1000px;
  margin-left: 60px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid gray;
`;

const Input = styled.input`
  margin-left: 15px;
  width: 45px;
`;

const Div = styled.div`
  display: flex;
`;

const Button = styled.button`
  height: 25px;
  color: black;
  background-color: white;
  border: 2px solid gray;
  border-radius: 5px;
  margin-left: 70px;

  &:hover {
    background-color: gray;
    color: white;
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
  width: 400px;
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

export default Workout;
