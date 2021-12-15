import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum
          labore harum voluptatibus totam ipsa unde saepe praesentium magnam
          quod veniam in, error qui odit, consectetur impedit. Maxime, inventore
          vero!
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled(CTALogoOne)`
  padding: 0 10px;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
