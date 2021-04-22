import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import GlobalStyles from "./GlobalStyles";
import AllExercises from "./Exercises";
import Header from "./Header";
import Footer from "./Footer";
import Workout from "./Workout";
import PastTrainings from "./pastTrainings";
import SignIn from "./signIn";

const App = () => {
  //state for added exercises
  const [loggedIn, setLoggedIn] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState({ email: "", name: "", password: "" });
  const [refresh, setRefresh] = useState();
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
  }, [setRefresh]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <SignIn
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                signUp={signUp}
                setSignUp={setSignUp}
              />
            )}
          </Route>
          <Route exact path="/workout">
            <Workout />
          </Route>
          <Route exact path="/Trainings">
            <PastTrainings />
          </Route>
          <Route exact path="/Exercises">
            <AllExercises refresh={refresh} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
