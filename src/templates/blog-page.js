import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from "../components/BlogRoll"
import Content, { HTMLContent } from '../components/Content'

export const BlogPageTemplate = ({ title, content, contentComponent }) => {
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
      <div className="section">
        <div className="container">
          <div className="content px-4" style={{fontSize: '0 1em'}}>
            <BlogRoll small={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BlogPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
