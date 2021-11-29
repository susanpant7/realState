import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Contact from "./Contact";
import Services from "./Services";
// import Admin from "./Admin";
import { Container } from "react-bootstrap";

const Body = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
          </Routes>
        </Container>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Body;
