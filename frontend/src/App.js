import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Homepage";
import AllExercises from "./Exercises";
import ExercisesType from "./ExercisesType";

const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Router>
        <Switch>
        <Route exact path="/Homepage">
            <Homepage />
          </Route>
          <Route exact path="/Exercises/:type">
            <ExercisesType />
          </Route>
          <Route exact path="/Exercises">
              <AllExercises />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;