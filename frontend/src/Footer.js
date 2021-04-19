import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import instagram from "./icons/instagram.jpg";
import facebook from "./icons/facebook.jpg";
import twitter from "./icons/twitter.jpg";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <Div1>
          <P>© 2021. Hibagon Judo Trainings. All Rights Reserved.</P>
          <Link>
            <Icon src={instagram} />
            <Icon src={facebook} />
            <Icon src={twitter} />
          </Link>
        </Div1>
        <Div2>
          <StyledLink>info@cjhibagon.com</StyledLink>
          <P>419 Rue Saint-Roch</P>
          <P>Montreal, Quebec, H3N 1K2</P>
          <P>438-777-7112</P>
          <StyledLink to="/contact-us">View location</StyledLink>
        </Div2>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 30px;
`;
const Div1 = styled.div`
  margin-right: 610px;
`;
const Div2 = styled.div`
  text-align: right;
  margin-right: 230px;
`;
const P = styled.p`
  color: white;
`;

const Icon = styled.img`
  width: 25px;
  margin: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default Footer;
