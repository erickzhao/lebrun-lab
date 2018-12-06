import React from "react";
import fileIcon from "../img/file.svg";

const Files = ({ files }) => {
  return (
    (files.length > 0) &&
      <div>
          <h2 className="title">Attachments</h2>
          <div className="columns">
            {files.map(f => (
              <div
                className="column is-one-fifth box has-text-centered"
                key={f.file}
              >
              <a href={f.file}>
                <figure className="image container is-128x128">
                    <img src={fileIcon} />
                </figure>
                <p>
                  <strong>{f.name}</strong>
                </p>
                <p className="is-size-7">{f.file.replace('/img/','')}</p>
              </a>
              </div>
            ))}
          </div>
      </div>
  );
};

export default Files;
