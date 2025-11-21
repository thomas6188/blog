import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="hero-section">
        <div className="hero-image-container">
          <StaticImage
            className="hero-image"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={250}
            height={250}
            quality={100}
            alt="Profile picture"
          />
        </div>
        <div className="hero-content">
          <h3 className="hero-title">Hello!</h3>
          <div className="hero-bio">
            {/* <h3> Welcome to my personal blog 🙂</h3> */}
            <h5>A Bit About Me:</h5>
            <p>
              I am a Software Engineer from Kerala, India. I graduated in 2010 with a bachelor's degree in Information Technology.
              I started my career as a SharePoint Developer. I now focus on helping customers build a Modern Workplace using Microsoft SAAS and Cloud offerings.
            </p>
          </div>
          <div className="action-buttons">
            <Link to="/blogs" className="circle-button btn-yellow">
              Blogs
            </Link>
            <Link to="/contact" className="circle-button btn-red">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage

export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
