import React from "react";
import styled from "styled-components";
import { ImLocation, ImPhone, ImMail } from "react-icons/im";

const Section = styled.div`
  position: relative;
  color: white;
  background-color: black;
  padding-bottom: 0.1em;
  padding-top: 1em;
`;
const Maps = styled.div`
   {
    overflow: hidden;

    padding-bottom: 56.25%;

    position: relative;

    height: 0;
  }
  iframe {
    left: 0;

    top: 0;

    height: 100%;

    width: 100%;

    position: absolute;
  }
`;
const Footer = () => {
  return (
    <Section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <h3>About Optima Sports</h3>
            <br />
            <p>
              At Optima Sports, we believe that sports are not just about
              competition; they are a way of life. At Optima Sports, we are not
              just a supplier; we are your partners in success. We are dedicated
              to fostering a community of athletes who inspire and motivate each
              other to greatness.
            </p>
          </div>
          <div className="col-sm-3">
            <h3>Useful Links</h3>
            <br />
            <ul style={{ listStyle: "none", textTransform: "uppercase" }}>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mt-2">
                <a href="/aboutus">About Us</a>
              </li>
              <li className="mt-2">
                <a href="/products">Our Products</a>
              </li>
              <li className="mt-2">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3>Contact Us</h3>
            <br />
            <p>
              <ImLocation className="mx-2" />
              Shop No. 3, Gali New Vijay Nagar, Near Jandian Wala Peer
              Jalandhar- 144001
            </p>
            <p>
              <ImPhone className="mx-2" />
              +91 9041352994, +91 9988447723
            </p>
            <p>
              <ImMail className="mx-2" />
              info@Optimasports.in
            </p>
          </div>
          <div className="col-sm-3 text-center">
            <h3>Find Us Here</h3>
            <Maps>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.0429054232033!2d75.5615598821235!3d31.326633100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5aed7f6b05bd%3A0x6a30318e557c8158!2sOptima%20Sports!5e0!3m2!1sen!2sin!4v1685788055236!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Maps>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid text-center">
        <p>OPTIMA SPORTS</p>
      </div>
    </Section>
  );
};

export default Footer;
