import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      <section class="hero is-medium has-carousel">
        <div class="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
          <div class='carousel-container'>
            <div class='carousel-item has-background is-active'>
              <img class="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
            </div>
            <div class='carousel-item has-background'>
              <img class="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" />
            </div>
            <div class='carousel-item has-background'>
              <img class="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" />
            </div>
            <div class='carousel-item has-background'>
              <img class="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" />
            </div>
          </div>
          <div class="carousel-navigation is-overlay">
            <div class="carousel-nav-left">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="carousel-nav-right">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="hero-body has-text-centered">
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">News</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'news-post')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
      </div>
      
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
