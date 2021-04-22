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
import SignUp from "./signUp";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [refresh, setRefresh] = useState();
  const dispatch = useDispatch();
  //Selector

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

  let obtainId = localStorage.getItem("_id");
  useEffect(() => {
    console.log("BEFORE SIGN IN", obtainId);
    fetch(`/users/login/${obtainId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setUserInfo(data.user);
      });
  }, [obtainId]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header userInfo={userInfo} setUserInfo={setUserInfo} />
        <Switch>
          <Route exact path="/">
            {userInfo ? (
              <Redirect to="/workout" />
            ) : (
              <SignIn userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
          </Route>
          <Route exact path="/signUp">
            {userInfo ? (
              <Redirect to="/" />
            ) : (
              <SignUp userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
          </Route>

          <Route exact path="/workout">
            {userInfo ? <Workout /> : <Redirect to="/signUp" />}
          </Route>
          <Route exact path="/Trainings">
            {userInfo ? <PastTrainings /> : <Redirect to="/signUp" />}
          </Route>
          <Route exact path="/Exercises">
            {userInfo ? (
              <AllExercises refresh={refresh} />
            ) : (
              <Redirect to="/signUp" />
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
