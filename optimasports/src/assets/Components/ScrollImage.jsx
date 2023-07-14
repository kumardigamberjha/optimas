import React, { useEffect, useRef } from "react";
import img1 from "../Images/jeffery-erhunse-6D2Lmtv_X8A-unsplash.jpg";
import img2 from "../Images/saif71-com-IHYoOsWkufQ-unsplash.jpg";
import styled from "styled-components";

const Section = styled.div`
  .scroll-image-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .scroll-image {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 0.3s ease-out;
  }

  .overlay-image {
    position: absolute;
    top: 20%;
    left: 20%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const ScrollImage = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      const translateY1 =
        -scrollPercentage *
        (imageRef1.current.offsetHeight - window.innerHeight);
      const translateY2 =
        -scrollPercentage *
        (imageRef2.current.offsetHeight - window.innerHeight);

      imageRef1.current.style.transform = `translateY(${translateY1}px)`;
      imageRef2.current.style.transform = `translateY(${translateY2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section>
      <div className="scroll-image-container">
        <img
          ref={imageRef1}
          src={img1}
          alt="Image 1"
          className="scroll-image"
        />
        <img
          ref={imageRef2}
          src={img2}
          alt="Image 2"
          className="scroll-image overlay-image"
        />
      </div>
    </Section>
  );
};

export default ScrollImage;
