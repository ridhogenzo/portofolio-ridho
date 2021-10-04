import React from "react";
import Banner from "assets/images/Ridhogenzo.png";
import { Jumbotron } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Hero(props) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 3000,
      backSpeed: 100,
      strings: [
        "Front-end Developer",
        "Web Developer",
        "Augmented Reality Engineer",
      ],
    });
  }, []);
  return (
    <Fade Bottom delay={3000}>
      <Jumbotron>
        <section className="container">
          <div className="row row-cols-2">
            <div className="col-6">
              <Fade duration={3500}>
                <img
                  className="rounded-circle img-fluid"
                  style={{ paddingBottom: "1rem" }}
                  src={Banner}
                  alt="Banner"
                />
              </Fade>
            </div>
            <div className="col-6 text-center" style={{ paddingTop: 50 }}>
              <h1 className="line-height-1 mb-3 text-gray-900 font-weight-bold">
                Ridho Hayatullah
              </h1>
              <h2>
                Saya sangat berantusias ingin menjadi{" "}
                <span ref={textRef}></span>
              </h2>
            </div>
          </div>
        </section>
      </Jumbotron>
    </Fade>
  );
}
