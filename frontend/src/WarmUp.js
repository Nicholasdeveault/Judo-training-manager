import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  requestExercisesTypeInfo,
  receiveExercisesTypeInfo,
  receiveExercisesTypeInfoError,
} from "./actions";
import { getExercisesTypeData } from "./reducers/typeReducer";

const WarmUp = () => {
const dispatch = useDispatch();
const state = useSelector((state) => state);
const typeData = useSelector(getExercisesTypeData);

useEffect(() => {
    dispatch(requestExercisesTypeInfo());

    fetch("")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveExercisesTypeInfo(json));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveExercisesTypeInfoError());
      });
  }, [dispatch]);

return (
    <>
        
    </>
)

}

export default WarmUp;