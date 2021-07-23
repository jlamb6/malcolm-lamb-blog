import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPageTemplate = ({ title, heading, content, contentComponent }) => {
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
        <PageContent className="content px-3 my-6" content={content} />
      </div>
    </section>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
  //featuredWork: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <PortfolioPageTemplate
        heading={frontmatter.heading}
        title={frontmatter.title}
        description={frontmatter.description}
        contentComponent={HTMLContent}
        content={frontmatter.html}
        featuredWork={frontmatter.featuredWork}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
        //featuredWork: PropTypes.object,
      }),
    }),
  }),
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html,
      frontmatter {
        title,
        heading,
        description,
      }
    }
  }
`
