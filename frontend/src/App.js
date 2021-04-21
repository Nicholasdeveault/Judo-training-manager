import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  requestExercisesInfo,
  receiveExercisesInfo,
  receiveExercisesInfoError,
} from "./actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import AllExercises from "./Exercises";
import Header from "./Header";
import Footer from "./Footer";
import Workout from "./Workout";
import PastTrainings from "./pastTrainings";

const App = () => {
  const dispatch = useDispatch();

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
          <Route exact path="/Trainings">
            <PastTrainings />
          </Route>
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
