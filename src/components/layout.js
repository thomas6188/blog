import * as React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaTwitter, FaXTwitter, FaGithub } from "react-icons/fa"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  header = (
    <div className="landing-header">
      <div className="header-title">
        <Link to="/">{title} <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}></span></Link>
      </div>
      <nav className="header-nav">
        <a href="https://linkedin.com/in/thomas6188" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin color="#0a66c2" size={22} />
        </a> |
        <a href="https://twitter.com/thomas6188" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter color="#333" size={22} />
        </a> |
        <a href="https://github.com/thomas6188" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub color="#333" size={22} />
        </a>
      </nav>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="landing-footer">
        <div className="footer-column">
          <p>
            Powered by{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>{" "}

            and{" "}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>.
            Developed with ❤️ and a touch of vibe coding.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
