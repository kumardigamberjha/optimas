import React from "react";
import styled from "styled-components";

import ProductNav from "../Components/ProductNav";

import Footer from "../Components/Footer";
import Productdisplay from "../Components/Productdisplay";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
`;

const Prodcuts = () => {
  return (
    <Section>
      <ProductNav />
      <Productdisplay />
      <Footer />
    </Section>
  );
};

export default Prodcuts;
