import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, index) => {
            if (index === 0) {
              return (
                <div className="column is-12" key={post.id}>
                  <div className="columns">
                    <div className="column is-7 thumbnail-large">
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="column">
                      <div className="px-2">
                        <p className="has-text-grey has-text-weight-medium is-size-6">
                          {post.frontmatter.date}
                        </p>
                        <Link
                          className="has-text-black has-text-weight-bold title is-size-1 mt-0 mb-4 block"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <p>
                          {post.excerpt}
                          <br />
                        </p>
                        <Link className="button mt-1" to={post.fields.slug}>
                          Keep Reading →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return (
            <div className="column is-4 py-6" key={post.id}>
              <div>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
              </div>
              <article className={`blog-list-item is-child`}>
                <header>
                  
                  <p className="has-text-grey has-text-weight-medium is-size-6">
                    {post.frontmatter.date}
                  </p>
                  <p className="post-meta">
                    <Link
                      className="has-text-black has-text-weight-bold title is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                  <br />
                </p>
                <Link className="button mt-1" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </article>
            </div>
          )})}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 340)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 560, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
