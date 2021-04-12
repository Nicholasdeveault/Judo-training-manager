import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  requestExercisesInfo,
  receiveExercisesInfo,
  receiveExercisesInfoError,
} from "./actions";
import { getExercisesDataArray } from "./reducers/exercisesReducer";

const Homepage = () => {
//   const { type } = useParams();
const dispatch = useDispatch();
const state = useSelector((state) => state);
const exercisesData = useSelector(getExercisesDataArray);
const [startDate, setStartDate] = useState(
  setHours(setMinutes(new Date(), 30), 16)
);

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
// // console.log(exercisesData);
  return exercisesData ? (
    <Wrapper>
      {exercisesData?.exercises?.map((exercise) => {
        return <p>{exercise.name}</p>
})}.filter(exercise.type)
<DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17)
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    </Wrapper>
  ) : (
    <div>Loading...</div>
  )
}


const Wrapper = styled.div``;

export default Homepage;