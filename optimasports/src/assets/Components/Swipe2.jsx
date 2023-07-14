import React from "react";
import styled from "styled-components";
import sports from "../Images/sports.jpeg";
import badminton from "../Images/pngwing.com.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Design from "./Design";

const Section = styled.div`
  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    cursor: pointer;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    width: 33%;
  }

  .swiper-slide:nth-child(2n) {
    width: 33%;
  }

  .swiper-slide:nth-child(3n) {
    width: 33%;
  }
`;

const Swipe2 = () => {
  return (
    <Section>
      <Design />

      <div className="container mt-5 text-center">
        <h1>Products We Offer</h1>
      </div>
      <br />
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-10" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "10",
              boxShadow: "2px 2px 2px white",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sports}
            alt="sports"
            style={{ position: "relative", zIndex: "-1" }}
          />
          <img
            src={badminton}
            alt="badminton"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Swipe2;
