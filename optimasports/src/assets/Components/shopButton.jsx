import React from "react";
import styled from "styled-components";

const Section = styled.div`
  position: primary;

  .button {
    color: white;
    background-color: black;
  }
  .button:hover {
    color: black;
    background-color: white;
  }
`;

const shopButton = () => {
  return (
    <Section>
      <button className="button">View More</button>
    </Section>
  );
};

export default shopButton;
