import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Design from "./Design";
import { motion } from "framer-motion";
import gq from "../Images/goldquality.png";
import time from "../Images/timely delivery.png";
import satis from "../Images/satisfaction.png";
import cs from "../Images/customerservice.png";

import "../css/box.css";
import ScrollImage from "./ScrollImage";

const Title = styled(motion.div)`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  color: ${(props) => props.theme.txt};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: row;
  }
  p {
    letter-spacing: 2px;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Chooseus = () => {
  return (
    <>
      <Design />
      <div className="container text-center mt-3">
        <Title variants={container} initial="hidden" animate="show">
          <div>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
              className="mx-1"
            >
              WHY
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
              className="mx-1"
            >
              CHOOSE
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
              className="mx-1"
            >
              US
            </motion.h1>
          </div>
        </Title>
      </div>
      <div className="box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="container-fluid text-center mt-2">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={gq} alt="goldquality" className="img-fluid" />
                    <h3>Quality Products</h3>
                    <p>
                      From inception to completion, we uphold the highest
                      standards of quality for your ultimate satisfaction.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img
                      src={time}
                      alt="timelydelivery"
                      className="img-fluid"
                    />
                    <h3>Timely Delivery</h3>
                    <p>
                      Delivering on time, every time - our commitment to
                      punctuality sets us apart.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img src={satis} alt="satisfaction" className="img-fluid" />
                    <h3>Customer Satisfaction</h3>
                    <p>
                      We pride ourselves on delivering exceptional customer
                      satisfaction through every interaction.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img src={cs} alt="customerservice" className="img-fluid" />
                    <h3>Strong Customer Support</h3>
                    <p>
                      We prioritize your needs and provide prompt and reliable
                      customer support whenever you require assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <ScrollImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
