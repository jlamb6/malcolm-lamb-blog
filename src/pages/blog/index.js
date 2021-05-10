import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section">
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
                The Blog
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content px-4" style={{fontSize: '0 1em'}}>
              <BlogRoll small={false} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
