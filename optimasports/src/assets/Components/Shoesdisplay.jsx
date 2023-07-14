import React, { useState } from "react";
import styled from "styled-components";
import Itemdisplay from "./Itemdisplay";
import basketball from "../Images/BADMINTON-2.jpg";
import "../css/shoe.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  .button {
    padding: 10px 40px 10px;
    color: white;
    background-color: black;
  }
`;

const Shoesdisplay = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const items = [
    { title: "Shoes", image: basketball },
    { title: "Card 2 title", image: basketball },
    { title: "Card 3 title", image: basketball },
    { title: "Card 4 title", image: basketball },
    { title: "Card 5 title", image: basketball },
    { title: "Card 6 title", image: basketball },
    { title: "Card 7 title", image: basketball },
    { title: "Card 8 title", image: basketball },
    { title: "Card 9 title", image: basketball },
    { title: "Card 10 title", image: basketball },
    { title: "Card 11 title", image: basketball },
    { title: "Card 12 title", image: basketball },
    { title: "Card 13 title", image: basketball },
    { title: "Card 14 title", image: basketball },
    { title: "Card 15 title", image: basketball },
  ];

  const displayedItems = showMore ? items : items.slice(0, 9);

  return (
    <Section>
      <div className="shoe">
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
      </div>
    </Section>
  );
};

export default Shoesdisplay;
