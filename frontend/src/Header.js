import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import Exercises from "./Exercises";

const Header = () => {
    return (
        <>
        <Wrapper>
            <Div>
            <H1>
                <StyledLink to={"/"}>Hibagon Trainings</StyledLink>
            </H1>
            <H2>
                <StyledLink to={"/Exercises"}>Exercises Page</StyledLink>
            </H2>
            </Div>
        </Wrapper>
        </>
    )
}

const StyledLink = styled(Link)``;

const H1 = styled.h1``;

const H2 = styled.h2``;

const Div = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 40px;
padding: 40px 40px;
background-color: black;
`;

const Wrapper = styled.div``;

export default Header;