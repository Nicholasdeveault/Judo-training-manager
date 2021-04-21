import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "./useMediaQuery";

const Footer = () => {
  let isDesktop = useMediaQuery("(min-width: 900px)");

  return isDesktop ? (
    <>
      <FooterDiv>
        <Div1>
          <P>© 2021. Hibagon Judo Trainings. All Rights Reserved.</P>
          <Link>
            <Icon src="icons/instagram.jpg" />
            <Icon src="icons/facebook.jpg" />
            <Icon src="icons/twitter.jpg" />
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
  ) : (
    <>
      <MobileFooterDiv>
        <MobileDiv1>
          <MobileP>
            © 2021. Hibagon Judo Trainings. All Rights Reserved.
          </MobileP>
          <StyledIconLink>
            <MobileIcon src="icons/instagram.jpg" />
            <MobileIcon src="icons/facebook.jpg" />
            <MobileIcon src="icons/twitter.jpg" />
          </StyledIconLink>
        </MobileDiv1>
        <MobileDiv2>
          <StyledLinkMobile>info@cjhibagon.com</StyledLinkMobile>
          <MobileP>419 Rue Saint-Roch</MobileP>
          <MobileP>Montreal, Quebec, H3N 1K2</MobileP>
          <MobileP>438-777-7112</MobileP>
          <StyledLinkMobile to="/contact-us">View location</StyledLinkMobile>
        </MobileDiv2>
      </MobileFooterDiv>
    </>
  );
};

//MOBILE STYLING

const MobileFooterDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 30px;
`;

const MobileDiv1 = styled.div`
  margin-right: 100px;
`;

const MobileDiv2 = styled.div`
  text-align: right;
  /* margin-right: 50px; */
`;

const MobileP = styled.p`
  color: white;
`;

const MobileIcon = styled.img`
  width: 25px;
  margin: 10px;
`;

const StyledIconLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-left: -7px;
`;

const StyledLinkMobile = styled(Link)`
  text-decoration: none;
  color: white;
`;

//DESKTOP STYLING

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
