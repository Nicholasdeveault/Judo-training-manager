import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import HeadShake from "react-reveal/HeadShake";

const SignUp = ({ userInfo, setUserInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [error, setError] = useState(false);

  //SIGN UP FUNTION
  const handleSignUp = (ev) => {
    ev.preventDefault();

    if (email.includes("@") === false) {
      setErrMessage("Please enter a valid email");
      setError(true);
    } else if (password !== confirmPassword) {
      setErrMessage("Passwords don't match");
      setError(true);
    } else {
      fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 201) {
            setUserInfo(data.user);
          } else {
            setErrMessage("You already have an account");
            setError(true);
          }
        });
    }
  };

  return (
    <Container>
      <Span>柔軟性への道</Span>
      <Span>La voie de la souplesse</Span>
      <Jump>
        <InputWrapper>
          <P>Create an account</P>
          <EmailDiv>
            <EmailInput
              type="text"
              name="Sign up"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </EmailDiv>
          <NameDiv>
            <NameInput
              type="text"
              name="Sign up"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </NameDiv>
          <PasswordDiv>
            <PasswordInput
              type="password"
              name="Sign up"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </PasswordDiv>
          <ConfirmPasswordDiv>
            <PasswordInput
              type="password"
              name="Sign up"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </ConfirmPasswordDiv>
          <ButtonDiv>
            <Button onClick={handleSignUp}>Sign up</Button>
          </ButtonDiv>
          {error ? (
            <HeadShake>
              <ErrP>{errMessage}</ErrP>
            </HeadShake>
          ) : (
            <ErrP>{errMessage}</ErrP>
          )}

          <AccountDiv>
            Already have an account? <StyledLink to={"/"}>Sign In</StyledLink>
          </AccountDiv>
        </InputWrapper>
      </Jump>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  background-color: rgba(255, 202, 51);
  box-shadow: 10px 10px 5px #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
  border-radius: 5px;
  padding: 50px;

  @media (max-width: 900px) {
    background-color: rgba(255, 202, 51);
    box-shadow: 10px 10px 5px #d6d6d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    height: 500px;
    border-radius: 5px;
    padding: 50px;
  }
`;

const EmailInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
`;

const EmailDiv = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const NameInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
`;

const NameDiv = styled.div`
  margin-bottom: 30px;
`;

const PasswordInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
`;

const PasswordDiv = styled.div`
  margin-bottom: 30px;
`;

const ConfirmPasswordDiv = styled.div`
  margin-bottom: 25px;
`;

const Button = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #d6d6d6;
    transition: 300ms;
  }
`;

const ButtonDiv = styled.div``;

const P = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 30px;
  position: relative;
  bottom: 120px;
  @media (max-width: 900px) {
    font-weight: bold;
    font-size: 30px;
    position: relative;
    bottom: 80px;
  }
`;

const AccountDiv = styled.div`
  margin: 10px;
  font-weight: bold;
  @media (max-width: 900px) {
    margin: 15px 0;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-bottom: 2px solid black;
`;

const ErrP = styled.p`
  font-weight: bold;
  margin-top: 5px;
`;

export default SignUp;
