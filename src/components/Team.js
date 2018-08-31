import React from "react";

export default ({ members }) => (
  <div className="container">
    {members.map(m => (
        <div className="card is-horizontal section" key={m.name}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={m.photo} alt={m.name} style={{objectFit: 'cover'}} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{m.name}</p>
            <p class="subtitle is-6">{m.email}</p>
            <p>{m.description}</p>
          </div>
        </div>
      ))}
  </div>
);
