import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
import SignIn from "./signIn";

const Header = () => {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  const [dropDown, setDropDown] = useState(false);

  return isDesktop ? (
    <>
      <Wrapper>
        <Div>
          <H1>
            {/* ADD RENDER FOR WHEN SIGNED IN TO REDIRECT AND LOG OUT */}
            <StyledLink2 to={"/workout"}>
              <LogoImg src="icons/judo.jpg" />
            </StyledLink2>
            <StyledLink to={"/workout"}>Hibagon Trainings</StyledLink>
          </H1>
          <H2>
            <StyledLink2 to={"/Exercises"}>
              <TrainingImg src="icons/exercise.jpg" />
            </StyledLink2>
            <StyledLink to={"/Exercises"}>Exercises</StyledLink>
            <StyledLink3 to={"/Trainings"}>
              <PastTrainingsImg src="icons/arm.jpg" />
            </StyledLink3>
            <StyledLink to={"/Trainings"}>Past Trainings</StyledLink>
          </H2>
        </Div>
      </Wrapper>
    </>
  ) : (
    <>
      <MobileWrapper>
        <H1Wrapper>
          <MobileStyledLink to={"/"}>
            <MobileLogoImg src="icons/judo.jpg" />
          </MobileStyledLink>
          <MobileH1>
            <MobileStyledLink to={"/"}>Hibagon Trainings</MobileStyledLink>
          </MobileH1>
        </H1Wrapper>
        <ButtonDiv>
          <Dropdown
            onClick={() => {
              setDropDown(!dropDown);
            }}
          ></Dropdown>
        </ButtonDiv>
        <MobileDiv dropDown={dropDown}>
          <MobileH2>
            <MobileStyledLink2 to={"/Exercises"}>
              <MobileTrainingImg src="icons/exercise.jpg" />
            </MobileStyledLink2>
            <MobileStyledLink2 to={"/Exercises"}>Exercises</MobileStyledLink2>
            <MobileStyledLink3 to={"/Trainings"}>
              <MobilePastTrainingsImg src="icons/arm.jpg" />
            </MobileStyledLink3>
            <MobileStyledLink3 to={"/Trainings"}>
              Past Trainings
            </MobileStyledLink3>
          </MobileH2>
        </MobileDiv>
      </MobileWrapper>
    </>
  );
};

//MOBILE STYLING

const H1Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileWrapper = styled.div`
  background-color: black;
  display: flex;
  margin-bottom: 40px;
`;

const Dropdown = styled.button`
  background-image: url("/icons/dropdown.png");
  background-size: cover;
  text-decoration: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-top: 35px;
  margin-right: 20px;
  z-index: 11;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MobileDiv = styled.div`
  width: ${(props) => (props.dropDown ? "0%" : "100%")};
  transition-duration: 1s;
  position: absolute;
  background-color: black;
  z-index: 9;
  overflow-x: hidden;
  right: 0;
`;

const MobileH1 = styled.h1`
  width: 200px;
`;

const MobileH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  /* margin-right: 70px; */
  width: 320px;
`;

const MobileStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;

  &:focus {
    color: #ffca33;
  }
`;

const MobileStyledLink2 = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 5px;
  margin-left: 10px;

  &:focus {
    color: #ffca33;
  }
`;

const MobileStyledLink3 = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 5px;
  margin-left: 10px;

  &:focus {
    color: #ffca33;
  }
`;

const MobileLogoImg = styled.img`
  height: 35px;
  width: 35px;
  margin: 30px;
`;

const MobileTrainingImg = styled.img`
  height: 35px;
  width: 35px;
`;

const MobilePastTrainingsImg = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 10px;
`;

//DESKTOP STYLING

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
