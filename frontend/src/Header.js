import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Exercises from "./Exercises";
import exercise from "./icons/exercise.jpg";
import judo from "./icons/judo.jpg";
import arm from "./icons/arm.jpg";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <H1>
            <StyledLink2 to={"/"}>
              <LogoImg src={judo} />
            </StyledLink2>
            <StyledLink to={"/"}>Hibagon Trainings</StyledLink>
          </H1>
          <H2>
            <StyledLink2 to={"/Exercises"}>
              <TrainingImg src={exercise} />
            </StyledLink2>
            <StyledLink to={"/Exercises"}>Exercises</StyledLink>
            <StyledLink3 to={"/Trainings"}>
              <PastTrainingsImg src={arm} />
            </StyledLink3>
            <StyledLink to={"/Trainings"}>Past Trainings</StyledLink>
          </H2>
        </Div>
      </Wrapper>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;

  &:hover {
    color: gray;
    border-bottom: 2px solid gray;
    transition: 500ms;
  }
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
`;

const StyledLink3 = styled(Link)`
  text-decoration: none;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 40px 40px;
  background-color: black;
`;

const Wrapper = styled.div``;

const LogoImg = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 20px;
`;

const TrainingImg = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 20px;
`;

const PastTrainingsImg = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 20px;
  margin-left: 30px;
`;

export default Header;
