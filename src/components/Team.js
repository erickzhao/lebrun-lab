import React from "react";
import ReactMarkdown from "react-markdown";
import placeholder from "../img/placeholder.svg";

export default ({ members }) => (
  <div className="container">
    {members.map(m => (
        <div className="card is-horizontal section" key={m.name}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={m.photo || placeholder } alt={m.name} style={{objectFit: m.photo ? 'cover' : 'contain'}} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{m.name}</p>
            <p class="subtitle is-6">{m.email}</p>
            <ReactMarkdown source={m.description}/>
          </div>
        </div>
      ))}
  </div>
);
