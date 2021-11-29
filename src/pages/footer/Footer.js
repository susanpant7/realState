import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" fixed-bottom">
        <footer
          className="fixed-bottom page-footer font-small"
          style={{ backgroundColor: "#1177ca" }}
        >
          <div
            className="footer-copyright text-center py-3"
            style={{ color: "#fff" }}
          >
            © 2021 Copyright:
            <a
              href="https://susan.pant7/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {" "}
              Growfore.com
            </a>
          </div>
        </footer>
      </div>{" "}
    </div>
  );
};

export default Footer;
