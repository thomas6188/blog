import * as React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            {/* <h1 className="sidebar-title">Tools<br />& Craft</h1> */}
            <div className="sidebar-subtitle">
                Thoughts, ideas and musings.
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {/* <li><Link to="/posts">Latest</Link></li> */}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
