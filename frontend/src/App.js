import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  const [obtainId, setObtainId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestExercisesInfo());

    fetch("/Exercises")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveExercisesInfo(json));
      })
      .catch((err) => {
        dispatch(receiveExercisesInfoError());
      });
  }, [setRefresh]);

  useEffect(() => {
    const id = localStorage.getItem("_id");
    setObtainId(id ? id : "NA");
  }, []);

  useEffect(() => {
    console.log(obtainId);
    if (obtainId && obtainId !== "NA") {
      fetch(`/users/login/${obtainId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserInfo(data.user);
        });
    }
  }, [obtainId]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setObtainId={setObtainId}
        />
        <Switch>
          <Route exact path="/">
            {userInfo ? (
              <Redirect to="/workout" />
            ) : obtainId === "NA" ? (
              <SignIn userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <Loading>読み込んでいます...</Loading>
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
            {userInfo ? <Workout /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/Trainings">
            {userInfo ? <PastTrainings /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/Exercises">
            {userInfo ? (
              <AllExercises refresh={refresh} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

const Loading = styled.div`
  width: 220px;
  height: 200px;
  margin-left: 1200px;
`;

export default App;
