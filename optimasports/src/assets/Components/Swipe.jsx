import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import track from "../Images/steven-lelham-atSaEOeE8Nk-unsplash.jpg";
import climbing from "../Images/maja-kochanowska-E-v6j5Y9xAs-unsplash.jpg";
import badminton from "../Images/muktasim-azlan-rjWfNR_AC5g-unsplash.jpg";
import shoes from "../Images/fachry-zella-devandra-KvRy5S8hKPw-unsplash.jpg";

// import required modules
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Section = styled.div`
  position: relative;
  height: 100vh;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide-caption {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: ${(props) => props.theme.fontlg};
    color: white;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mySwiper .swiper-slide {
    transition-duration: 1s; /* Adjust the duration as desired */
  }
`;

const Swipe = () => {
  return (
    <Section>
      <Swiper
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        speed={3000}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={badminton} alt="badminton" />
          <div className="swiper-slide-caption">
            Smash, Swing, and Succeed: Unleash Your Badminton Potential Today!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={shoes} alt="shoes" />
          <div className="swiper-slide-caption">
            Step into Success: Find the Perfect Pair of Shoes to Elevate Your
            Performance!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={climbing} alt="climbing" />
          <div className="swiper-slide-caption">
            Rise Above the Ordinary: Experience the Power and Freedom of Scaling
            Vertical Walls!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={track} alt="track" />
          <div className="swiper-slide-caption">
            Unleash Your Inner Sprinter: Push Your Limits and Leave a Trail of
            Victory on the Track!
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Swipe;
