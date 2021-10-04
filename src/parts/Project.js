import React from "react";
import Button from "elements/Button";

export default function Project(props) {
  return (
    <section className="container mt-3" id="Project">
      <div className="row text-center">
        <div className="col">
          <h1 className="font-weight-bold text-gray-900 text-center mb-3">
            Project
          </h1>
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div
                  key={`project-${index}`}
                  className={`item ${index > 0 ? "column-6" : "column-6"} ${
                    index > 0 ? "row-1" : "row-1"
                  }`}
                >
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
                        href={`/properties/${item._id}`}
                        className="streched-link d-block text-gray-800"
                      >
                        <h5
                          className="h5 font-weight-bold"
                          style={{ paddingTop: `1rem` }}
                        >
                          {item.name}
                        </h5>
                      </Button>
                      <span className="text-gray-900 font-weight-light">
                        {item.details}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
