import React from "react";

export default ({ members }) => (
  <div className="container">
    <div className="columns is-multiline">
      {members.map(m => (
        <div
          className="column is-one-third-desktop is-half-tablet is-full-mobile"
          key={m.name}
        >
          <div className="card card-equal-height">
            <div className="card-image">
              <figure className="is-square is-flex is-horizontally-centered">
                <img src={m.photo} alt={m.name} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4">{m.name}</p>
              <p>{m.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
