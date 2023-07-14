import React from "react";
import styled from "styled-components";

const Section = styled.div`
  background-color: #fff;
  background-image: radial-gradient(circle, #1225 10%, transparent 10%),
    radial-gradient(circle, #1225 10%, transparent 10%);
  background-size: 15px 15px;
  background-position: 0 0, 100px 100px;
  min-height: 5vh;
  margin-top: 8em;
`;

const Design = () => {
  return <Section></Section>;
};

export default Design;
