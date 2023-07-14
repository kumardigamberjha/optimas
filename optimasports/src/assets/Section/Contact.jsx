import React from "react";
import styled from "styled-components";
import image from "../Images/badminton/328A9038.jpg";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .container {
    margin-top: 3.5em;
  }
  .button {
    background: black;
    color: white;
    padding: 5px 40px 5px;
  }
`;

const Contact = () => {
  return (
    <Section className="mx-auto">
      <Nav />
      <div
        className="container"
        // style={{ border: "1px solid lightgrey", padding: "1em 1em 1em" }}
      >
        <div className="row">
          <div className="col-sm-6 mt-5" style={{ position: "relative" }}>
            <img
              src={image}
              className="img-fluid"
              alt="image"
              style={{
                height: "80vh",
                position: "relaltive;",
                filter: "brightness(40%)",
              }}
            />
            <h4
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              Shop No. 3, Gali New Vijay Nagar, Near Jandian Wala Peer
              Jalandhar- 144001
            </h4>
            <h4
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              +91 9041352994, +91 9988447723
            </h4>
            <h4
              style={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              info@Optimasports.in
            </h4>
          </div>
          <div className="col-sm-6">
            <div className="container text-center">
              <h3>SEND US A MESSAGE</h3>
            </div>
            <div
              className="row mt-3"
              style={{
                border: "1px solid lightgray",
                padding: "1em 1em 1em",
              }}
            >
              <h6>Tell Us Your Name</h6>
              <hr />
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div
              className="row mt-3"
              style={{ border: "1px solid lightgray", padding: "1em 1em 1em" }}
            >
              <h6>Enter Your Email</h6>
              <hr />
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="arch@gmail.com"
                  aria-label="Email"
                />
              </div>
            </div>
            <div
              className="row mt-3"
              style={{ border: "1px solid lightgray", padding: "1em 1em 1em" }}
            >
              <h6>Enter Your Number</h6>
              <hr />
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: +91-1098765432"
                  aria-label=""
                />
              </div>
            </div>
            <div
              className="row mt-3"
              style={{ border: "1px solid lightgray", padding: "1em 1em 1em" }}
            >
              <h6>Message</h6>
              <hr />
              <div className="col">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4 text-center mx-auto mt-3">
                <button className="button">Submit</button>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid white" }} />
      <Footer />
    </Section>
  );
};

export default Contact;
