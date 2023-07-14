// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  .nav-item .nav-link {
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
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
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Nav = () => {
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                  className="nav-link hover-underline-animation"
                  href="/aboutus"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-underline-animation"
                  href="/products"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-underline-animation"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Nav;
