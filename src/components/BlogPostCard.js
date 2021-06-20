import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default function BlogPostCard({ post }) {
  if (!post) return null;
  return (
    <div className="container blog-post" key={post.id}>
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
        <article className="blog-list-item is-child">
          <header>
            <p className="has-text-grey has-text-weight-normal is-size-7 mb-2">
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
        </article>
      </div>
      <div className="blog-item-footer">
        <Link className="button mt-1 is-link is-light" to={post.fields.slug}>
          Keep Reading →
        </Link>
      </div>
    </div>
  )
}