import React from "react";
import { Jumbotron } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function AboutMe(props) {
  return (
    <Jumbotron
      className="jumbotron-about"
      id="AboutMe"
      style={{ paddingLeft: 1, paddingRight: 1 }}
    >
      <Fade top cascade delay={5500}>
        <section className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold text-gray-900 text-center mb-3">
                About Me
              </h1>
              <div className="row">
                <div className="h4 text-center">
                  <p>
                    My name is Ridho Hayatullah, I'm 22 years old and I live in
                    Jakarta. And my domicile is Jatinegara.
                  </p>
                  <p>
                    I'm looking for new opporunity in Front-End Developer. My
                    experience is based on technologies like Javascript, HTML5,
                    CSS3, and C#.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,32L18.5,53.3C36.9,75,74,117,111,117.3C147.7,117,185,75,222,58.7C258.5,43,295,53,332,96C369.2,139,406,213,443,224C480,235,517,181,554,170.7C590.8,160,628,192,665,197.3C701.5,203,738,181,775,144C812.3,107,849,53,886,58.7C923.1,64,960,128,997,154.7C1033.8,181,1071,171,1108,192C1144.6,213,1182,267,1218,282.7C1255.4,299,1292,277,1329,261.3C1366.2,245,1403,235,1422,229.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>
    </Jumbotron>
  );
}
