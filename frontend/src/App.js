import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import AllExercises from "./Exercises";
import ExercisesType from "./ExercisesType";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/Exercises/:type">
            <ExercisesType />
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