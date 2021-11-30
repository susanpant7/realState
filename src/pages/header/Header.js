import "./HeaderStyles.css";

import { Link } from "react-router-dom";

// import { IoLogoFacebook } from "react-icons/io";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { AiFillHome } from "react-icons/ai";
// import { FcAbout } from "react-icons/fc";
// import { MdOutlineContacts, MdHomeRepairService } from "react-icons/md";
// import { IoMdTabletPortrait } from "react-icons/io";
// import { useState } from "react";

import { Navbar, Container, Nav, Card } from "react-bootstrap";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import HeaderImg from '../../images/headerBackground.jpeg';
// import HeaderSearchForm from "../../components/HeaderSearchForm/HeaderSearchForm";

const Header = () => {
  // const [selected, setSelected] = useState("home");

  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src={HeaderImg}
          alt="Header BkGr image"
          style={{ height: "450px", opacity: "0.7" }}
        />
        <Card.ImgOverlay>
          <Card.Text>
            <Navbar collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/" className="logo">
                  Real State Agency
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/services">
                      Services
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                      Contact
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/admin">
                      Admin
                    </Nav.Link> */}
                  </Nav>
                  <Nav>
                    <Nav.Link href="https://www.facebook.com" target="_blank">
                      <BsFacebook />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com" target="_blank">
                      <BsInstagram />
                    </Nav.Link>
                    <Nav.Link href="https://www.twitter.com" target="_blank">
                      <BsTwitter />
                    </Nav.Link>
                    {/* <Nav.Link>
                      <Button variant="primary"><MdLogin/> Login In</Button>
                      
                    </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* <HeaderSearchForm /> */}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Header;
