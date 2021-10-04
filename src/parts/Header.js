import React from "react";
import BrandIcon from "parts/IconText";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <Fade delay={1000}>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <Fade delay={2000}>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item ${getNavLinkClass("/")}`}>
                    <a href="#AboutMe" className="semut">
                      About me
                    </a>
                    <a href="#Project" className="semut">
                      Project
                    </a>
                    <a href="#Contact" className="semut">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
