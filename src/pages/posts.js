import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location={location} title={siteTitle}>
            <div className="posts-container">
                <Sidebar />
                <div className="posts-grid">
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug

                        return (
                            <article
                                key={post.fields.slug}
                                className="post-card"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <Link to={`/posts${post.fields.slug}`} className="post-card-image">
                                    {/* Placeholder for image */}
                                    <span>📝</span>
                                </Link>
                                <div className="post-card-content">
                                    <div className="post-card-meta">
                                        {post.frontmatter.date}
                                    </div>
                                    <h2 className="post-card-title">
                                        <Link to={`/posts${post.fields.slug}`} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                    <p
                                        className="post-card-excerpt"
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                    <div className="post-card-author">
                                        <div className="author-avatar"></div>
                                        <div>
                                            <div className="author-name">Thomas Mathew</div>
                                            <div className="author-role">Author</div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
