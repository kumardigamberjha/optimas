import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/parallax-bg.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";
import Design from "./Design";

const Section = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
    background: #000;
  }

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }

  .swiper-slide .subtitle {
    font-size: 21px;
  }

  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
  p {
    letter-spacing: 2px;
  }
`;

const Customer = () => {
  return (
    <Section>
      <Design />
      <div className="container text-center mt-4">
        <h1>Customer Review</h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Raghav
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            State Level Badminton Player
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Optima Sports is more than just a store; it's a community. The
              workshops and events they organize bring athletes together,
              creating an atmosphere of camaraderie and inspiration. I've made
              lifelong friends through their community and have learned so much
              from other athletes. Optima Sports goes above and beyond in
              supporting their customers, fostering a sense of belonging and
              motivation. I am proud to be a part of the Optima Sports family
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Kartik
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            National Level Table Tennis Player
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Optima Sports has become my go-to destination for all things
              sports-related. Whether I need new workout apparel, training
              accessories, or nutritional advice, they have it all. Their online
              platform is user-friendly, making it easy to browse and order
              products. The customer service is exceptional, with prompt
              responses and efficient delivery. Optima Sports truly understands
              the needs of athletes and provides unparalleled support on every
              step of the sports journey.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Jatin
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            National Level BasketBall Player
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              I can't say enough good things about Optima Sports. The staff is
              friendly, helpful, and genuinely passionate about sports. I
              visited their store looking for new running shoes, and they took
              the time to assess my gait and recommend the perfect pair. Not
              only did my new shoes improve my comfort while running, but they
              also helped me shave off seconds from my personal best times. I
              highly recommend Optima Sports to any athlete, regardless of their
              skill level.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Customer;
