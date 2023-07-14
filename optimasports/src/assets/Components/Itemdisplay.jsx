import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section`
  position: relative;
`;

const Itemdisplay = ({ title, image, cardtext }) => {
  return (
    <Section>
      <div className="container">
        <div
          className="card animate__animated animate__fadeInLeftBig mx-auto"
          style={{ width: "18em" }}
        >
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{cardtext}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

Itemdisplay.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cardtext: PropTypes.string.isRequired,
};

export default Itemdisplay;
