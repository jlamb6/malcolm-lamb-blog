import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div
          className="blog-header is-size-1 margin-top-0"
        >
          <h1
            className="has-text-weight-bold title"
            style={{
              color: 'black',
              padding: '0 1rem',
              fontSize: '1.8em'
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <div className="container">
      
      </div>
    </section>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
