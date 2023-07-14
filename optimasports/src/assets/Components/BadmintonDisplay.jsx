import React, { useState } from "react";
import styled from "styled-components";
import Itemdisplay from "./Itemdisplay";
import badminton1 from "../Images/badminton/328A9038.jpg";
import badminton2 from "../Images/badminton/gladiator2.jpg";
import badminton3 from "../Images/badminton/heavy racket.jpg";
import badminton4 from "../Images/badminton/oliac.jpg";
import badminton5 from "../Images/badminton/oliac2.jpg";
import badminton6 from "../Images/badminton/strom.jpg";

import "../css/badminton.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  .button {
    padding: 10px 40px 10px;
    color: white;
    background-color: black;
  }
  .button:hover {
    padding: 10px 40px 10px;
    color: black;
    background-color: white;
  }
`;
const BadmintonDisplay = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const items = [
    { title: "Badminton", image: badminton1 },
    { title: "Badminton ", image: badminton2 },
    { title: "Badminton", image: badminton3 },
    { title: "Badminton", image: badminton4 },
    { title: "Badminton", image: badminton5 },
    { title: "Badminton", image: badminton6 },
  ];
  const displayedItems = showMore ? items : items.slice(0, 3);

  return (
    <Section className="badminton">
      <div className="container text-center">
        <h3>
          Unleash your competitive spirit and soar to new heights with the
          fast-paced excitement of badminton - join our vibrant community and
          elevate your game today!
        </h3>
      </div>
      <div className="container-fluid">
        <div className="row g-2">
          {displayedItems.map((item, index) => (
            <div className="col-sm-4" key={index}>
              <Itemdisplay title={item.title} image={item.image} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={toggleShowMore} className="button">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default BadmintonDisplay;
