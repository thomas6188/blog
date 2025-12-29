import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ListHeader from "../components/listHeader"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="posts-container">
        <ListHeader />
        <div className="new-posts-list">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const dateStr = post.frontmatter.date ? post.frontmatter.date.toUpperCase() : ""

            return (
              <div className="new-post-item" key={post.fields.slug}>
                <div className="new-post-date">
                  {dateStr}
                </div>
                <Link to={`/posts${post.fields.slug}`} className="new-post-title">
                  {title}
                </Link>
              </div>
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
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD-MMM-YYYY")
          title
        }
      }
    }
  }
`
