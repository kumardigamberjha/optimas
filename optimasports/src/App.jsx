// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { dark } from "./assets/Styles/Theme";
import GlobalStyles from "./assets/Styles/Globalstyles";
import { ThemeProvider } from "styled-components";
import Homepage from "./assets/Section/Homepage";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./assets/Section/Aboutus";
import Contact from "./assets/Section/Contact";
import Prodcuts from "./assets/Section/Prodcuts";
import Shoes from "./assets/Section/Shoes";
import Badminton from "./assets/Section/Badminton";
import Other from "./assets/Section/Other";
import Shuttlecock from "./assets/Section/Shuttlecock";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-sroll-container ref={containerRef}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Prodcuts />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/badminton" element={<Badminton />} />
              <Route path="/others" element={<Other />} />
              <Route path="/shuttle" element={<Shuttlecock />} />
            </Routes>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
