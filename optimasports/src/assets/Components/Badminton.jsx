import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
`;
const Badminton = () => {
  return (
    <Section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="card" style="width: 18rem;">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Badminton;
