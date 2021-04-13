import React, { useEffect, useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  requestExercisesInfo,
  receiveExercisesInfo,
  receiveExercisesInfoError,
} from "./actions";
import { getExercisesDataArray } from "./reducers/exercisesReducer";


const Homepage = () => {
const dispatch = useDispatch();
const state = useSelector((state) => state);
const exercisesData = useSelector(getExercisesDataArray);
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

//useState to do a counter && Object.Values
// const [time, setTime] = useState({});

let exercise = [];

const handleTime = () => {
          {moment(exercise.timestamp).format("h:mm a • MMMM Do YYYY")};
        console.log("HI", moment(exercise.timestamp).format("h:mm a • MMMM Do YYYY"));
}

useEffect(() => {
    dispatch(requestExercisesInfo());

    fetch("/Homepage")
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
      <DatePicker
       placeholderText="Select Training Day"
       showTimeSelect
       dateFormat="MMMM d, yyyy h:mmaa"
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
      {newExerciseArray?.map((exercise) => {
          return <div>
            <H1>{exercise}</H1>
            <DivExercises>
            {exercisesData?.exercises?.map((Ex) => {
              if(Ex.type === exercise) {
              return <>
              <div><InputTime type="text"/></div> 
              <div><Input type="checkbox" onClick={Ex.name}/>{Ex.name}</div>
              </>
            }
            })}
            </DivExercises>
            </div>
})}

{/* Anonymous function */}
<Button onClick={handleTime}>Confirm today's training</Button>
    </Wrapper>
  ) : (
    <div>Loading...</div>
  )
}

const Wrapper = styled.div``;

const DivExercises = styled.div``;

const Button = styled.button``;

const H1 = styled.h1``;

const Input = styled.input``;

const InputTime = styled.input``;

export default Homepage;