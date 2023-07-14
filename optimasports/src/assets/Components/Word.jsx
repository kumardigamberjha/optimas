import React from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
  height: 20vh;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;

  .container-fluid {
    background-color: #fff;
    background-image: radial-gradient(circle, #1225 10%, transparent 10%),
      radial-gradient(circle, #1225 10%, transparent 10%);
    background-size: 30px 30px;
    background-position: 0 0, 100px 100px;
    height: 30vh;
  }
`;

const Word = () => {
  return (
    <Section>
      <div className="container-fluid" style={{ position: "relative" }}>
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Fuel your passion for sports with our comprehensive coverage of your
          favorite teams and athletes, all in one place.
        </p>
      </div>
    </Section>
  );
};

export default Word;
