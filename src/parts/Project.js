import { React, useState } from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Project(props) {
  return (
    <section
      className="container mt-3 project-content"
      id="Project"
      style={{ paddingBottom: 155, paddingTop: 50 }}
    >
      <div className="row">
        <div className="col">
          <Fade Top delay={1000}>
            <h1 className="font-weight-bold text-gray-900 text-center mb-3">
              Project
            </h1>
          </Fade>
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div
                  key={`project-${index}`}
                  className={`item ${index > 0 ? "column-6" : "column-6"} ${
                    index > 0 ? "row-1" : "row-1"
                  }`}
                >
                  <Fade delay={1500 * index}>
                    <div className="card card-featured">
                      <figure className="img-wrapper" style={{ height: 400 }}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/${item._id}`}
                          className="streched-link d-block text-gray-800"
                        >
                          <h5
                            className="h4 font-weight-bold"
                            style={{ paddingTop: `1rem` }}
                          >
                            {item.name}
                          </h5>
                        </Button>
                      </div>
                      <span className="text-gray-900 font-weight-light desc-proj">
                        {item.details}
                      </span>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
