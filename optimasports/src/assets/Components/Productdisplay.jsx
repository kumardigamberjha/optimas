import React from "react";
import styled from "styled-components";
import badminton from "../Images/BADMINTON-2.jpg";

const Section = styled.section`
  --animate-duration: 2000ms;
  --animate-delay: 1s;
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;

  h3 {
    color: ${(props) => props.theme.txt};
    text-transform: uppercase;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

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
  .card {
    cursor: pointer;
    background: transparent;
    -webkit-backdrop-filter: blur(8px); /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
    background-color: rgb(228 228 228 / 15%);
    color: ${(props) => props.theme.txt};
  }
  .card:hover {
    box-shadow: inset 0 0 0 200px rgb(255 255 255 / 8%);
  }
  hr {
    border: 0;
    height: 3px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    );
    background-size: 100% 3px;
  }
`;
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Productdisplay = () => {
  return (
    <Section className="bgwall">
      <div className="container mt-5 text-center">
        <h3>
          <a href="#">Shoes</a>
        </h3>
      </div>
      <div className="container mt-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              <img src={badminton} className="card-img-top" alt="badminton" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Find More</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mt-4">
        <hr />
      </div>

      <div className="container mt-3 text-center">
        <h3>
          <a href="#">Shuttlecock</a>
        </h3>
      </div>

      <div className="container mt-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              <img src={badminton} className="card-img-top" alt="badminton" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mt-4">
        <hr />
      </div>

      <div className="container mt-3 text-center">
        <h3>
          <a href="#">Badminton</a>
        </h3>
      </div>

      <div className="container mt-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <SwiperSlide>
              <div
                className="card animate__animated animate__fadeInLeftBig"
                style={{ width: "18em" }}
              >
                {/* <img src="..." class="card-img-top" alt=""/> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card animate__animated animate__fadeInLeftBig"
                style={{ width: "18em" }}
              >
                {/* <img src="..." class="card-img-top" alt=""/> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card animate__animated animate__fadeInLeftBig"
                style={{ width: "18em" }}
              >
                {/* <img src="..." class="card-img-top" alt=""/> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card animate__animated animate__fadeInLeftBig"
                style={{ width: "18em" }}
              >
                {/* <img src="..." class="card-img-top" alt=""/> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card animate__animated animate__fadeInLeftBig"
                style={{ width: "18em" }}
              >
                {/* <img src="..." class="card-img-top" alt=""/> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <div className="container mt-4">
        <hr />
      </div>

      <div className="container mt-3 text-center">
        <h3>
          <a href="#">Other Items</a>
        </h3>
      </div>

      <div className="container mt-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card animate__animated animate__fadeInLeftBig"
              style={{ width: "18em" }}
            >
              {/* <img src="..." class="card-img-top" alt=""/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

export default Productdisplay;
