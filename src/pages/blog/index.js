import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="margin-top-0"
        >
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
                  Saving Game Night
                </h1>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
              <div className="content px-4" style={{fontSize: '0 1em'}}>
                <BlogRoll />
              </div>
            </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}