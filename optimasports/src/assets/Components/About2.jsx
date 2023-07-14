import React, { useEffect, useState } from "react";
import styled from "styled-components";
import png1 from "../Images/player-removebg-preview.png";
import png2 from "../Images/cricket-2-removebg-preview.png";

import "../css/about.css";
import "animate.css";

const Section = styled.section`
  --animate-duration: 2000ms;
  --animate-delay: 1s;
  position: relative;
  min-height: 100vh;
  color: ${(props) => props.theme.txt};

  p {
    font-size: 1.2rem;
    font-weight: 200;
    text-align: left;
  }
`;

const About2 = () => {
  return (
    <Section>
      <div className="container">
        <hr />
      </div>
      <div className="container-fluid">
        <div className="container text-center">
          <h1>WHO WE ARE</h1>
          <br />
          <p
            className="text-center"
            style={{
              textTransform: "uppercase",
              fontWeight: "500",
              fontSize: "2em",
            }}
          >
            Welcome to Optima Sports, your ultimate destination for athletic
            excellence and performance enhancement!
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li>
                    <p>
                      At Optima Sports, we believe that sports are not just
                      about competition; they are a way of life. Whether you're
                      an aspiring athlete looking to improve your skills, a
                      professional seeking to elevate your performance, or a
                      sports enthusiast aiming to stay fit and active, we have
                      everything you need to achieve your goals and surpass your
                      limits.
                    </p>
                  </li>
                  <li>
                    <p>
                      Our mission is to empower individuals and teams to unleash
                      their full potential by providing top-quality sports
                      equipment, cutting-edge training techniques, and expert
                      guidance. We understand that every athlete is unique, and
                      that's why we offer a wide range of products and services
                      tailored to your specific needs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Equipment is the foundation of any successful sports
                      journey, and we take great pride in offering the finest
                      selection available. From state-of-the-art footwear
                      engineered for maximum comfort and performance to premium
                      apparel designed to optimize your movements, our extensive
                      collection ensures you'll always have the edge on the
                      field, court, or track.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img
                  src={png1}
                  className="img-fluid animate__animated animate__animate__slideInRight"
                  alt="badminton"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="container text-center">
            <h1>WHY OPTIMA SPORTS</h1>
            <p style={{ textAlign: "center" }}>
              Our aspiration is to be a top-tier manufacturer of sporting goods,
              renowned for our reliability and excellence as a supplier. We
              strive to assist our customers and businesses in reaching their
              objectives by delivering superior sports products. Our unwavering
              dedication to providing exceptional services sets us apart. Our
              primary objective is to establish ourselves as the leading global
              authority in the field of sporting goods manufacturing, offering
              an extensive range of products with unparalleled quality all under
              a single roof. We take great pride in the fact that the majority
              of our clients and customers have rated our services as
              exceptional and commendable in terms of overall quality.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About2;
