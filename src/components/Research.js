import React from 'react'

export default ({ titles }) => (
  <div>
    <section className="section">
    <div className="container">
      <div className="columns is-multiline">
            {titles.map(t => (
              <div className="column is-one-third-desktop is-half-tablet is-full-mobile" key={t.name}>
                <div className="card ecse--card-equal-height">
                  <div className="card-image">
                    <figure className="is-square">
                      <img className="is-center" src={t.photo} alt={t.name}/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">{t.name}</p>
                    <p className="subtitle is-6">{t.position}</p>
                    <p>{t.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
    </section>
  </div>
)