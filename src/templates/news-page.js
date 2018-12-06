import React from "react";
import Header from "../components/Header";
import Link from "gatsby-link";

export const NewsPageTemplate = ({ news, title, subtitle, headerImage }) => {
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      <section className="section">
          <div className="container">
            {news
              .map(({ node: post }) => (
                <div
                  className="box"
                  style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
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
                    { post.excerpt.endsWith('…') && 
                      <Link className="button is-primary" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    }
                  </p>
                </div>
              ))}
          </div>
        </section>
    </div>
  );
};

export default ({ data }) => {
  const { edges: news } = data.news;
  const { title, headerImage, subtitle } = data.info.frontmatter;
  return (
    <div>
      <NewsPageTemplate
        news={news}
        title={title}
        headerImage={headerImage}
        subtitle={subtitle}
      />
    </div>
  );
};

export const newsPageQuery = graphql`
  query NewsPage {
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq:"news-post"}}}
    ) {
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
    info: markdownRemark(frontmatter: { templateKey: {eq: "news-page"}}) {
      frontmatter {
        title
        subtitle
        headerImage
      }
    }
  }
`;
