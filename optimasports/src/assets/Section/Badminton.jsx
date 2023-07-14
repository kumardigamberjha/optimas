import React from "react";
import BadmintonDisplay from "../Components/BadmintonDisplay";
import Footer from "../Components/Footer";
import ProductNav from "../Components/ProductNav";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  .container {
    margin-top: 4em;
  }
  .card {
    cursor: pointer;
    background: transparent;
    -webkit-backdrop-filter: blur(8px); /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
    background-color: rgb(228 228 228 / 15%);
    color: ${(props) => props.theme.txt};
  }
  .card:hover {
    box-shadow: inset 0 0 0 200px rgb(255 255 255 / 8%);
  }
`;

const Badminton = () => {
  return (
    <Section>
      <ProductNav />

      <BadmintonDisplay />
      <Footer />
    </Section>
  );
};

export default Badminton;
