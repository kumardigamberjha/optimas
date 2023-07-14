import React from "react";
import Nav from "../Components/Nav";
import About from "../Components/About";
import styled from "styled-components";
import About2 from "../Components/About2";
import Customer from "../Components/Customer";
import Footer from "../Components/Footer";
import "../css/about.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Aboutus = () => {
  return (
    <Section className="bg-light">
      <Nav />
      <About />
      <About2 />
      <Footer />
    </Section>
  );
};

export default Aboutus;
