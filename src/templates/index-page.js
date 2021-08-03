import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
//import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  contact,
  intro,
}) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-full has-text-centered">
                <h1 className="title-large has-text-weight-bold landing-title" >
                  {title}
                </h1>
                <h3
                  className="subtitle has-text-weight-medium-light is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                  style={{
                    color: "black",
                    lineHeight: "2em",
                    padding: "0.25em 0 0 .2em",
                  }}
                >
                  {subheading}
                </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns py-6">
          <div className="column is-10 is-offset-1">
              <h3 className="has-text-centered has-text-weight-semibold is-size-2 mb-6">
                Latest stories
              </h3>
              <BlogRoll small />
              <div className="column is-12 has-text-centered">
                <Link className="button is-primary is-medium" to="/blog">
                  View blog
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-centered has-text-weight-semibold is-size-2 mb-6">
                {mainpitch.title}
              </h3>
              <div className="column">
                  <div className="box p-6">
                    <p className="subtitle">{mainpitch.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {false && <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
              <h3 className="has-text-centered has-text-weight-semibold is-size-2 mb-6">
                Featured Work
              </h3>
              {/*<Features gridItems={intro.blurbs} />*/}
              <div className="column is-12 has-text-centered">
                <Link className="button is-primary is-medium" to="/portfolio">
                  View portfolio
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <h3 className="has-text-centered has-text-weight-semibold is-size-2 mb-6">
                    {contact.heading}
                  </h3>
                  <div className="column is-12 has-text-centered">
                <Link className="button is-primary is-medium" to="/contact">
                  Contact me
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  contact: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        contact={frontmatter.contact}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        contact {
          heading
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
