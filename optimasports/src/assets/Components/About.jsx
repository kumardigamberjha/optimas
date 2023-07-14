import React from "react";
import styled from "styled-components";
import best from "../Images/BADMINTON-2.jpg";
import badminton from "../Images/BADMINTON.jpg";
import cricket from "../Images/CRICKET.jpg";
import fc from "../Images/football.jpg";
import football2 from "../Images/football-3.jpg";
import shoes from "../Images/shoes-2.jpg";
import badmintonn from "../Images/BADMINTON-4.jpg";
import "animate.css";

const Section = styled.section`
  --animate-duration: 3000ms;
  --animate-delay: 1s;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: black;
  p {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 2em;
    text-transform: uppercase;

    letter-spacing: 2px;
  }
`;

const About = () => {
  return (
    <Section>
      <div className="container mt-5 text-center">
        <p>
          Unleash Your Athletic Potential with Optima Sports: <br />
          Where Champions Are Made!
        </p>
      </div>
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-sm-4">
            <img
              src={badminton}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="badminton"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={cricket}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="cricket"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={fc}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="football championship"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={shoes}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="football"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={best}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="badminton"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={badmintonn}
              className="img-fluid animate__animated animate__fadeInUp"
              alt="football"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
