import React, { useState } from "react";
import styled from "styled-components";
import Itemdisplay from "./Itemdisplay";

import s1 from "../Images/shuttlecock/328A9124-removebg-preview.png";
import s2 from "../Images/shuttlecock/328A9132-removebg-preview.png";
import s3 from "../Images/shuttlecock/328A9139-removebg-preview.png";
import s4 from "../Images/shuttlecock/328A9140-removebg-preview.png";

import "../css/Shuttlecock.css";

const Section = styled.section`
  position: primary;
  min-height: 100vh;
  position: relative;
  min-height: 100vh;
  .button {
    padding: 10px 40px 10px;
    color: white;
    background-color: black;
  }
  .card {
    cursor: pointer;
    background: transparent;
    -webkit-backdrop-filter: blur(8px); /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
    background-color: rgb(228 228 228 / 15%);
    color: ${(props) => props.theme.txt};
  }
  .container {
    margin-top: 5em;
    color: #000;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }
`;

const ShuttleItem = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const items = [
    { title: "Shuttlecock", image: s1 },
    { title: "Shuttlecock", image: s2 },
    { title: "Shuttlecock", image: s3 },
    { title: "Shuttlecock", image: s4 },
  ];

  const displayedItems = showMore ? items : items.slice(0, 9);
  return (
    <Section className="shuttle">
      <div className="container text-center">
        <h1>Shuttlecock</h1>
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
          <button onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ShuttleItem;
