import React from "react";
import styled from "styled-components";
import ProductNav from "../Components/ProductNav";
import ShuttleItem from "../Components/ShuttleItem";
import Footer from "../Components/Footer";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
`;

const Shuttlecock = () => {
  return (
    <Section>
      <ProductNav />
      <ShuttleItem />
      <Footer />
    </Section>
  );
};

export default Shuttlecock;
