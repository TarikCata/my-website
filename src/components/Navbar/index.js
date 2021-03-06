import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="menu-icon-div">
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              onClick={() => setClick(!click)}
            ></i>
          </div>
          <div className={click ? "div-menu-items active" : "div-menu-items"}>
            <ul className={click ? "menu-item active" : "menu-item"}>
              <Link
                to="home"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offsest={-300}
                duration={1000}
                onClick={() => setClick(!click)}
                className="menu-li one"
              >
                Home
              </Link>
              <Link
                to="about"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offsest={0}
                duration={1000}
                onClick={() => setClick(!click)}
                className="menu-li two"
              >
                About
              </Link>
              <Link
                to="work"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offsest={-1000}
                duration={1000}
                onClick={() => setClick(!click)}
                className="menu-li three"
              >
                Work
              </Link>
              <Link
                to="contact"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offsest={-700}
                duration={1000}
                onClick={() => setClick(!click)}
                className="menu-li four"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
