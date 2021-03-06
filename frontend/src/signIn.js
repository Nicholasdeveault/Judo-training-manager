import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import HeadShake from "react-reveal/HeadShake";

const SignIn = ({ userInfo, setUserInfo }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [error, setError] = useState(false);

  //SIGN IN FUNCTION
  const handleSignIn = (ev) => {
    ev.preventDefault();

    if (email.includes("@") === false) {
      setErrMessage("Invalid email or password");
      setError(true);
    }

    fetch("/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          setUserInfo(data.user);
          localStorage.setItem("_id", data.user._id);
          history.push("/");
        } else {
          setErrMessage("Invalid email or password");
          setError(true);
        }
      });
  };

  return (
    <>
      {/* SIGN IN PART */}
      <Container>
        <Span>柔軟性への道</Span>
        <Span>La voie de la souplesse</Span>
        <Jump>
          <InputWrapper>
            <P>Welcome</P>
            <EmailDiv>
              <EmailInput
                type="text"
                name="logIn"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </EmailDiv>
            <PasswordDiv>
              <PasswordInput
                type="password"
                name="logIn"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </PasswordDiv>
            <ButtonDiv>
              <Button onClick={handleSignIn}>Sign in</Button>
            </ButtonDiv>
            {error ? (
              <HeadShake>
                <ErrP>{errMessage}</ErrP>
              </HeadShake>
            ) : (
              <ErrP>{errMessage}</ErrP>
            )}
            <AccountDiv>
              Don't have an account?{" "}
              <StyledLink to={"/signup"}>Sign Up</StyledLink>
            </AccountDiv>
          </InputWrapper>{" "}
        </Jump>
      </Container>
    </>
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
  height: 400px;
  border-radius: 5px;
  padding: 50px;

  @media (max-width: 900px) {
    background-color: rgba(255, 202, 51);
    box-shadow: 10px 10px 5px #d6d6d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    height: 400px;
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
  margin-bottom: 40px;
  margin-top: 40px;
`;

const PasswordInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
`;

const PasswordDiv = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  margin-top: 30px;
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
  bottom: 220px;
  @media (max-width: 900px) {
    font-weight: bold;
    font-size: 30px;
    position: relative;
    bottom: 100px;
  }
`;

const AccountDiv = styled.div`
  margin: 15px;
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

export default SignIn;
