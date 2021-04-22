import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  requestUsersInfo,
  receiveUsersInfo,
  receiveUsersInfoError,
} from "./actions";

const SignIn = ({ loggedIn, setLoggedIn, signUp, setSignUp }) => {
  const dispatch = useDispatch();

  //SIGN IN FUNCTION
  //   const handleSignIn = () => {

  useEffect(() => {
    dispatch(requestUsersInfo());
    fetch("/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loggedIn),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveUsersInfo());
        //console.log(data);
        setLoggedIn(data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveUsersInfoError());
      });
  }, [loggedIn]);
  //   };

  //SIGN UP FUNTION
  //   const handleSignUp = () => {
  useEffect(() => {
    dispatch(requestUsersInfo());
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUp),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveUsersInfo());
        setSignUp(data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveUsersInfoError());
      });
  }, [signUp]);
  //   };

  //MIGHT NEED THE FETCH FOR THE GET -------> getUsers <-------

  return (
    <>
      {/* SIGN IN PART */}
      <Container>
        <EmailInput
          type="text"
          value={loggedIn.email}
          name="logIn"
          placeholder="Email"
          onChange={(event) =>
            setLoggedIn({ ...loggedIn, email: event.target.value })
          }
        />
        <PasswordInput
          type="text"
          value={loggedIn.password}
          name="logIn"
          placeholder="Password"
          onChange={(event) =>
            setLoggedIn({ ...loggedIn, password: event.target.value })
          }
        />
        <Button onClick={loggedIn}>Sign in</Button>
      </Container>
    </>
  );
};

const Container = styled.div``;

const EmailInput = styled.input``;

const PasswordInput = styled.input``;

const Button = styled.button``;

export default SignIn;
