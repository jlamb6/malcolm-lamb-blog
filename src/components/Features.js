import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { graphql, StaticQuery } from 'gatsby'

class Features extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: featuredWork } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {featuredWork.map((item) => (
          <div key={item.text} className="column is-6">
            <section className="section">
              <div className="has-text-centered">
                <div
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p>{item.text}</p>
            </section>
          </div>
        ))}
      </div>
    )
  }
}

Features.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default <StaticQuery
  query={graphql`
    query FeaturedQuery {
      allMarkdownRemark {
        edges {
          node {
            id,
            frontmatter {
              featuredpost
            }
          }
        }
      }
    }
  `}
  render={(data, count) => <Features data={data} count={count} />}
/>
