import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const Section = styled.section`
  position: relative;
  .nav-item .nav-link {
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  .search {
    color: white;
    font-size: ${(props) => props.theme.fontlg};
    cursor: pointer;
  }
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #0087ca;
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    cursor: pointer;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const ProductNav = () => {
  return (
    <Section>
      <nav className="navbar fixed-top navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active hover-underline-animation"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active hover-underline-animation"
                  aria-current="page"
                  href="shoes"
                >
                  Shoes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-underline-animation"
                  href="/shuttle"
                >
                  ShuttleCock
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-underline-animation"
                  href="/badminton"
                >
                  Badminton
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-underline-animation" href="/other">
                  Other
                </a>
              </li>
              <IoIosSearch className="search mt-2 mx-1" />
              <IoBagOutline className="search mt-2 mx-1" />
            </ul>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default ProductNav;
