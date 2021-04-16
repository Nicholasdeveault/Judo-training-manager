import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestExercisesInfo,
  receiveExercisesInfo,
  receiveExercisesInfoError,
} from "./actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AllExercises from "./Exercises";
import ExercisesType from "./ExercisesType";
import Header from "./Header";
import Footer from "./Footer";
import Workout from "./Workout";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestExercisesInfo());

    fetch("/Exercises")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveExercisesInfo(json));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveExercisesInfoError());
      });
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Workout />
          </Route>
          {/* <Route exact path="/Exercises/:type">
            <ExercisesType />
          </Route> */}
          <Route exact path="/Exercises">
            <AllExercises />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
