// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Swipe from "../Components/Swipe";
import Word from "../Components/Word";
import Swipe2 from "../Components/Swipe2";
import Chooseus from "../Components/Chooseus";
import Footer from "../Components/Footer";
import Customer from "../Components/Customer";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Homepage = () => {
  return (
    <Section>
      <Nav />
      <Swipe />
      <Word />
      <Swipe2 />
      <Chooseus />
      <Customer />

      <Footer />
    </Section>
  );
};

export default Homepage;
